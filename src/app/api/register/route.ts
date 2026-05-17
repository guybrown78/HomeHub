import Airtable from 'airtable'
import { NextRequest, NextResponse } from 'next/server'

const VALID_ROLES = ['tenant', 'landlord', 'homeowner', 'investor', 'other']

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, email, role } = body

  if (
    typeof firstName !== 'string' || !firstName.trim() ||
    typeof lastName !== 'string' || !lastName.trim() ||
    typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !VALID_ROLES.includes(role)
  ) {
    return NextResponse.json({ error: 'Invalid fields' }, { status: 400 })
  }

  const token = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
  const base = process.env.AIRTABLE_BASE

  if (!token || !base) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const d = new Date()
  const date = [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-')

  await new Promise<void>((resolve, reject) => {
    new Airtable({ apiKey: token }).base(base)('homeHubRegister').create(
      [{ fields: { FirstName: firstName.trim(), LastName: lastName.trim(), Email: email, Role: role, SentDate: date } }],
      (err: unknown) => (err ? reject(err) : resolve()),
    )
  })

  return NextResponse.json({ ok: true }, { status: 201 })
}
