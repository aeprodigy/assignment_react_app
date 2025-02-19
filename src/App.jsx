
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import Posts from "./pages/Posts";
import PostDetailsPage from "./pages/PostDetailsPage";
import ThemeProviderWrapper from "./Theming/ThemeProviderWrapper";

const App = () => {
  return (
    <ThemeProviderWrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
