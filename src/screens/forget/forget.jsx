
import { useRef } from 'react'
import mailImage from '../../assets/file.png'
const Forget = () => {

    const emailRef = useRef(null)

    const submitForm = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        console.log("Email:", email)
        emailRef.current.value = ''
    }
    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center">
                <div className="card mx-auto w-full max-w-5xl shadow-xl">
                    <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                        <div className='flex items-center justify-center'>
                            <img src={mailImage} className='w-3/4' alt="" />
                        </div>
                        <div className="py-24 px-10">
                            <h2 className="text-2xl font-bold mb-2 text-center">Forgot Password</h2>
                            <h2 className="text-lg ">We will send password reset link on your email account</h2>
                            <form onSubmit={(e) => submitForm(e)}>
                                <div className="mb-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base-content">Email</span>
                                        </label>
                                        <input ref={emailRef} type="email" placeholder="Enter your email" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <button type="submit" className={"btn mt-2 w-full text-black hover:text-white bg-gray-200 outline-none hover:bg-purple-400"}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget