import React, { useState } from 'react'

const SearchBar = () => {
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{backgroundImage: `url("/images/clouds.jpg")`}}
          ></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
              
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="City"
                  value={query}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Search
                </button>
              </div>
              <hr className="mb-6 border-t" />
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar