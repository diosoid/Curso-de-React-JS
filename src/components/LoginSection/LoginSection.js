import { useContext, useState } from "react"
import { LoginContext } from "../Context/LoginContext"




const LoginSection = () => {

    const{login, user} = useContext (LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailLog = (e) => {
        
        setEmail(e.target.value)

    }
    const handlePassChange = (e) => {
        
        setPass(e.target.value)

    }


    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            email, pass
        })
        
    }

    return(
        <div style={{backgroundcolor: 'lightgreen'}}>
            <form onSubmit={handleSubmit}   className="container my-4">
                <input
                    type={'email'}
                    className='form-control'
                    value={email} 
                    onChange={handleEmailLog}
                />


                <input
                    type={'pasword'}
                    className='form-control'
                    value={pass}
                    onChange={handlePassChange}
                />
                <button className="btn btn-primary" type="submit" > Ingresar. </button>

                
            </form>
        </div>
    )
}

export default LoginSection