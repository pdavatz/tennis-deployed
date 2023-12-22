import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, {useState} from "react";

export default function App() {

  const [currentPage, setCurrentPage] = useState('home')

  return (
      <>
        <Header
          setCurrentPage={setCurrentPage}
        />
        <Content
          currentPage={currentPage}
        />
        <Footer />
      </>
  )
}
