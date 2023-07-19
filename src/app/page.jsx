import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '@/components/button/button'


export default function Home() {
  return (
  <div className={styles.homescreen}>
     <div className={styles.text}>
      <h1 className={styles.title}> Better Design 
        for your digital 
        products.
      </h1>
      
      <p className={styles.description}>
        Turning your problems in real life to solution
      </p>
      <Button text="See Our Works" url="portfolio"/>
       
     </div>
  
      <Image src="/hero.png" className={styles.img} height={500} width={500} alt="hero" />
  
    </div>
  )
}
