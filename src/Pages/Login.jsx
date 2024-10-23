import styles from '../styles/login.module.css'
import FondoInferior from "../Img/FondoInferior.png"

const Login = () => {
    return(
        <div className='container'>
            <div className={`contanerLight ${styles.contanerLightSignUp}`}>
                <div className="layoutRegister">
                    <div className="logo">

                        <img className={styles.FondoInferior} src={FondoInferior} alt=""/>

                    </div>
                    <div className={styles.content}>
                        <h2>Login</h2>
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

export default Login;