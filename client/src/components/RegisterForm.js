import React from 'react'

const RegisterForm = ({name , setName , password , setPassword , email , setEmail , handleSubmit}) => {
    return (

        <>
              <form 
                onSubmit={handleSubmit}
                className="mt-3">
              <div className="form-group mb-3">
                 <label className="form-label" htmlFor="name">Your name</label>
                 <input 
                 onChange={e => setName(e.target.value)}
                 value={name}
                 placeholder="Enter your name"
                 type="text"
                 className="form-control"/>
             </div>
             <div className="form-group mb-3">
                 <label className="form-label" htmlFor="email">Your email</label>
                 <input 
                 onChange={e => setEmail(e.target.value)}
                 value={email}
                 placeholder="Enter your email"
                 type="text"
                 className="form-control"/>
             </div>
             <div className="form-group mb-3">
                 <label className="form-label" htmlFor="password">Your password</label>
                 <input 
                 onChange={e => setPassword(e.target.value)}
                 value={password}
                 placeholder="Enter your password"
                 type="password"
                 className="form-control"/>
             </div>
             <button 
             disabled={!name || !email || !password} 
             className="btn btn-primary">
                 Register
            </button>
            </form>
        </>
    )
}

export default RegisterForm
