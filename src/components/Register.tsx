'use client'

import Airtable from 'airtable'
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

  // const formatDate = async (): Promise<string> => {
  //   const d = new Date()
  //   let month = '' + (d.getMonth() + 1)
  //   let day = '' + d.getDate()
  //   const year = d.getFullYear()

  //   if (month.length < 2) month = '0' + month
  //   if (day.length < 2) day = '0' + day

  //   return [year, month, day].join('-')
  // }

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

    console.log('Form submitted:', formData)

    // TODO: integrate with backend or webhook here

    const d = new Date()
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    const date = [year, month, day].join('-')

    console.log('date', date)

    // Example Airtable API integration (commented out):
    const fields = {
      FirstName: formData.firstName!,
      LastName: formData.lastName!,
      Email: formData.email!,
      Role: formData.role!,
      SentDate: date,
    }

    console.log(fields)

    const airtableToken: string = process.env
      .NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN as string
    const airtableBase: string = process.env.NEXT_PUBLIC_AIRTABLE_BASE as string
    const base = new Airtable({ apiKey: airtableToken }).base(airtableBase)

    base('homeHubRegister').create(
      [
        {
          fields,
        },
      ],
      function (err: any, records: any) {
        if (err) {
          console.error(err)
          setIsError(true)
          setIsLoading(false)
          return
        }
        records.forEach(function (record: any) {
          console.log(record.getId())
          setIsSuccess(true)
          setIsLoading(false)
        })
      },
    )
  }

  return (
    <div className="bg-violet-950">
      <section
        id="register"
        aria-label="Register your interest"
        className="rounded-t-5xl bg-gray-50 py-20 sm:py-32"
      >
        <Container className="">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-violet-950">
              We’re not live yet — but we’re getting&nbsp;close.
            </h2>
            <p className="mt-2 text-lg text-gray-600">
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
                        className="fill-aoc-navy ml-2 h-5 w-5 animate-spin"
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
                <p className="text-aoc-navy text-sm font-light">
                  <span className="font-semibold">Thank you.</span> Your message
                  has been received, and you will be contacted shortly.
                </p>
              </div>
            )}
            {isError && (
              <div className="col-span-full rounded-md bg-pink-50 p-4">
                <p className="text-aoc-navy text-sm font-light">
                  <span className="font-semibold">Oh dear.</span> There has been
                  a problem while sending your message. This will be resolved as
                  soon as possible.
                </p>
                <p className="text-aoc-navy mt-2 text-sm font-light">
                  In the meantime, please send any messages direct to{' '}
                  <a
                    href="mailto:lee@consultnetzero.co.uk"
                    target="_blank"
                    className="cursor-pointer font-medium underline"
                  >
                    lee@consultnetzero.co.uk
                  </a>
                </p>
              </div>
            )}
          </form>
        </Container>
      </section>
    </div>
  )
}

export default Register
