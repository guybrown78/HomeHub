'use client'

import React, { useState } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { TextField } from './Fields'

const Register = () => {

	const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '', // 'tenant' or 'landlord'
  })


	const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    // TODO: integrate with backend or webhook here
  }

	return (
		<div className='bg-violet-950'>

		
			<section
				id="register"
				aria-label="Register your interest"
				className="py-20 sm:py-32 bg-gray-50 rounded-t-5xl"
			>
				<Container className=''>
					<div className="mx-auto max-w-2xl sm:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-violet-950">
							We’re not live yet — but we’re getting&nbsp;close.
						</h2>
						<p className="mt-2 text-lg text-gray-600">
							HomeHub is launching soon. Register your interest to stay in the loop and be first to know when we go live.
						</p>
					</div>


					  <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto max-w-xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
								<TextField label='First Name' name='firstName' id="firstName" onChange={handleChange}/>
                
              </div>

              <div>
                 <TextField label='Last Name' name='lastName' id="lastName" onChange={handleChange}/>
              </div>
            </div>

            <div>
              <TextField label='Email address' type='email' name='email' id="email" onChange={handleChange}/>
            </div>

            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">
                I’m a...
              </legend>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="tenant"
                    checked={formData.role === 'tenant'}
                    onChange={handleChange}
                    required
                    className="text-violet-600 focus:ring-violet-600"
                  />
                  <span className="text-gray-700">Tenant</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="landlord"
                    checked={formData.role === 'landlord'}
                    onChange={handleChange}
                    required
                    className="text-violet-600 focus:ring-violet-600"
                  />
                  <span className="text-gray-700">Landlord</span>
                </label>
              </div>
            </fieldset>

            <div>
							<Button type='submit' className="w-full">Register</Button>
    
            </div>
          </form>
				</Container>
			</section>
		</div>
	)
}

export default Register