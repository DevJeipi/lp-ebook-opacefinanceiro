import { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ebook e Aula Gratuitas | O Pace Financeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lato.className} antialiased`}>
        {/* Script do Google Tag Manager para o <head> */}
        <Script
          id="gtm-script-head"
          strategy="afterInteractive" // Carrega após a página se tornar interativa
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-585Z9J5X');
          `,
          }}
        />

        {/* O Next.js renderiza o <body> no layout raiz. 
        Este fragmento <> garante que o noscript e os {children} sejam injetados corretamente.
        O <noscript> deve vir logo após a abertura do body.
      */}

        {/* Fallback do Google Tag Manager para o <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-585Z9J5X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Esta linha é essencial! Ela renderiza o conteúdo da sua página (page.tsx) */}
        {children}
      </body>
    </html>
  );
}
