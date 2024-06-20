
import { useState } from 'react'
import Header from '../layout/Header/Header'
import MovieList from '../layout/Header/MovieList/MovieList'
import { MovieResponseType } from '../data/Types'
import allMovies from '../data/data.json'
import { Divider } from '@mui/material'




type Props = {}

export default function Home({}: Props) {

const [query, setQuery] = useState('')


 


const filteredMovies = (allMovies as MovieResponseType).Search.filter(movie => movie.Title.includes(query))
  return (
   <>

      <Header onQueryUpdate={setQuery}/>
      <Divider/>
      <MovieList showMovies={filteredMovies}/>
      </>
  )
}