import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  useEffect(async () => {
    const response = await axios.get({ url })
    setData(response.data)
  }, [url])
  return data
}
