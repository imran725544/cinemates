import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"




export const Search = ({apiPath}) => {
  const [searchParms] = useSearchParams();
  const queryTerm = searchParms.get("q");
  const { data:movies } = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`search result for ${queryTerm}`)
  
  return (
    <main>
        <section className="py-7">
            <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
        </section>
      <section className="max-w-7xl mx-auto py-3">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => (  
            <Card key={movie.id} movie={movie}  />
          )  )}
</div>
      </section>
    </main>
  )
}
