import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <nav className='navbar'>
        <div className='nav'>
          <Link href="/" className='home-btn btn'>
            <h2>HOME</h2>
          </Link>
          <Link href="/movies" className='movies-btn btn'>
            <h2>MOVIES</h2>
          </Link>
          <Link href="/movies" className='movies-btn btn'>
            <h2>MOVIES</h2>
          </Link>
        </div>
        <div className='login_signup'>
          <Link href="/get" className='signup-btn btn'>
            <h2>SIGN UP</h2>
          </Link>
          <Link href="/get" className='login-btn btn'>
            <h2>LOGIN</h2>
          </Link>
        </div>
      </nav>
    </main>
  )
}
