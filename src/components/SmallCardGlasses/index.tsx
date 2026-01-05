import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function SmallCardGlasses({
  title,
  linkImgGlasses,
  linkImgEnterprise,
  modelo,
  collection,
}: {
  title: string
  linkImgGlasses: string,
  modelo: string,
  collection: string,
  linkImgEnterprise: string
}) {
  return (
    <div className={`bg-white p-3 sm:p-5 w-[170px] sm:w-[210px] md:w-[250px] h-[150px] sm:h-[212px] border-[1px] border-[#0000006B] rounded-[4px] flex flex-col ${poppins.className} overflow-hidden`}>
      <div className="flex-1">
        <div className="flex justify-center items-center h-12 sm:h-16">
          <div className="relative w-[90px] sm:w-[120px] h-[45px] sm:h-[60px]">
            <Image
              src={linkImgGlasses}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-end mt-1 sm:mt-2 mb-0.5 sm:mb-1">
          <span className="text-[7px] sm:text-[9px] text-black tracking-[0.04em] font-[300]">IMAGEM MERAMENTE ILUSTRATIVA</span>
        </div>
        <div className="w-full h-[1px] bg-[#414859] my-1 sm:my-2"></div>
      </div>
      <div className="mt-1 sm:mt-2">
        <h3 className="text-black tracking-[0.1em] font-[400] text-[8px] sm:text-[10px]">MODELO: {modelo}</h3>
        <div className="flex justify-between items-center mt-2 sm:mt-3">
          <h3 className="text-[8px] sm:text-[10px] text-black self-end tracking-[0.09em] font-[300]">
            COLEÇÃO {collection}
          </h3>
          <div className="relative w-[50px] sm:w-[70px] h-[12px] sm:h-[15px]">
            <Image
              src={linkImgEnterprise}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}