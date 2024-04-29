import Link from 'next/link'; 

import styles from './page.module.css'; 

export default function Login () {
    return(
        <div className={styles.container}>
            <h1>Login</h1>
            <span>E-mail</span> 
            <input />
            <span>Senha</span> 
            <input /> 
            <br />
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}