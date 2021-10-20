import React from 'react'
import styles from "./Login.module.css"
import Card from "../../components/shared/card/Card"
import Button from '../../components/shared/button/Button'
export default function Login() {
        return (
                <div className={styles.loginWrapper}>
                <Card title="Enter Your Phone number">
                <input/>
                <Button title="Next">

                </Button>


                </Card>
                        
                </div>
        )
}
