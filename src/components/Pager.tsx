import React, { useState, useEffect } from 'react'

const Pager = () => {
  const [data, setData] = useState([])

  const [currentPage, setCurrentPate] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(5)

  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [mintPageNumberLimit, setMinNumberLimit] = useState(0)

  const handlePrev = () => {}

  return (
    <>
      <h1>List</h1>
      <ul className="pageNumbers">
        <li>
          <button onClick={handlePrev}>Prev</button>
        </li>
        {}
        <li>
          <button onClick={handlePrev}>Prev</button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
    </>
  )
}

export default Pager
