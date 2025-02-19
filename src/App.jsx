import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
