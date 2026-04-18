import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router";

export default function UserDetail() {
  const params = useParams();
  // console.log(params)

  const [query, setQuery] = useSearchParams();

  console.log(query.get('page'), query.get('search'))

  useEffect(() => {
    setTimeout(() => {
      setQuery({
        page: '1',
        search: "testKeywrod"
      })
    }, 3000)
  }, [])

  return (
    <>
      <p>
        Params : {params.username}
      </p>
    </>
  )
}