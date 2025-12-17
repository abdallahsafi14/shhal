'use server'

import { cookies } from 'next/headers'
import api from '@/lib/axios' // Base axios instance
import { redirect } from 'next/navigation'

export async function loginAction(formData) {
  // 1. Extract data from the standard HTML form
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    // 2. Call your External API
    // Ensure your Backend endpoint accepts JSON
    const response = await api.post('/login', { email, password })
    const { token, user } = response.data 

    // 3. Set the Cookie securely in Next.js
    // httpOnly: true (JavaScript cannot read this = Secure)
    // secure: true (HTTPS only)
    const cookieStore = cookies()
    cookieStore.set('session_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })

    // 4. Redirect to dashboard on success
  } catch (error) {
    // Handle generic errors (return to form with error message)
    return { error: 'بيانات الدخول غير صحيحة' }
  }
  
  // Redirect needs to happen outside the try/catch block in Server Actions
  redirect('/profile')
}

export async function logoutAction() {
  cookies().delete('session_token')
  redirect('/login')
}