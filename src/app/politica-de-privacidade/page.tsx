import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <main className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-red-100 px-10 py-12 font-poppins text-gray-900"> 
          <h1 className="text-3xl font-bold mb-8 text-red-700 text-center">Política de Privacidade – Lorgil Ótica</h1>
          <p className="mb-8 text-lg leading-relaxed text-justify">
            A Lorgil Ótica respeita a sua privacidade. Nosso site tem caráter exclusivamente informativo e não coleta dados pessoais diretamente dos visitantes por meio de formulários ou cadastros.
          </p>
          <div className="border-b border-red-100 mb-8" /> 
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">1. Redirecionamento para Plataformas Externas</h2> 
          <p className="mb-4 leading-relaxed text-justify">
            Nosso site possui botões que redirecionam o usuário para plataformas externas com o objetivo de facilitar o contato com a Lorgil Ótica:
          </p>
          <ul className="list-disc list-inside mb-4 leading-relaxed space-y-2">
            <li className="text-justify">
              <strong>WhatsApp:</strong> Um botão permite iniciar uma conversa diretamente com nossa equipe pelo WhatsApp. Ao clicar, você será redirecionado para a plataforma do WhatsApp, cuja utilização está sujeita à Política de Privacidade do WhatsApp.
            </li>
            <li className="text-justify">
              <strong>Instagram:</strong> Um ícone no topo do site direciona para o perfil oficial da Lorgil Ótica no Instagram. A navegação nessa rede social está sujeita aos Termos de Uso e Política de Privacidade do Instagram.
            </li>
          </ul>
          <p className="mb-8 leading-relaxed text-justify">
            Esses redirecionamentos são apenas para fins de comunicação. Não coletamos nenhum dado pessoal diretamente por meio do site.
          </p>
          <div className="border-b border-red-100 mb-8" /> 
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">2. Cookies e Dados de Navegação</h2>
          <p className="mb-8 leading-relaxed text-justify"> 
            Nosso site pode utilizar cookies básicos para fins de análise de tráfego (como Google Analytics), ajudando-nos a entender como os visitantes utilizam o site e melhorando sua experiência. Essas informações são anônimas e não permitem identificar o usuário individualmente.
          </p>
          <div className="border-b border-red-100 mb-8" />
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">3. Segurança e Transparência</h2> 
          <p className="mb-8 leading-relaxed text-justify"> 
            Mesmo sem coleta ativa de dados, prezamos pela segurança e transparência. Não compartilhamos nenhuma informação com terceiros além das ferramentas de análise mencionadas.
          </p>
          <div className="border-b border-red-100 mb-8" /> 
          <h2 className="font-semibold text-red-600 text-xl mt-8 mb-3">4. Alterações na Política</h2> 
          <p className="mb-8 leading-relaxed text-justify"> 
            Esta política poderá ser atualizada para refletir mudanças futuras no site. Recomendamos que você a consulte periodicamente.
          </p>
          <p className="mb-8 text-sm text-gray-600"> 
            <strong className="font-semibold text-gray-700">Última atualização:</strong> 23 de abril de 2025
          </p>
          <p className="leading-relaxed text-justify"> 
            Caso tenha dúvidas, entre em contato conosco diretamente pelo WhatsApp.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
