import styles from '../styles/signup.module.css'
import FondoInferior from "../Img/FondoInferior.png"

const SignUp = () => {
    return(

        <div className='container'>
            <div className={`contanerLight ${styles.contanerLightSignUp}`} >
                <div className="layoutRegister">
                    <div className="logo">

                        <img className={styles.FondoInferior} src={FondoInferior} alt=""/>

                    </div>
                    <div className={styles.content}>
                        <h2>SIGNUP</h2>
                        <div className="ContainerForm">
                            <form action="">
                                <div className={styles.inputContainer}>
                                    <span className={styles.iconUser}>
                                    </span>
                                    <input type="text" placeholder='UserName'
                                    className={styles.icoUser}
                                    />
                                </div>
                                
                                <div className={styles.inputContainer}>
                                    <span className={styles.iconEmail}></span>
                                    <input type="email" placeholder='Email' 
                                    />

                                </div>

                                <div className={styles.inputContainer}>
                                    <span className={styles.iconPassword}></span>
                                    <input type="Password" placeholder='Password' 
                                    />

                                </div>
                                
                                <button
                                className='btn-M' 
                                >Start</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>  
    )
  
}

export default SignUp;