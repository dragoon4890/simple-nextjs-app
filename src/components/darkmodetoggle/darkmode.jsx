"use client side"

import React, { useContext, useState } from "react";
import styles from "./darkmode.module.css"
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";

const DarkModeToggele =() =>{
    const {toggle,mode} = useContext(ThemeContext);
    return(
      

      <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.green}
        style={mode=="light" ? {right:"2px"}:{left:"2px"}}
        ></div>
      </div>
  
     
    )


}

export default DarkModeToggele