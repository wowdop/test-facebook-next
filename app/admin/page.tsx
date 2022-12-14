'use client'
import { getCookie } from 'cookies-next'
import { useRouter, redirect } from 'next/navigation'
import { useEffect } from 'react'

const token = getCookie('token')

const checkUser = () => {
  if (!token) {
    redirect('/')
  }
}

checkUser()

const Admin = () => {
  const router = useRouter()
  useEffect(() => {
    console.log('token')
    console.log(token)
  }, [])

  return (
    <div>
      <h1>Admin!</h1>
    </div>
  )
}

export default Admin
