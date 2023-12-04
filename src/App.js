import PostDetails from "./components/PostDetails";
import PostList from "./components/PostList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:postId" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
