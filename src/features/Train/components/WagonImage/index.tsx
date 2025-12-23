import Image from "next/image";
import { WagonType } from "@/features/Train/contexts/TrainContext";
import { validateType }from "@/features/Train/utils/validateImage";

interface WagonImageProps{
    type: WagonType,
    width:number
    heigth:number
}

export default function WagonImage(props:WagonImageProps){

    const image = validateType(props.type);

    return <Image 
                src={`/${image}`} 
                alt={props.type} 
                width={props.width} 
                height={props.heigth}
                data-cy="wagon-image"
            />
}