import React from 'react'

const SearchResults = ({results}) => {
  return (
    <ul className='absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar'>
      {
        results.map(item => <li key={item.symbol} className="p-4 m-4 flex items-center justify-between rounded-md hover:bg-indigo-200">
          <span>{item.symbol}</span>
          <span>{item.description}</span>
        </li>)
      }
    </ul>
  )
}

export default SearchResults