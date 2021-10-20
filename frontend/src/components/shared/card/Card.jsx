import React from 'react'
import styles from "./Card.module.css"
export default function Card({title,children}) {
        return (
                <div className={styles.card}>
                <div className={styles.heading}>
                  <img
                    style={{ height: "30px", width: "30px", borderradius: "50%" }}
                    src="https://www.clipartmax.com/png/middle/123-1230014_raised-hand-icon-raised-hand-emoji-png.png"
                    alt="logo"
                  />
                  <h1>{title}</h1>
                </div>
                {children}
                
              </div>
        )
}
