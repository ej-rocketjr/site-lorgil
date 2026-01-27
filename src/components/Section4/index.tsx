import Image from "next/image"
import SmallCardGlasses from "../SmallCardGlasses"

function Section4 (){
    const DusterConcept = [
        {
            id: "dc-1",
            title:"Modelo DC",
            linkImgGlasses:"/img/ImgsSection4/OculosDC/img1.svg",
            modelo:"0000",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/DC.svg"
        },

        {
            id: "dc-2",
            title:"Modelo DC",
            linkImgGlasses:"/img/ImgsSection4/OculosDC/img2.svg",
            modelo:"0000",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/DC.svg"
        },

        {
            id: "dc-3",
            title:"Modelo DC",
            linkImgGlasses:"/img/ImgsSection4/OculosDC/img3.svg",
            modelo:"0000",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/DC.svg"
        },

        {
            id: "dc-4",
            title:"Modelo DC",
            linkImgGlasses:"/img/ImgsSection4/OculosDC/img4.svg",
            modelo:"0000",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/DC.svg"
        },

        {
            id: "dc-5",
            title:"Modelo DC",
            linkImgGlasses:"/img/ImgsSection4/OculosDC/img5.svg",
            modelo:"0000",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/DC.svg"
        }

    ];

    const CarolCazassa = [
        {
            id: "cc-1",
            title:"Modelo CorolCazassa",
            linkImgGlasses:"/img/ImgsSection4/OculosCC/img1.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/CarolCazassa.svg"
        },

        {
            id: "cc-2",
            title:"Modelo CorolCazassa",
            linkImgGlasses:"/img/ImgsSection4/OculosCC/img2.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/CarolCazassa.svg"
        },

        {
            id: "cc-3",
            title:"Modelo CorolCazassa",
            linkImgGlasses:"/img/ImgsSection4/OculosCC/img3.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/CarolCazassa.svg"
        },

        {
            id: "cc-4",
            title:"Modelo CorolCazassa",
            linkImgGlasses:"/img/ImgsSection4/OculosCC/img4.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/CarolCazassa.svg"
        },

        {
            id: "cc-5",
            title:"Modelo CorolCazassa",
            linkImgGlasses:"/img/ImgsSection4/OculosCC/img5.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/CarolCazassa.svg"
        }

    ];

    const Vilenev = [
        {
            id: "vil-1",
            title:"Modelo Vilenev",
            linkImgGlasses:"/img/ImgsSection4/OculosVilenev/img1.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/Vileney.svg"
        },

        {
            id: "vil-2",
            title:"Modelo Vilenev",
            linkImgGlasses:"/img/ImgsSection4/OculosVilenev/img2.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/Vileney.svg"
        },

        {
            id: "vil-3",
            title:"Modelo Vilenev",
            linkImgGlasses:"/img/ImgsSection4/OculosVilenev/img3.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/Vileney.svg"
        },

        {
            id: "vil-4",
            title:"Modelo Vilenev",
            linkImgGlasses:"/img/ImgsSection4/OculosVilenev/img4.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/Vileney.svg"
        },

        {
            id: "vil-5",
            title:"Modelo Vilenev",
            linkImgGlasses:"/img/ImgsSection4/OculosVilenev/img5.svg",
            modelo:"1111",
            collection:"MODERN",
            linkImgEnterprise:"/img/Logos/Vileney.svg"
        }

    ];


    return(
        <>
        <article className="flex w-full flex-row mt-5">
            <Image
                src="/img/ImgsSection4/BannerSection4.svg"
                alt=""
                width={0}
                height={0}
                className="w-full"
            />
        </article>

        <main className="flex flex-col gap-5 mt-5 mb-10">
            <h1 className="font-medium text-center">Modelos Duster Concept</h1>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <div id="DusterConcept" className="flex flex-wrap gap-5 justify-center items-center scroll-mt-80">
                        {DusterConcept.map((oculos)=>(
                            <SmallCardGlasses
                            key={oculos.id}
                            title={oculos.title}
                            linkImgGlasses={oculos.linkImgGlasses}
                            modelo={oculos.modelo}
                            collection={oculos.collection}
                            linkImgEnterprise={oculos.linkImgEnterprise}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <h1 className="font-medium text-center">Modelos Carol Cazassa</h1>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <div id="CarolCazassa" className="flex flex-wrap gap-5 justify-center items-center scroll-mt-80">
                        {CarolCazassa.map((oculos)=>(
                            <SmallCardGlasses
                            key={oculos.id}
                            title={oculos.title}
                            linkImgGlasses={oculos.linkImgGlasses}
                            modelo={oculos.modelo}
                            collection={oculos.collection}
                            linkImgEnterprise={oculos.linkImgEnterprise}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <h1 className="font-medium text-center">Modelos Vilenev</h1>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <div id="Vilenev" className="flex flex-wrap gap-5 justify-center items-center scroll-mt-80">
                        {Vilenev.map((oculos)=>(
                            <SmallCardGlasses
                            key={oculos.id}
                            title={oculos.title}
                            linkImgGlasses={oculos.linkImgGlasses}
                            modelo={oculos.modelo}
                            collection={oculos.collection}
                            linkImgEnterprise={oculos.linkImgEnterprise}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Section4
