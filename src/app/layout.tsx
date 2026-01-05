import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Ropa_Sans, Pacifico } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
})

const ropaSans = Ropa_Sans({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-ropa-sans',
})

export const metadata: Metadata = {
  title: "Ótica Lorgil Penedo-AL | Óculos de Grau e Sol",
  description: "Ótica Lorgil em Penedo-AL: Encontre os melhores óculos de grau, óculos de sol e lentes de contato. Atendimento personalizado e as melhores marcas do mercado.",
  keywords: "ótica penedo, óculos penedo, óculos de grau penedo, óculos de sol penedo, lentes de contato penedo, ótica lorgil, óculos de grau alagoas",
  openGraph: {
    title: "Ótica Lorgil Penedo-AL | Óculos de Grau e Sol",
    description: "Ótica Lorgil em Penedo-AL: Encontre os melhores óculos de grau, óculos de sol e lentes de contato. Atendimento personalizado e as melhores marcas do mercado.",
    url: "https://www.oticalorgil.com.br",
    siteName: "Ótica Lorgil",
    images: [
      {
        url: "https://www.oticalorgil.com.br/img/Logos/Logo_Lorgil.svg",
        width: 1200,
        height: 630,
        alt: "Ótica Lorgil - Uma ótica diferente para você ver o mundo!",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ótica Lorgil Penedo-AL | Óculos de Grau e Sol",
    description: "Ótica Lorgil em Penedo-AL: Encontre os melhores óculos de grau, óculos de sol e lentes de contato.",
    images: ["https://www.oticalorgil.com.br/img/Logos/Logo_Lorgil.svg"],
    creator: "@oticalorgil",
  },
  alternates: {
    canonical: "https://www.oticalorgil.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${ropaSans.variable} ${pacifico.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ótica Lorgil" />
        <meta name="google-site-verification" content="TCdbfXNFBn1HYwKZocDepcYAg9_O5HUPqRsKgoo6C4o" />
        <link rel="icon" href="/img/Logos/Logo_Lorgil.svg" />
        
        {/* Meta tags para WhatsApp e redes sociais */}
        <meta property="og:title" content="Ótica Lorgil Penedo-AL | Óculos de Grau e Sol" />
        <meta property="og:description" content="Ótica Lorgil em Penedo-AL: Encontre os melhores óculos de grau, óculos de sol e lentes de contato. Atendimento personalizado e as melhores marcas do mercado." />
        <meta property="og:image" content="https://www.oticalorgil.com.br/img/Logos/Logo_Lorgil.svg" />
        <meta property="og:url" content="https://www.oticalorgil.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ótica Lorgil" />
        
        {/* Meta tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ótica Lorgil Penedo-AL | Óculos de Grau e Sol" />
        <meta name="twitter:description" content="Ótica Lorgil em Penedo-AL: Encontre os melhores óculos de grau, óculos de sol e lentes de contato." />
        <meta name="twitter:image" content="https://www.oticalorgil.com.br/img/Logos/Logo_Lorgil.svg" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
