import React from "react";
import styles from "./page.module.css"
import Image from "next/image";

const About = () => {
    return(
        <div className={styles.container}>


            <div className={styles.imgcontainer}>

                <Image fill src='https://images.pexels.com/photos/7213192/pexels-photo-7213192.jpeg'  className={styles.img} />
            
                <div className={styles.imgtext}>
                    <h2 > Digital Storytellers</h2>
                    <h3>handcarfting award wining digital experiences</h3>
                </div>


            </div>
            <div className={styles.textcontainer}>
              <div className={styles.item}>
                 <h1 className={styles.title}>Who Are We?</h1>
                 <p className={styles.desc}>
                 The company itself is a very successful company. We lead
                 what pain, the choice of pleasures is a great right to be happy times. A
                  he receives them. Some souls with all the duties of the pleasures in which they are
                  will it happen The company itself is a very successful company.
                  We conclude that what is pain, the choice of pleasures is a great right for the times
                  happy, he receives them. Some minds with all duties
                  <br />
                 <br />
                 pleasures where it will happen? Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit. We lead what pain, the choice of pleasures great right
                 to be happy times, he welcomes them. Some minds with all
                 the services of the pleasures where it will occur?
                 </p>
             </div>
             <div className={styles.item}>
                   <h1 className={styles.title}>What We Do?</h1>
                 <p className={styles.desc}>
                 The company itself is a very successful company. We lead
                 what pain, the choice of pleasures is a great right to be happy times. A
                 he receives them. Some souls with all the duties of the pleasures in which they are
                 will it happen The company itself is a very successful company.
                 We conclude that what is pain, the choice of pleasures is a great right for the times
                 happy, he receives them. Some minds with all duties
                  <br />
                  <br />
                 pleasures where it will happen? Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit. We lead what pain, the choice of pleasures great right
                 to be happy times, he welcomes them. Some minds with all
                 the services of the pleasures where it will occur?
                 <br />
                 <br /> - Dynamic Websites
                 <br />
                 <br /> - Fast and Handy
                 <br />
                 <br /> - Mobile Apps
                 </p>

                 
              </div>
            </div>


        </div>
    )
}

export default About