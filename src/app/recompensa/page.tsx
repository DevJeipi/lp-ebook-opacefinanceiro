import Link from "next/link";

export default function Recompensa() {
  return (
    <main>
      <section className="bg-primary-black text-primary-white flex h-screen flex-col items-center justify-center gap-6 text-center">
        <div className="bg-primary-blue flex w-full flex-col gap-2 rounded-xl py-4 md:w-1/2">
          <h1 className="text-4xl font-bold">Receba o que lhe prometemos!</h1>
          <p className="text-xl">EBOOK + ACESSO A AULA DO NOSSO CURSO</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={"/ORenascimentoFinanceiro.pdf"}
            className="bg-primary-orange border-primary-orange cursor-pointer rounded-md border px-10 py-4 text-xl transition-all duration-300 hover:scale-105 hover:bg-transparent"
          >
            Ebook
          </Link>
          <Link
            href={"https://youtu.be/kQ_9K-gWM2I?si=_KCJQVAD5iVDh4Kc"}
            className="border-primary-orange hover:bg-primary-orange cursor-pointer rounded-md border px-10 py-4 text-xl transition-all duration-300 hover:scale-105"
          >
            Aula Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
