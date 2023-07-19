import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Button from "@/components/button/button";

const Contact = () =>{

     return (
        <div className={styles.container}> 

          
             <h1 className={styles.Title}>Contact us</h1>
          

          <div className={styles.content}>

            <div className={styles.imgcontainer}>
             <Image src="/contact.png" fill={true} className={styles.img}/>
            </div>

            <form className={styles.form}>
               <input type="text" placeholder="name" className={styles.input} />
               <input type="text" placeholder="email" className={styles.input} />
               <textarea className={styles.message} placeholder="message" cols="30" rows="10" > </textarea>
               <Button url="#" text="submit" />
            </form>



          </div>






        </div>
     );


}

export default Contact