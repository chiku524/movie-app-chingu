"use client"

import Filter from "./_components/filter"
import { Movies } from "./_components/movies"

export default function Home() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-no-repeat md:bg-contain xl:bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container mx-auto p-4 bg-transparent pt-32">
        <Filter />
        <Movies />
      </div>
    </div>
  )
}