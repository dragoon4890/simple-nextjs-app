import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const About = () => {
    return(
        <div className={styles.container}> 
            <h1 className={styles.select}> choose a gallery</h1>
            <div className={styles.items}>
                <Link className={styles.item} href="/portfolio/illustrations">
                    <span className={styles.title}>
                     Illustrations
                    </span>
                </Link >

                <Link className={styles.item} href="/portfolio/websites">
                    <span className={styles.title}>
                    Websites
                    </span>
                </Link>

                <Link className={styles.item} href="/portfolio/application">
                    <span className={styles.title}>
                    Applications
                    </span>
                </Link>

            </div>
            
        
        </div>
    )
}

export default About