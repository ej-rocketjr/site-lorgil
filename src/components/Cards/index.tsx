import Image from "next/image";

function Cards() {
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 p-6 max-w-7xl mx-auto">
            <div className="card flex bg-red-500 flex-row w-full md:w-100 h-50 items-center overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="p-4 md:p-6 flex-1">
                    <h2 className="font-poppins text-xs md:text-sm text-white">Faça seu orçamento <span className="font-bold">online</span> e <span className="font-bold">gratuito.</span> Nós cobrimos qualquer oferta da concorrência, <span className="font-bold">consulte nossos consultores.</span></h2>
                </div>
                <div className="h-50 md:h-50 flex-shrink-0">
                    <Image 
                        className="object-cover h-full w-auto" 
                        src="/img/CardsImgs/homemCard.svg" 
                        alt="Homem com óculos" 
                        width={100} 
                        height={100}
                    />
                </div>
            </div>

            <div className="card flex flex-row w-full md:w-96 items-center overflow-hidden bg-red-600 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="p-4 md:p-6 flex-1">
                    <h2 className="font-poppins text-xs md:text-lg text-white w-40 lg:text-base">Vendemos Lentes de Contato das marcas <span className="font-bold"> Essilor, Hoya e entre outras.</span></h2>
                </div>
                <div className="h-50 md:h-50 flex-shrink-0">
                    <Image 
                        className="object-cover h-full w-auto" 
                        src="/img/CardsImgs/mulherCard.svg" 
                        alt="Mulher com óculos" 
                        width={150} 
                        height={150} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;