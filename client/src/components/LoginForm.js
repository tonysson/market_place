import React from 'react'

const LoginForm = ({ email , setEmail , password , setPassword , handleSubmit}) => {
    return (
        <>
              <form 
                onSubmit={handleSubmit}
                className="mt-3">
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
             <button disabled={!email || !password} className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default LoginForm
