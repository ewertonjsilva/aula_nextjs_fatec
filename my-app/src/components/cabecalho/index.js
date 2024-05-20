'use client';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 

import { MdFastfood } from "react-icons/md";

import styles from './index.module.css'; 

export default function Header() {
    const local = usePathname(); 
    return (
        <header>
            <nav className={styles.containerNav}>
                <div className={styles.menu}>
                    <div>
                        <MdFastfood className={styles.icon} />
                        <label id="titulo">BomBurguer</label>
                    </div>
                    <div className={styles.menuGrande}>
                        <Link href={'/'} className={local === '/' ? styles.active : ''}>Home</Link>
                        <Link href={'/produtos'} className={local === '/produtos' ? styles.active : ''}>Produtos</Link>
                        <Link href={'/cadusu'} className={local === '/cadusu' ? styles.active : ''}>Cadastrar</Link>
                        <Link href={'/contato'} className={local === '/contato' ? styles.active : ''}>Contato</Link>
                        <Link href={'/login'} className={local === '/login' ? styles.active : ''}>Login</Link>
                        {/* <a href="#" className={styles.active}>Login</a> */}
                    </div>
                    {/* <div className="menuMobile">
                        <a href="javascript:void(0);" className="icon" id="mIco">
                            <span className="material-icons icon" id="menu">
                                menu
                            </span>
                        </a>
                    </div>                     */}
                </div>
                {/* <div className="menuMobileExpandidon" id="mostraOpMobile">
                    <a href="../index.html">Home</a>
                    <a href="../paginas/produtos.html">Produtos</a>
                    <a href="../paginas/cadUsuario.html">Cadastrar</a>
                    <a href="../paginas/contato.html">Contato</a>
                    <a href="#" className={styles.active}>Login</a>
                </div> */}
            </nav>
        </header>
    );
}