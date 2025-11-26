import Image from "next/image";

interface WagonImageProps{
    type:string
    width:number
    heigth:number
}

export default function WagonImage(props:WagonImageProps){

    const image = props.type == "carga"? 'vagaoCarga.svg':
                  props.type == "passageiro"? 'vagaoTransporte.svg':
                  props.type == "combustivel" ? 'vagaoCombustivel.svg':
                  null

    return <Image src={`/${image}`} alt={props.type} width={props.width} height={props.heigth}/>
}