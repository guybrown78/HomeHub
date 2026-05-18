import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, organisation, jobTitle, portfolioSize, message } = body

    if (!firstName || !lastName || !email || !organisation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: wire to CRM / email provider
    console.log('Demo request:', { firstName, lastName, email, organisation, jobTitle, portfolioSize, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
