import styles from '../styles/login.module.css'

const Login = () => {
    return(
        <div className='container'>
            <div className='contanerLight'>
                <div className="layoutRegister">
                    <div className="logo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident esse quos deserunt iure similique qui nesciunt ex sint repudiandae sed, eius nobis repellat est saepe in beatae rem facilis.</p>

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