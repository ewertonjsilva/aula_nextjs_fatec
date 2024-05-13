import Image from 'next/image';

import styles from './index.module.css'; 

import facebook from '../../../public/icones/facebook.svg'
import telegram from '../../../public/icones/telegram.svg'
import whatsapp from '../../../public/icones/whatsapp.svg'
import tiktok from '../../../public/icones/tiktok.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.social}>
                <Image src={facebook} alt="facebook" />
                <Image src={telegram} alt="telegram" />
                <Image src={whatsapp} alt="whatsapp" />
                <Image src={tiktok} alt="tiktok" />
            </div>
            <p>Lanches BomNurguer de Cidade ME | 00.000.000/0000-00</p>
            <p>Rua Brasil, 1000 - centro - Parapuã/SP | bbgr@bbuguer.com</p>
        </footer>
    );
}