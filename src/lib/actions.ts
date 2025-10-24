// lib/actions.ts
"use server";

import { z } from "zod";

export type State = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
  };
  redirectUrl?: string | null;
};

const FormSchema = z.object({
  name: z.string().min(2, { message: "O nome é obrigatório." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z
    .string()
    .min(10, { message: "O número de Whatsapp parece curto demais." }),
  source: z.enum(["curso", "ebook"]),
});

export async function submitForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    source: formData.get("source"),
  });

  if (!validatedFields.success) {
    return {
      message: "Falha no envio. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, source } = validatedFields.data;
  const submissionDate = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  try {
    // Envia dados para o n8n webhook
    const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        source,
        submissionDate,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro no webhook: ${response.status}`);
    }

    // Define a URL de redirecionamento baseada na source
    const redirectUrl =
      source === "curso"
        ? "https://www.udemy.com/course/curso-do-cheque-especial-a-independencia-financeira/" // https://pay.hotmart.com/E101190894V?checkoutMode=10
        : "/ebook/recompensa";

    return {
      message: "Inscrição realizada! Você será redirecionado em breve.",
      errors: {},
      redirectUrl,
    };
  } catch (error) {
    console.error("Erro ao enviar para o n8n:", error);
    return {
      message: "Ocorreu um erro no servidor. Tente novamente mais tarde.",
      errors: {},
    };
  }
}
