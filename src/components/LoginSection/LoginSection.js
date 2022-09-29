import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { LoginContext } from "../Context/LoginContext"




const LoginSection = () => {

    const{login, user} = useContext (LoginContext)
    console.log(user)
    const {values, handleInputChange } = useForm ({
        email: '',
        pass: '',
    })

    


    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
        
    }

    return(
        <div style={{backgroundcolor: 'lightgreen'}}>
            <form onSubmit={handleSubmit}   className="container my-4">
                <input
                    name="email"
                    type={'email'}
                    className='form-control'
                    value={values.email} 
                    onChange={handleInputChange}
                />


                <input
                    name="pass"
                    type={'pasword'}
                    className='form-control'
                    value={values.pass}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit" > Ingresar. </button>

                
            </form>
        </div>
    )
}

export default LoginSection