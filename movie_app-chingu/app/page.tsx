import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <nav className='navbar'>
        <div className='nav'>
          <div className='home-btn btn'>
            <p2>HOME</p2>
          </div>
          <div className='movies-btn btn'>
            <p2>MOVIES</p2>
          </div>
          <div className='movies-btn btn'>
            <p2>MOVIES</p2>
          </div>
        </div>
        <div className='login_signup'>
          <div className='signup-btn btn'>
            <p2>SIGN UP</p2>
          </div>
          <div className='login-btn btn'>
            <p2>LOGIN</p2>
          </div>
        </div>
      </nav>
    </main>
  )
}
