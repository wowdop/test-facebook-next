'use client'

import Image from 'next/image'
import styled from 'styled-components'
import styles from './page.module.css'
import { setCookie, deleteCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Border = styled.div`
  border: 25px dashed pink;
`

export default function Home() {
  const setCookieNow = () => {
    setCookie('token', 'ana-are-mere')
    window.location.reload()
  }
  const logout = () => {
    deleteCookie('token')
    window.location.reload()
  }

  return (
    <Border>
      <main className={styles.main}>
        <nav>
          <Link href="/public">public</Link>
          <Link href="/admin">admin</Link>
        </nav>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <button onClick={setCookieNow}>set cookie</button>
        <button onClick={logout}>logout</button>
      </main>
    </Border>
  )
}
