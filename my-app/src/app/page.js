import Link from 'next/link'; 
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world!</h1>
      <h2>Subtítulo</h2>
      <p>Um parágrafo de texto</p>
      <p>Outro parágrafo de texto</p>
      <br />
      <p>Mais outro parágrafo de texto</p>
      <div>
        <h2>Outro subtitulo</h2>
      </div>
      <p><Link href={'/login'}>Login</Link></p>
      <p><Link href={'/produtos'}>Produtos</Link></p>
    </main>
  );
}
