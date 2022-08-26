import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const USERNAME = 'gandalf'
const PASSWORD = '1234'


const Login = () =>{

    const [username, setUsername] = useState('')
    const [matchUsername, setMatchUsername] = useState(false)

    const [password, setPassword] = useState('')
    const [matchPassword, setMatchPassword] = useState(false)

    const [submitted, setSubmitted] = useState(false)

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if(USERNAME === username){
            setMatchUsername(true)
        }
        else{
            setMatchUsername(false)
        }
        
        if(PASSWORD === password ){
            setMatchPassword(true)
        }
        else{
            setMatchPassword(false)
        }
        console.log(matchUsername, matchPassword)
        
            
    
    }, [username, password])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
           
        setSubmitted(true)

        
        

        if(matchUsername && matchPassword){
            setSuccess(true)
        }   

       

    }

    
    return(
        <>
        { success ? (<div className="sucesso">sucesso</div>): (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <h1 className="titulo">Login</h1>
                    
                    <form className="login" onSubmit={handleSubmit}>
                        <div className="login__field">
                            <FontAwesomeIcon icon="fa-solid fa-user"  className="login__icon"/>
                            <input 
                                className="login__input"
                                type='text'
                                id="username"
                                onChange={(e) => setUsername(e.currentTarget.value)}
                                placeholder="Usuário:"
                            />
                            <p className={!success && submitted ? 'erro': 'hide'}>
                                Usuário incorreto
                            </p>
                        </div>
                        
                       <div className="login__field">
                            <FontAwesomeIcon icon="fa-solid fa-lock"  className="login__icon"/>
                            <input
                                className="login__input"
                                type='password'
                                id="password"
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                placeholder="Senha:"
                            />
                            <p className={!success && submitted ? 'erro': 'hide'}>
                                Senha incorreta
                            </p>
                       </div>
                        

                        <button disabled= {username === '' && password === '' ? true: false} className="button login__submit">
                            <span className="button__text">Logar-se</span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="button__icon" />
                        </button>
                    </form>
            
                </div>
                <div class="screen__background">
			        <span class="screen__background__shape screen__background__shape4"></span>
			        <span class="screen__background__shape screen__background__shape3"></span>		
			        <span class="screen__background__shape screen__background__shape2"></span>
			        <span class="screen__background__shape screen__background__shape1"></span>
		        </div>		
                
            </div>
        </div>
        
            )
        }
        <div className="footer">Login template: A pen by Mohitpoojary.<br/>Link:https://codepen.io/Mohuth/pen/QWgrPvp </div>
        </>
    )
}

export default Login