import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
    router.push(`/search/${query}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchQuery"
          placeholder="Enter your search query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
