import { useRouter } from "next/router";

const SearchQuery = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div>
      <h1>Search Query: {query}</h1>
      {/* Display search results based on the query */}
    </div>
  );
};

export default SearchQuery;
