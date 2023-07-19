
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";


const Category =({params})=>{
    
return <div className={styles.container}>
    <h1 className={styles.cattitle}> {params.category} </h1>
    <div className={styles.item} >
        <div className={styles.content}>
        <h1 className={styles.title}>
            Creative Portfolio
        </h1>
        <p  className={styles.desc}>
        Web Design is the process of creating, making, and developing websites. It includes many different features such as webpage layout, webpage content, and also graphic designs. In general web design and web development work together

        </p>
        <Button text="see" url="#" />

        </div>
        <div className={styles.imgcontainer}>

       <Image src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"   className={styles.img} fill />
       

        </div>

    </div>
    <div className={styles.item} >
        <div className={styles.content}>
        <h1 className={styles.title}>
            Creative Portfolio
        </h1>
        <p  className={styles.desc}>
        Web Design is the process of creating, making, and developing websites. It includes many different features such as webpage layout, webpage content, and also graphic designs. In general web design and web development work together

        </p>
        <Button text="see" url="#" />

        </div>
        <div className={styles.imgcontainer}>

       <Image src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"   className={styles.img} fill />
       

        </div>

    </div>
    <div className={styles.item} >
        <div className={styles.content}>
        <h1 className={styles.title}>
            Creative Portfolio
        </h1>
        <p  className={styles.desc}>
        Web Design is the process of creating, making, and developing websites. It includes many different features such as webpage layout, webpage content, and also graphic designs. In general web design and web development work together

        </p>
        <Button text="see" url="#" />

        </div>
        <div className={styles.imgcontainer}>

       <Image src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"   className={styles.img} fill />
       

        </div>

    </div>
    <div className={styles.item} >
        <div className={styles.content}>
        <h1 className={styles.title}>
            Creative Portfolio
        </h1>
        <p  className={styles.desc}>
        Web Design is the process of creating, making, and developing websites. It includes many different features such as webpage layout, webpage content, and also graphic designs. In general web design and web development work together

        </p>
        <Button text="see" url="#" />

        </div>
        <div className={styles.imgcontainer}>

       <Image src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"   className={styles.img} fill />
       

        </div>

    </div>
</div>

}

export default Category