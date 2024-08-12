import React from 'react'
import logInImg from '../assets/SignupAndLogin.webp'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SubFooter from '../components/SubFooter';

function RegisterPage() {
    //reference to the database collection
    const colletionRef = collection(db, 'Users');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(colletionRef, { name: name, email: email })
            alert('Registration successfully!');
            setName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div className="grid grid-cols-2 grid-rows-1 px-8 py-12">
                <Helmet>
                    <title>Sign up and start learning | Udemy</title>
                </Helmet>
                <div className="place-self-center">
                    <img src={logInImg} alt="logInImg" className='size-11.5/12 ml-1.5' />
                </div>
                <div className="place-items-start pr-24 pl-[118px] pt-9 mt-6">
                    <div>
                        <h1 className="mb-5 text-[29.6px] px-2 font-[720]">Sign up and start learning</h1>
                    </div>
                    <div>
                        <form onSubmit={handleRegister}>
                            <div className="relative mb-2 w-full border border-[#101011]">
                                <input type="text" className="block w-full px-4 py-4 pt-5 font-semibold appearance-none floating_filled focus:font-semibold focus:outline-none focus:ring-0 order-600 peer" placeholder=" " name='user-name' value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floating_filled" className="absolute font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "> Full name </label>
                            </div>
                            <div className="relative mb-2 w-full border border-[#101011]">
                                <input type="email" className="block w-full px-4 py-4 pt-5 font-semibold appearance-none floating_filled focus:font-semibold focus:outline-none focus:ring-0 order-600 peer" placeholder=" " name='user-email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floating_filled" className="absolute font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "> Email </label>
                            </div>
                            <div className="relative mb-4 w-full border border-[#101011]">
                                <input type="password" className="block w-full px-4 py-4 pt-5 font-semibold appearance-none floating_filled focus:font-semibold focus:outline-none focus:ring-0 order-600 peer" placeholder=" " name='user-password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="floating_filled" className="absolute font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "> Password </label>
                            </div>
                            <div className='text-[15.5px] mb-4 font-[650] py-3 w-full text-center bg-[#A435F0] hover:bg-[#8710D8] text-[#FFFFFF]'><button id='signup-btn'>Sign up</button></div>
                        </form>
                    </div>
                    <div className='py-3.5 bg-[#F7F9FA]'>
                        <p className='text-[15.5px] font-[550] text-center'>Already have an account? <Link to="/login" className='font-semibold underline text-[#5022C3] hover:text-[#3B198F]'>Log in</Link></p>
                    </div>
                </div>
            </div>
            <SubFooter />
        </>
    )
}

export default RegisterPage