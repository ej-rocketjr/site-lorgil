import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function BigCardGlasses({
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
    <div className={`bg-white p-4 w-[48%] h-auto rounded-[8px] flex flex-col border border-black ${poppins.className}`}>
      <div className="flex-1">
        <div className="flex justify-center items-center h-32">
          <div className="relative w-full h-[130px]">
            <Image
              src={linkImgGlasses}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 mb-1">
          <span className="text-xs sm:text-[14px] text-black tracking-[0.09em] font-[300]">IMAGEM MERAMENTE ILUSTRATIVA</span>
        </div>
        <div className="w-full h-[1px] bg-black my-2"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm sm:text-base text-black tracking-[0.1em] font-[400]">MODELO: {modelo}</h3>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-xs sm:text-[14px] text-black self-end tracking-[0.09em] font-[300]">
            COLEÇÃO <span className="font-bold">{collection}</span>
          </h3>
          <div className="relative w-[90px] sm:w-[120px] h-[25px]">
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