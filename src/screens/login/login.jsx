import { useRef } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/login-img.png';
function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const submitForm = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email)
    console.log("Password:", password)

    emailRef.current.value = ''
    passwordRef.current.value = ''
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className='flex items-center justify-center'>
            <img src={loginImage} className='w-3/4' alt="" />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Sign In</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-content">Email</span>
                  </label>
                  <input ref={emailRef} type="email" placeholder="Enter your email" className="input input-bordered w-full" />
                </div>
              </div>
              <div className="mb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-base-content">Password</span>
                  </label>
                  <input ref={passwordRef} type="password" placeholder="Enter your password" className="input input-bordered w-full" />
                </div>
              </div>
              <div className="text-right text-primary">
                <Link to="/ForgetPassword" className="text-sm inline-block text-purple-300 hover:text-primary hover:underline transition duration-200">Forgot Password?</Link>
              </div>
              <button type="submit" className={"btn mt-2 w-full text-black hover:text-white bg-gray-200 outline-none hover:bg-purple-400"}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
