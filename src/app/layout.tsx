import './globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" dir="ltr">
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
