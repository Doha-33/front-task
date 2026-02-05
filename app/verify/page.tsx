'use client'

import React, { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { api } from '@/lib/api'

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const token = localStorage.getItem('temp_token');
      const res = await api.post('/auth/verify-email', { code }, token || '');
      if (res.status) {
        // As requested: After verification, redirect to Sign In
        localStorage.removeItem('temp_token');
        router.push('/login'); 
      } else {
        setError(res.message || 'Invalid verification code');
      }
    } catch (err) {
      setError('Verification failed.');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Verify Account</h1>
            <p className="text-slate-500 mt-2">Enter the code sent to your email (Test: 123456)</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-rose-50 text-rose-600 text-sm p-3 rounded-lg border border-rose-100">
                {error}
              </div>
            )}

            <Input 
              placeholder="123456" 
              className="text-center text-2xl tracking-[0.5em] h-14"
              value={code} 
              onChange={(e) => setCode(e.target.value)} 
              maxLength={6}
              required 
            />

            <Button type="submit" disabled={loading} className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-lg">
              {loading ? 'Verifying...' : 'Verify Now'}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}