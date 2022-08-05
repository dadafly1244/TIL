import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useSearchInput from '../../../hooks/useSearchInput'
import useFetch from '../../../hooks/useFetch'

function AlbumList() {
  const [albums, setAlbums] = useState(null)
  const { searchParams, onChange: searchInputHandler } = useSearchInput()

  const [filteredAlbums, setFilteredAlbums] = useState(null)

  const filterAlbums = () => {
    return (
      albums &&
      albums.filter((album) => {
        const isMatched = []
        searchParams.forEach((value, key) => {
          isMatched.push(
            String(album[key]).toLowerCase().includes(value.toLowerCase()),
          )
        })
        return isMatched.includes(false) ? false : true
      })
    )
  }

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    )
    setAlbums(response.data)
    setFilteredAlbums(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    albums && setFilteredAlbums(filterAlbums())
  }, [searchParams])

  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={searchInputHandler}
        value={searchParams.title}
      />
      <input
        type="text"
        name="id"
        onChange={searchInputHandler}
        value={searchParams.albumId}
      />
      {filteredAlbums &&
        filteredAlbums.map((album) => {
          return (
            <Link to={`${album.id}`} key={album.id}>
              <p>{album.title}</p>
            </Link>
          )
        })}
    </div>
  )
}

export default AlbumList
