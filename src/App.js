import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/actions/post.actions";

const App = () => {
  let loading = useSelector(state => state.post.loading)
  let data = useSelector(state => state.post.data)
  let error = useSelector(state => state.post.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1>Post List</h1>
      {
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App;