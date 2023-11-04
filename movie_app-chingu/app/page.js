"use client"

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'


    export default function Navbar() {
        const [genreList, setGenreList] = useState([]);

        useEffect(() => {
            axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY0N2RlOGJjOTdiNDQzMDJhMzQ4M2IzNzY0YzczMSIsInN1YiI6IjY1NDBmMjA2MzNhNTMzMDBhYzFlZWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kFuR0q-353Vtm_1STC9oXfZDT_qi8wanHsURC3edtA"
                }
            })
            .then((res) => {
                console.log(res.data);
                setGenreList(res.data.genres);
            })
            .catch((error) => {
                console.log(error);
            })
        }, [])

        return (
            <div className='home-container'>
                <div className='genres'>
                    <h1>Here is a list of movie genres!</h1>
                    <div className='genre-container'>
                        {genreList.map((genre, index) => (
                            <div className='genre-card' key={index}>
                                <Link href={`/genre/${genre.name.toLowerCase()}`}>{genre.name}</Link>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        )
    }