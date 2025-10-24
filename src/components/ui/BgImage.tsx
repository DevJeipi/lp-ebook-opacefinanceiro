export function BgImage() {
  return (
    <>
      <div className="absolute inset-0 -z-20">
        <img
          src="/imagemdefundologin.webp"
          alt="Gráfico de fundo"
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          fetchPriority="high"
        />
      </div>
      <div className="bg-primary-blue/40 absolute inset-0 -z-10" />
    </>
  );
}
