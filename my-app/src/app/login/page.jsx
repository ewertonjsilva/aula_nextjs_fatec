'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

import styles from './page.module.css';

export default function Login() {
    const local = usePathname(); 
    return (
        <div className={styles.container}>
            <div>
                <h2>Acessar o site</h2>
            </div>
            <form id="form" className={styles.form}>
                <input
                    type="text"
                    id="email"
                    placeholder="E-mail"
                />
                <input
                    type="password"
                    id="senha"
                    placeholder="Senha"
                />
                <div className={styles.info}>
                    <a href="./cadUsuario.html">Não tenho cadastro!</a>
                    <a href="#">Esqueci o e-mail</a>
                </div>
                <button type="submit">Entrar</button>
            </form>
            <small id="info_email" className={styles.mens}>E-mail inválido</small>
            <small id="info_senha" className={styles.mens}>Senha inválida</small>
        </div>
    )
}