import Image from "next/image";
import styles from "./page.module.css";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'

export default function Home() {
  return (
    <div>
      <Image src='/locomotiva.svg' alt="" width={100} height={100}/>
      <div className={styles.wagons}>
        <CardWagon type="carga" delete={console.log}/>
        <CardWagon type="combustivel" delete={console.log}/> 
        <CardWagon type="passageiro" delete={console.log}/> 
      </div>
      <AddWagonForm/>
    </div>
  );
}
