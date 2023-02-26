import {FaSearch} from "react-icons/fa";

const SearchBar = ({handlerSearch, handlerKeyword}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.keyword.value)
        handlerSearch(event.target.keyword.value)
        handlerKeyword(event.target.keyword.value)
    }

    return (
        <div className="relative items-center w-4/5 flex justify-center sm:w-3/5 md:w-3/5" >
            <div className="relative w-full">
                <div className="absolute top-5 left-3" >
                    <div className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></div>
                    <FaSearch />
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="block h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none rounded-lg"
                        type="text"
                        placeholder="Bang Sue"
                        name="keyword"
                    />
                    <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-lg bg-[#810000] hover:bg-red-600">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar