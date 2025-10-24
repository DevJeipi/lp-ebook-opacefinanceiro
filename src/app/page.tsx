import { GridContainer } from "@/components/ui/GridContainer";
import { BgImage } from "@/components/ui/BgImage";
import { Footer } from "@/components/footer";
import LeadForm from "@/components/LeadForm";
import Image from "next/image";

export default function Ebook02() {
  return (
    <>
      <section className="relative min-h-screen">
        <BgImage />
        <GridContainer className="relative flex h-full min-h-screen flex-col items-center justify-center py-8 lg:py-16">
          <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
              <h1 className="font-heading text-primary-white text-2xl font-bold sm:text-3xl lg:text-4xl">
                Conquiste Sua{" "}
                <span className="text-gradient-animated">
                  Independência Financeira
                </span>
              </h1>

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <Image
                  src="/ebooks2.webp"
                  width={120}
                  height={199}
                  alt="E-book O Renascimento Financeiro"
                  className="mx-auto lg:mx-0"
                />
                <div className="space-y-4">
                  <p className="text-primary-white/90 text-base sm:text-lg">
                    <span className="bg-primary-orange mb-2 inline-block rounded-full px-4 py-1 text-sm font-bold">
                      100% Gratuito
                    </span>
                    <br />
                    <span className="font-bold">
                      E-book + Aula Exclusiva:
                    </span>{" "}
                    Domine suas finanças e transforme sua vida financeira!
                  </p>
                  <ul className="text-primary-white/80 space-y-2 text-sm sm:text-base">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-orange">✓</span>
                      Controle seus gastos de forma eficiente
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-orange">✓</span>
                      Elimine dívidas definitivamente
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-orange">✓</span>
                      Crie um fundo de emergência sólido
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-orange">✓</span>
                      Comece a investir com segurança
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-orange">✓</span>
                      Alcance sua independência financeira
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-orange/10 mt-4 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-primary-white/90 text-sm sm:text-base">
                  <span className="font-bold">BÔNUS:</span> Aula exclusiva sobre
                  como começar do zero sua jornada financeira, mesmo estando
                  endividado!
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm />
            </div>
          </div>
        </GridContainer>
      </section>
      <Footer />
    </>
  );
}
