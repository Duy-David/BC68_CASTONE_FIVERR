import React from 'react'
import { useRoutes } from 'react-router-dom'
import Usertemplate from '../templates/Usertemplate/Usertemplate'
import { pathDefault } from '../common/path'
import Register from '../pages/Register/Register'

const useRoutesCustom = () => {
    const routes =useRoutes([
        {
            path: pathDefault.homePage,
            element: <Usertemplate/>
        },
        {
            path: pathDefault.register,
            element: <Register/>
        }
    ])
    
  return routes
}

export default useRoutesCustom