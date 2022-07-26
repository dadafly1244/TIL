import React, { useState } from 'react'
import {data} from '../constant/data'

function Board(props) {
  const {selecCategory} = props
    const [articles, setArticles] = useState(data.filter((element)=> (element.category === selecCategory)))

    return (
    <div>
      {articles.map((element) => {
        return (
          <div key={element.id}>
          <h3>{element.title}</h3>
          <p>{element.content}</p>
          </div>
        )
      })}
      
    </div>
    )
}

export default Board