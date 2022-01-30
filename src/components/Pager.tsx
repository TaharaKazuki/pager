import React, { useState, useEffect, MouseEvent } from 'react'
import './style.scss'

interface HTMLButtonEvent extends Event {
  target: HTMLButtonElement
}

const renderData = (data: Array<any>) => {
  return (
    <ul>
      {data.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  )
}

const Pager = () => {
  const [data, setData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemPerPage] = useState(5)

  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [mintPageNumberLimit, setMinNumberLimit] = useState(0)

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    setCurrentPage(+e.target.id)
  }

  const handlePrev = (e: MouseEvent<HTMLInputElement>) => {}

  const pages = []
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfLastItem, indexOfLastItem)

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > mintPageNumberLimit) {
      return (
        <li
          key={number}
          id={`${number}`}
          onClick={handleClick}
          className={currentPage === number ? 'active' : undefined}
        >
          {number}
        </li>
      )
    }
  })

  return (
    <>
      <h1>List</h1>
      <ul className="pageNumbers">
        <li>
          <button onClick={handlePrev}>Prev</button>
        </li>
        {}
        <li>{/* <button onClick={handlePrev}>Prev</button> */}</li>
      </ul>
      {/* <button onClick={(e) => handlePrev(e)} className="loadmore">
        Load More
      </button> */}
    </>
  )
}

export default Pager
