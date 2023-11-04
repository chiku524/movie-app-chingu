"use client"

import { FormEvent, useState } from "react";
import "./get.css"

export default function Get() {
  const [name, setName] = useState("")
  const [user, setUser] = useState("")

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/register`, {
        method: "POST",
        body: JSON.stringify(name),
      })

      const resFromServer = await res.json()
      console.log(resFromServer)
    } catch (err) {
      console.log(err)
      return err
    }
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/login`)
      //   const resFromServer = await res.json()
    } catch (err) {
      console.log(err)
      return err
    }
  }

  return (
    <div className="form-container">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleRegister}>
          <label htmlFor="datePicker" className="px-2">
            Your name
          </label>
          <input
            type="text"
            className="border-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mt-10"
          >
            Register
          </button>
        </form>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleLogin}>
          <label htmlFor="datePicker" className="px-2">
            Your name
          </label>
          <input type="text" className="border-2" />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mt-10"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
