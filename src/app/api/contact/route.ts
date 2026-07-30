import Airtable from 'airtable'
import { NextRequest, NextResponse } from 'next/server'

const VALID_DEPARTMENTS = ['sales', 'partnerships', 'support', 'general']

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, organisation, department, message } = body

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== 'string' || !message.trim() ||
    (department !== undefined && !VALID_DEPARTMENTS.includes(department))
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
    new Airtable({ apiKey: token }).base(base)('homeHubContact').create(
      [{
        fields: {
          Name: name.trim(),
          Email: email,
          Organisation: organisation?.trim() || '',
          Department: department || 'general',
          Message: message.trim(),
          SentDate: date,
        },
      }],
      (err: unknown) => (err ? reject(err) : resolve()),
    )
  })

  return NextResponse.json({ ok: true }, { status: 201 })
}
