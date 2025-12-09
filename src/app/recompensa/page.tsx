import { BgImage } from "@/components/ui/BgImage";
import { GridContainer } from "@/components/ui/GridContainer";

export default function Recompensa() {
  const videoId = "v8atXPQTLxs";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&fs=1&playsinline=1&cc_load_policy=0&iv_load_policy=3`;

  return (
    <main>
      <section className="relative min-h-screen">
        <BgImage />
        <GridContainer className="relative flex min-h-screen flex-col items-center justify-center py-8 lg:py-16">
          <div className="flex w-full max-w-5xl flex-col items-center gap-8">
            {/* Cabeçalho */}
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <div className="bg-primary-blue/90 backdrop-blur-sm flex w-full flex-col gap-3 rounded-xl px-6 py-6 md:w-auto md:px-12">
                <h1 className="font-heading text-primary-white text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Receba o que lhe prometemos!
                </h1>
                <p className="text-primary-white/90 text-lg sm:text-xl">
                  Acesso à Aula Exclusiva Gratuita
                </p>
              </div>
            </div>

            {/* Container do Vídeo */}
            <div className="relative w-full">
              {/* Moldura decorativa */}
              <div className="bg-primary-blue/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl md:p-6">
                <div className="bg-primary-black/50 rounded-xl p-2 md:p-3">
                  {/* Vídeo Embed */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src={embedUrl}
                      title="Aula Exclusiva Gratuita - O Renascimento Financeiro"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full rounded-lg"
                      style={{
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Decoração inferior */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="bg-primary-orange h-1 w-12 rounded-full"></div>
                  <div className="bg-primary-orange/50 h-1 w-8 rounded-full"></div>
                  <div className="bg-primary-orange h-1 w-12 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Mensagem de apoio */}
            <div className="bg-primary-orange/10 backdrop-blur-sm rounded-lg p-4 text-center md:p-6">
              <p className="text-primary-white/90 text-sm sm:text-base">
                <span className="font-bold text-primary-orange">Aproveite!</span> Esta aula foi criada especialmente para você começar sua transformação financeira hoje mesmo.
              </p>
            </div>
          </div>
        </GridContainer>
      </section>
    </main>
  );
}
