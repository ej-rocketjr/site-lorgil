import Image from 'next/image'
import Map from '../Map'

export default function Section6() {
  return (
    <>
      <div id="mapas" className="w-full pt-3 md:pt-4 lg:pt-6 pb-0 text-center font-poppins bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF2A2A] mb-1">
          Nossa Localização
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto px-4 md:whitespace-nowrap mb-1">
          Estamos localizados em um ponto de fácil acesso. Venha nos visitar!
        </p>
      </div>

      {/* Componente do Mapa */}
      <Map />

      <div className="w-full bg-[#222222] text-white pt-6 md:pt-10 lg:pt-12 pb-0 font-poppins px-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12 lg:gap-16">
          <div className="w-2/3 md:w-1/3 lg:w-1/4 flex-shrink-0">
            <Image
              src="/img/ImgsSection6/mulher-footer.svg"
              alt="Mulher sorrindo segurando armação de óculos"
              width={280}
              height={336}
              className="object-contain"
            />
          </div>
          <div className="flex-grow text-center md:text-left pb-4 md:pb-6 lg:pb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 font-medium">
              Fique por dentro e receba nossas novidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 font-normal">
              <div>
                <h3 className="text-base md:text-lg mb-1">Horário de Atendimento:</h3>
                <p className="text-sm md:text-base">Segunda à Sexta: 08h00 às 18h00</p>
                <p className="text-sm md:text-base">Sábado: 08h00 às 12h00</p>
              </div>
              <div>
                <p className="text-sm md:text-base mb-2">Fale com a gente no WhatsApp:</p>
                <a
                  href="https://wa.me/558296218742?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20%F0%9F%98%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-base bg-[#FF2A2A] hover:bg-[#E6130A] text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <Image
                    src="/img/ImgsSection6/logo-whatsapp.svg"
                    alt="Logo WhatsApp"
                    width={20}
                    height={20}
                  />
                  (82) 9 9621-8742
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}