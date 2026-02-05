'use client'

import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Prevent logged in users from visiting login
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await api.post('/auth/login', formData);
      if (res.status) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_name', res.data.name);
        router.push('/'); 
      } else {
        setError(res.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
            <p className="text-slate-500 mt-2">Welcome back to TinyTales</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-rose-50 text-rose-600 text-sm p-3 rounded-lg border border-rose-100">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email Address</label>
              <Input 
                type="email" 
                placeholder="you@example.com" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                required 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Password</label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                required 
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-lg">
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="text-center text-sm text-slate-600">
            Don't have an account? <Link href="/register" className="text-slate-900 font-bold hover:underline">Create one</Link>
          </div>
        </div>
      </Card>
    </div>
  )
}