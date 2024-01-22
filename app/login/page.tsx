"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        // e.preventDefault();
        console.log('hello')
      // Fetch user data from the JSON file
      const response = await fetch('libs/data/users.json');
      const users = await response.json();
  
      // Check if the entered credentials match any user
      const isValidUser = users.some((email: any) => email.email === email && email.password === password);
  
      if (isValidUser) {
        // Redirect to the dashboard or any other page
        router.push('/dashboard');
        alert('success');
      } else {
        alert('Invalid username or password');
      }
    };




    return (
        <>
            <div className='mx-auto flex w-full flex-col items-start justify-center px-4 md:flex-row'>
                <div className='md:w-1/2'>
                    <h1 className="font-bold uppercase text-center ">Login Here</h1>
                    <form method='post' className="mt-10 grid grid-cols-1 gap-x-1 gap-y-8 sm:grid-cols-1">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="given-email"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login