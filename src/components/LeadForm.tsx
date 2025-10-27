"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitForm } from "@/lib/actions";
import Image from "next/image";
import logo from "../../public/logomark-pacefinanceiro-removebg.webp";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-primary-orange text-primary-white w-full rounded-sm p-6 text-2xl font-bold transition-all duration-300 hover:scale-102 focus:bg-transparent disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      {pending ? "Enviando..." : "Receber minhas recompensas"}
    </button>
  );
}

export default function LeadForm() {
  const [state, formAction] = useActionState(submitForm, {
    message: null,
    errors: {},
    redirectUrl: null,
  });

  useEffect(() => {
    if (state?.redirectUrl) {
      window.location.href = state.redirectUrl;
    }
  }, [state?.redirectUrl]);

  return (
    <div className="bg-primary-blue/10 w-full max-w-md rounded-xl p-8 backdrop-blur-sm">
      <div className="mb-8 flex flex-col items-center gap-4">
        <Image
          src={logo}
          alt="Logo do O Pace Financeiro"
          width={70}
          height={37}
        />
        <h2 className="text-primary-white text-center text-2xl font-bold">
          Baixe agora seu e-book gratuito + aula exclusiva
        </h2>
      </div>
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome completo*"
            className="focus:ring-primary-orange bg-primary-blue/40 text-primary-white w-full rounded-sm border border-gray-300 p-4 text-lg focus:ring-2 focus:outline-none"
            required
          />
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu melhor email*"
            className="focus:ring-primary-orange bg-primary-blue/40 text-primary-white w-full rounded-sm border border-gray-300 p-4 text-lg focus:ring-2 focus:outline-none"
            required
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
          )}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Seu WhatsApp*"
            className="focus:ring-primary-orange bg-primary-blue/40 text-primary-white w-full rounded-sm border border-gray-300 p-4 text-lg focus:ring-2 focus:outline-none"
            required
          />
          {state.errors?.phone && (
            <p className="mt-1 text-sm text-red-500">{state.errors.phone[0]}</p>
          )}
        </div>
        <input type="hidden" name="source" value="ebook" />
        <SubmitButton />
        <p className="text-primary-white/60 mt-4 text-center text-sm">
          Seus dados estão seguros e nunca serão compartilhados
        </p>
      </form>
    </div>
  );
}
