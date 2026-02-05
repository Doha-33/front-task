'use client'

import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    mobile_country_code: '971',
    password: '',
    password_confirmation: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await api.post('/auth/register', formData);
      if (res.status) {
        localStorage.setItem('temp_token', res.data.token);
        router.push('/verify');
      } else {
        setError(res.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred during registration.');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-8">
      <Card className="w-full max-w-md shadow-xl border-none">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
            <p className="text-slate-500 mt-2">Join TinyTales store today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-rose-50 text-rose-600 text-sm p-3 rounded-lg border border-rose-100">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Full Name</label>
              <Input name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email Address</label>
              <Input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="flex gap-2">
              <div className="w-24 space-y-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Code</label>
                <Input name="mobile_country_code" placeholder="971" value={formData.mobile_country_code} onChange={handleChange} required />
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Phone Number</label>
                <Input name="mobile" placeholder="501234567" value={formData.mobile} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Password</label>
              <Input name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Confirm Password</label>
              <Input name="password_confirmation" type="password" placeholder="••••••••" value={formData.password_confirmation} onChange={handleChange} required />
            </div>

            <Button type="submit" disabled={loading} className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-lg">
              {loading ? 'Processing...' : 'Register'}
            </Button>
          </form>

          <div className="text-center text-sm text-slate-600">
            Already have an account? <Link href="/login" className="text-slate-900 font-bold hover:underline">Sign In</Link>
          </div>
        </div>
      </Card>
    </div>
  )
}