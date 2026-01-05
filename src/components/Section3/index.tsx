import SmallCardGlasses from "../SmallCardGlasses";
import BigCardGlasses from "../BigCardGlasses";
import Image from "next/image";

const colcciGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-gabi.svg",
    modelo: "C6189KCE5",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/colcci.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-livia.svg",
    modelo: "C6204B9255",
    collection: "LIVIA",
    linkImgEnterprise: "/img/Enterprises/colcci.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-bandy-5.svg",
    modelo: "C6210A3455",
    collection: "BANDY 5",
    linkImgEnterprise: "/img/Enterprises/colcci.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-cora.svg",
    modelo: "C0150A0233",
    collection: "CORA",
    linkImgEnterprise: "/img/Enterprises/colcci.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-cora.svg",
    modelo: "C0150A0233",
    collection: "CORA",
    linkImgEnterprise: "/img/Enterprises/colcci.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-arethar-rx.svg",
    modelo: "C6125DJ757",
    collection: "ARETHAR RX",
    linkImgEnterprise: "/img/Enterprises/colcci.svg",
  },
];

const lavoratoGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/lovarato-elle.svg",
    modelo: "0154 / 0156",
    collection: "ÉLLE",
    linkImgEnterprise: "/img/Enterprises/lovarato.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/lovarato-duelii.svg",
    modelo: "31011",
    collection: "DUE 'L' II",
    linkImgEnterprise: "/img/Enterprises/lovarato.svg",
  },
];

const fiammaGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-casual.svg",
    modelo: "41001 / 41002",
    collection: "CASUAL",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-ride.svg",
    modelo: "4055 / 4056",
    collection: "RIDE",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-lifestyle.svg",
    modelo: "4049",
    collection: "LIFESTYLE",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-modern.svg",
    modelo: "4038",
    collection: "MODERN",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-velocity.svg",
    modelo: "41055 / 41056 / 41057",
    collection: "VELOCITY",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg",
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-speed.svg",
    modelo: "41027 / 41028",
    collection: "SPEED",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg",
  },
];

export default function Section3() {
  return (
    <section className="w-full bg-white text-black my-5">
      {/* Banner Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="overflow-hidden mb-14">
            <Image
              src="/img/ImgsSection3/first-image.svg"
              alt="Óculos de sol"
              width={1200}
              height={300}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Colcci Section */}
      <div id="Colcci" className="flex flex-col md:flex-row items-center gap-10 mb-14 scroll-mt-80">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src="/img/ImgsSection3/second-image.svg"
              alt="Óculos Colcci"
              width={840}
              height={440}
              className="w-full h-auto"
            />
            <Image
              src="/img/ImgsSection3/third-image.svg"
              alt="Logo Colcci"
              width={840}
              height={440}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
            {colcciGlasses.slice(0, 6).map((glass, index) => (
              <div key={index} className="flex justify-center">
                <SmallCardGlasses
                  title={glass.title}
                  linkImgGlasses={glass.linkImgGlasses}
                  modelo={glass.modelo}
                  collection={glass.collection}
                  linkImgEnterprise={glass.linkImgEnterprise}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lavorato Section */}
      <div id="Lavorato" className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 mb-14 scroll-mt-80">
        <div className="w-full md:w-1/2">
          <Image
            src="/img/ImgsSection3/fourth-image.svg"
            alt="Lavorato Banner"
            width={840}
            height={440}
            className="w-full h-auto"
          />
        </div>
        <div className="container mx-auto px-4 mt-4 md:mt-0 md:w-1/2">
          <div className="flex justify-around md:justify-between w-full gap-4">
            {lavoratoGlasses.map((glass, index) => (
              <BigCardGlasses
                key={index}
                title={glass.title}
                linkImgGlasses={glass.linkImgGlasses}
                modelo={glass.modelo}
                collection={glass.collection}
                linkImgEnterprise={glass.linkImgEnterprise}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fiamma Section */}
      <div id="Fiamma" className="flex flex-col md:flex-row items-center gap-10 scroll-mt-60">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src="/img/ImgsSection3/fifth-image.svg"
              alt="Fiamma Banner"
              width={840}
              height={440}
              className="w-full h-auto"
            />
            <div
              className="absolute top-[4%] right-[4%] w-[16%] max-w-[90px] md:top-[3%] md:right-[3%] md:w-[12%] md:max-w-[100px]"
            >
              <Image
                src="/img/Enterprises/fiamma.svg"
                alt="Logo Fiamma"
                width={120}
                height={40}
                className="w-full h-auto"
              />
            </div>
            <div
              className="absolute bottom-[12%] right-[5%] w-[75%] max-w-[480px] md:bottom-[15%] md:right-[5%] md:w-[65%] md:max-w-[500px]"
            >
              <h2
                className="text-white text-right font-ropa-sans italic text-[clamp(0.9rem,2.5vw,1.4rem)] md:text-[clamp(0.8rem,1.8vw,1.5rem)]"
                style={{
                  letterSpacing: "0.15em",
                  lineHeight: "1.5",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                COM SEU CARÁTER ESPORTIVO
                <br />
                FIAMMA É A MARCA QUE
                <br />
                [RE]CONQUISTOU O BRASIL
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
            {fiammaGlasses.slice(0, 6).map((glass, index) => (
              <div key={index} className="flex justify-center">
                <SmallCardGlasses
                  title={glass.title}
                  linkImgGlasses={glass.linkImgGlasses}
                  modelo={glass.modelo}
                  collection={glass.collection}
                  linkImgEnterprise={glass.linkImgEnterprise}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}