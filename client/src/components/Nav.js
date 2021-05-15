import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

const Nav = () => {

   // get our  auth state from the redux
   const {auth} = useSelector(state => ({...state}))
   //dispatch an action
   const dispatch = useDispatch()
   // to get access to history in a component that is not a route we use useRoute
   const history = useHistory()

   const logout = (e) => {
     e.preventDefault()
     dispatch({
       type:"LOGOUT",
       payload: null
     })
     window.localStorage.removeItem('auth')
     history.push('/login')
   }

   let url = ""
  return (
    <div className="nav bg-light d-flex justify-content-between">
       <Link  className="nav-link" to="/">Home</Link>
        {
          auth && (
              <Link  className="nav-link" to="/dashboard">Dashboard</Link>
          )
        }
       {
         auth !== null && (
           <a 
           href={url}
           style={{cursor:"pointer"}} 
           onClick={logout} 
           className="nav-link">
            Logout
             </a>
         )
       }
      {
        !auth && (
          <>
             <Link  className="nav-link" to="/login">Login</Link>
             <Link  className="nav-link" to="/register">Register</Link>
          </>
        )
      }
    </div>
  )
}

export default Nav
