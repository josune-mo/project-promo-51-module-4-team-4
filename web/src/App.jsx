import { Routes, Route } from "react-router";
import { useState } from "react";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/pages/Landing";
import FormPage from "./components/pages/FormPage";
import CardPreviewPage from "./components/pages/CardPreviewPage";

import "./styles/App.scss";

function App() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectSlogan: "",
    projectRepository: "",
    projectDemo: "",
    technology: [],
    description: "",
    authorName: "",
    authorJob: "",
    profileAvatar: "",
    projectAvatar: "",
  });

  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route
          path="/newproject"
          element={<FormPage formData={formData} setFormData={setFormData} />}
        />

        <Route
          path="/cardpreview"
          element={<CardPreviewPage projectData={formData} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
