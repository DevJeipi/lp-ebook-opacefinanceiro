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
  // Normalize phone to a single digits-only string with country + area + number
  // Desired format example: 5551999999999 (country 55 + area 51 + 9-digit number)
  function normalizePhone(raw: string) {
    const digits = String(raw).replace(/\D/g, "");

    // If it already looks like country+area+number (13 digits for Brazil e.g. 55 + 2 + 9)
    if (digits.length === 13) return digits;

    // If it's 11 digits (area + 9) -> prepend Brazil country code 55
    if (digits.length === 11) return `55${digits}`;

    // If it's 10 digits (area + 8) -> prepend 55 (legacy landline)
    if (digits.length === 10) return `55${digits}`;

    // If it already starts with '55' but has different length, return as-is
    if (digits.startsWith("55")) return digits;

    // Fallback: if shorter than expected, still prepend 55
    if (digits.length <= 9) return `55${digits}`;

    // Default: return digits
    return digits;
  }

  const normalizedPhone = normalizePhone(phone);
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
        phone: normalizedPhone,
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
        : "/recompensa";

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
