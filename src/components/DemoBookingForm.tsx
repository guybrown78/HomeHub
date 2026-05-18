'use client'

import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { TextField, SelectField, Textarea } from '@/components/Fields'

function Spinner() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 animate-spin">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12z" opacity=".25" />
      <path d="M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2z" />
    </svg>
  )
}

export function DemoBookingForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    jobTitle: '',
    portfolioSize: '',
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
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setIsSuccess(true)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
          <svg className="h-7 w-7 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-brand-950">Request received</h3>
        <p className="mt-2 text-sm text-fg-muted">
          Thanks for getting in touch. A member of our team will be in contact within one working day to arrange your demo.
        </p>
        <p className="mt-4 text-sm text-fg-muted">
          In the meantime, feel free to email us at{' '}
          <a href="mailto:hello@homehubinfo.co.uk" className="font-semibold text-brand-700 underline">
            hello@homehubinfo.co.uk
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="First name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
          autoComplete="given-name"
        />
        <TextField
          label="Last name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          autoComplete="family-name"
        />
      </div>

      <TextField
        label="Work email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        autoComplete="email"
        placeholder="you@organisation.co.uk"
      />

      <TextField
        label="Organisation name"
        name="organisation"
        value={form.organisation}
        onChange={handleChange}
        required
        placeholder="e.g. Midland Heart Housing"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="Job title"
          name="jobTitle"
          value={form.jobTitle}
          onChange={handleChange}
          placeholder="e.g. Housing Manager"
        />
        <SelectField
          label="Properties managed"
          name="portfolioSize"
          value={form.portfolioSize}
          onChange={handleChange}
        >
          <option value="">Select a range</option>
          <option value="<50">Fewer than 50</option>
          <option value="50-200">50 – 200</option>
          <option value="200-1000">200 – 1,000</option>
          <option value="1000-5000">1,000 – 5,000</option>
          <option value="5000+">More than 5,000</option>
        </SelectField>
      </div>

      <Textarea
        label="Anything you'd like us to know?"
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={3}
        placeholder="Tell us about your current challenges, what you're hoping to solve, or any specific features you'd like to see."
      />

      {isError && (
        <div className="rounded-lg bg-rose-50 p-4 text-sm text-rose-700">
          Something went wrong. Please try again or email us at{' '}
          <a href="mailto:hello@homehubinfo.co.uk" className="font-semibold underline">
            hello@homehubinfo.co.uk
          </a>
        </div>
      )}

      <div>
        <Button type="submit" className="w-full justify-center py-3" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Spinner /> Sending your request…
            </span>
          ) : (
            'Book Your Demo'
          )}
        </Button>
        <p className="mt-3 text-center text-xs text-fg-subtle">
          No commitment. No pressure. We&apos;ll be in touch within one working day.
        </p>
      </div>
    </form>
  )
}
