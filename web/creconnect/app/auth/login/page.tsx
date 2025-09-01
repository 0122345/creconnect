"use client";
import React from 'react'
import CreativeStudioPage from '../../homescreen/page'
import AuthPage from '../page'
import AuthCard from '@/pages/components/auth/AuthCard'

export default function LoginPage() {
  return (
    <main >
      <div className="z-10 flex justify-center flex-col items-center gap-8 py-6 bg-white rounded-2xl shadow-lg w-96 max-h-content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AuthCard type={'login'} switchForm={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
     <div className="bg-black opacity-50 w-full h-screen">
      <CreativeStudioPage />
     </div>
    </main>
  )
}

