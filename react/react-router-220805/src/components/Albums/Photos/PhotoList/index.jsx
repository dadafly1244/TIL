import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function PhotoList() {
  const params = useParams()
  const [photos, setPhotos] = useState()

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos',
      { params },
    ) //albumid로 넘기고 있어서 params로 넘기면됨
    setPhotos(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {photos &&
        photos.map((photo) => {
          return (
            <div key={photo.id}>
              <Link to={`photos/${photo.id}`} state={{ url: photo.url }}>
                {console.log('photo.url', photo.url)}
                <p>{photo.title}</p>
                <img src={photo.thumbnailUrl} alt={`${photo.id}_photo`} />
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default PhotoList
