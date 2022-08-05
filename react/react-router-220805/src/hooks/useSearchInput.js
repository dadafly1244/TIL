import { useSearchParams } from 'react-router-dom'

function paramsToObject(entries) {
  const result = {}
  for (const [key, value] of entries) {
    result[key] = value
  }
  return result
}

function deleteFromParams(entries, name) {
  const result = {}
  for (const [key, value] of entries) {
    if (key !== name) result[key] = value
  }
  return result
}

export default function useSearchInput() {
  const [searchParams, setSearchParams] = useSearchParams()
  const onChange = (e) => {
    const { name, value } = e.target
    const searchObject = paramsToObject(searchParams.entries())
    console.log('searchObject', searchObject)
    value
      ? setSearchParams(Object.assign(searchObject, { [name]: value })) //searchObject에 키가 name이고 값이 value인 객체 속성을 붙여넣기 & 대상 객체 반환
      : setSearchParams(deleteFromParams(searchParams, name))
  }

  return { searchParams, onChange }
}
