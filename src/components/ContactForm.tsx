'use client'

import React, { useState } from 'react'
import { Button } from '@/components/Button'

function Spinner() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 animate-spin">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12z" opacity=".25" />
      <path d="M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2z" />
    </svg>
  )
}

const inputClasses =
  'mt-1.5 block w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-amber-400'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    department: 'general',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(false)
    setIsError(false)
    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setIsSuccess(true)
      setForm({ name: '', email: '', organisation: '', department: 'general', message: '' })
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/20">
          <svg className="h-7 w-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-white">Message sent</h3>
        <p className="mt-2 text-sm text-white/70">
          Thanks for getting in touch. We aim to respond to all enquiries within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="jane@organisation.co.uk"
        />
      </div>
      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-white/80">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          value={form.organisation}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Housing Association Name"
        />
      </div>
      <div>
        <label htmlFor="department" className="block text-sm font-medium text-white/80">
          What can we help with?
        </label>
        <select
          id="department"
          name="department"
          value={form.department}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="general">General enquiry</option>
          <option value="sales">Sales</option>
          <option value="partnerships">Partnerships</option>
          <option value="support">Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us how we can help..."
        />
      </div>

      {isError && (
        <div className="rounded-lg bg-rose-500/10 p-4 text-sm text-rose-300">
          Something went wrong. Please try again or email us at{' '}
          <a href="mailto:home@homehubinfo.co.uk" className="font-semibold underline">
            home@homehubinfo.co.uk
          </a>
        </div>
      )}

      <Button type="submit" className="w-full justify-center" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Spinner /> Sending…
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
