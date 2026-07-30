'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { Container } from './Container'
import { TextField } from './Fields'

const Spinner: React.FC = () => {
  return (
    <svg viewBox="0 0 16 16" fill="#fff">
      <path d="M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z" />
    </svg>
  )
}

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '', // 'tenant' or 'landlord'
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSuccess(false)
    setIsError(false)
    setIsLoading(true)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('registration failed')

      setIsSuccess(true)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="register"
      aria-label="Register your interest"
      className="-mt-10 rounded-t-5xl bg-bg-muted py-20 sm:py-32"
    >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-950">
              We&apos;re not live yet — but we&apos;re getting&nbsp;close.
            </h2>
            <p className="mt-2 text-lg text-fg-muted">
              HomeHub is launching soon. Register your interest to stay in the
              loop and be first to know when we go live.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-xl space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <TextField
                  label="First Name"
                  name="firstName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <TextField
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <TextField
                label="Email address"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <fieldset>
              <legend className="block text-sm font-medium text-fg">
                I&apos;m a...
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
                    className="text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-fg-muted">Tenant</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="landlord"
                    checked={formData.role === 'landlord'}
                    onChange={handleChange}
                    required
                    className="text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-fg-muted">Landlord</span>
                </label>

								 <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="homeowner"
                    checked={formData.role === 'homeowner'}
                    onChange={handleChange}
                    required
                    className="text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-fg-muted">Homeowner</span>
                </label>

								 <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="investor"
                    checked={formData.role === 'investor'}
                    onChange={handleChange}
                    required
                    className="text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-fg-muted">Investor</span>
                </label>

								<label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="other"
                    checked={formData.role === 'other'}
                    onChange={handleChange}
                    required
                    className="text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-fg-muted">Other</span>
                </label>


              </div>
            </fieldset>

            {!isSuccess && !isError && (
              <div>
                <Button type="submit" className="w-full">
                  {!isLoading && (
                    <span className="flex items-center">Register</span>
                  )}
                  {isLoading && (
                    <span className="flex items-center">
                      Registering{' '}
                      <span
                        aria-hidden="true"
                        className="fill-white ml-2 h-5 w-5 animate-spin"
                      >
                        <Spinner />
                      </span>
                    </span>
                  )}
                </Button>
              </div>
            )}
            {isSuccess && (
              <div className="col-span-full rounded-md bg-green-50 p-4">
                <p className="text-fg text-sm font-light">
                  <span className="font-semibold">Thank you.</span> Your message
                  has been received, and you will be contacted shortly.
                </p>
              </div>
            )}
            {isError && (
              <div className="col-span-full rounded-md bg-pink-50 p-4">
                <p className="text-fg text-sm font-light">
                  <span className="font-semibold">Oh dear.</span> There has been
                  a problem while sending your message. This will be resolved as
                  soon as possible.
                </p>
                <p className="text-fg mt-2 text-sm font-light">
                  In the meantime, please email us at{' '}
                  <a
                    href="mailto:home@homehubinfo.co.uk"
                    target="_blank"
                    className="cursor-pointer font-medium underline"
                  >
                    home@homehubinfo.co.uk
                  </a>
                </p>
              </div>
            )}
          </form>
        </Container>
    </section>
  )
}

export default Register
