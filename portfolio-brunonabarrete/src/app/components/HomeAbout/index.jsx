import Image from "next/image"
import BrunoFoto from '../../../../public/data/BrunoProfile.jpeg' 

export default function HomeAbout() {
    return(
        <>
            <div>
                <h2>
                    Olá,
                </h2>
                <h2>
                    Meu nome é Bruno Nabarrete,
                </h2>
                <h2>
                    Desenvolvedor FullStack.
                </h2>
            </div>
            <Image src={BrunoFoto}/>
        </>
    )
}