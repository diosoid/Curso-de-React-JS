import {createContext, useContext, useState } from "react";

export const LoginContext = createContext()

const usuarios = [
    {
        email: 'pablo@pablo.com',
        pasword:'pablo123'
    },
    {
        email: 'conrado@profe.com',
        pasword: 'profe123'
    },
    {
        email: 'alesio@tutor.com',
        pasword: 'tutor123'
    }
]

export const LoginProvider = ( {children} ) =>{


    const [user, setUser] = useState ({
        user: '',
        logged: false
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email  )

        if (match){
            if (match.pasword === values.pass){
                setUser({
                    user: match.email,
                    logged:true

                })
            } else {
                alert("Contraseña incorrecta")
            }
        } else{
            alert("Email incorrecto")
        }
           
    } 

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    }


    

    return (

        <LoginContext.Provider value={{user, login, logout}}>

            {children}

        </LoginContext.Provider>

    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}