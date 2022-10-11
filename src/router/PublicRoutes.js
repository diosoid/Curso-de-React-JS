import  LoginSection  from '../components/LoginSection/LoginSection'
import {Routes, Route, Navigate } from 'react-router-dom'

import Header from '../components/Header/Header'


const PublicRoutes = () =>  {

    return(

        <>

        <Header/>

        <Routes>
            <Route path='/login' element= {<LoginSection/>}/>
            <Route path='*' element= {<Navigate to= "/login"/>}/>
        </Routes>

        </>
    )


}

export default PublicRoutes