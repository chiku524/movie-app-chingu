"use client"

import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Movie {
  title: string
  poster_path: string
  vote_average: string
}

export function Movies() {
  const [popularList, setPopularList] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY0N2RlOGJjOTdiNDQzMDJhMzQ4M2IzNzY0YzczMSIsInN1YiI6IjY1NDBmMjA2MzNhNTMzMDBhYzFlZWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kFuR0q-353Vtm_1STC9oXfZDT_qi8wanHsURC3edtA",
          },
        }
      )
      .then((res) => {
        setPopularList(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-16">
      {popularList.map((movie: Movie, index) => {
        return (
          <Link key={index} href="/" className="w-48">
            <div className="relative rounded-sm h-72">
              <Image
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="movie poster image"
                className="w-48 h-72 rounded-sm"
                width={200}
                height={300}
              />
              <span className="absolute top-3 right-4 bg-black p-1 rounded-full text-white z-10">
                {movie.vote_average}
              </span>
            </div>
            <div className=" rounded-b-md h-20 bg-red-900 flex items-center justify-center text-white font-semibold">
              <p className="px-3 py-2 text-center">{movie.title}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
