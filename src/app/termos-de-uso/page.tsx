import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermosDeUsoPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <main className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-red-100 px-10 py-12 font-poppins text-gray-900">
          <h1 className="text-3xl font-bold mb-8 text-red-700 text-center">Termos de Uso – Lorgil Ótica</h1>

          <p className="mb-8 text-lg leading-relaxed text-justify">
            Ao acessar o site da Lorgil Ótica, você concorda com os seguintes termos e condições de uso:
          </p>

          <div className="border-b border-red-100 mb-8" />
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">1. Finalidade do Site</h2>
          <p className="mb-8 leading-relaxed text-justify">
            Este site tem finalidade exclusivamente informativa e institucional. As informações contidas aqui são voltadas à apresentação da empresa, seus serviços, unidades e formas de contato.
          </p>

          <div className="border-b border-red-100 mb-8" />
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">2. Conteúdo</h2>
          <p className="mb-4 leading-relaxed text-justify">
            Todo o conteúdo publicado neste site – incluindo textos, imagens, logotipos e demais elementos visuais – é de propriedade da Lorgil Ótica ou utilizado com permissão de terceiros, estando protegido pelas leis de direitos autorais.
          </p>
          <p className="mb-8 leading-relaxed text-justify">
            É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia e por escrito da empresa.
          </p>

          <div className="border-b border-red-100 mb-8" />
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">3. Contato via WhatsApp</h2>
          <p className="mb-8 leading-relaxed text-justify">
            Nosso site oferece um botão que redireciona para o atendimento via WhatsApp. Ao clicar, você será direcionado à plataforma externa, sujeita aos seus próprios termos e políticas. Não nos responsabilizamos pelo uso do WhatsApp fora do ambiente da conversa iniciada com a Lorgil Ótica.
          </p>

          <div className="border-b border-red-100 mb-8" />
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">4. Limitação de Responsabilidade</h2>
          <p className="mb-8 leading-relaxed text-justify">
            A Lorgil Ótica se esforça para manter as informações do site sempre atualizadas e corretas, mas não garante que todo o conteúdo esteja isento de erros ou omissões. O uso das informações é de responsabilidade do usuário.
          </p>

          <div className="border-b border-red-100 mb-8" />
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">5. Modificações</h2>
          <p className="mb-8 leading-relaxed text-justify">
            Estes Termos de Uso podem ser atualizados a qualquer momento, sem aviso prévio. Recomendamos que você os revise periodicamente.
          </p>

          <p className="mb-8 text-sm text-gray-600">
            <strong className="font-semibold text-gray-700">Última atualização:</strong> 23 de abril de 2025
          </p>

          <p className="leading-relaxed text-justify">
            Caso tenha dúvidas, entre em contato conosco pelo WhatsApp.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
