import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DetailAtelier from './front/DetailAtelier';
import Main from './front/Main';
import SearchBook from './front/Search';



export default function Header() {
  const svgLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookshelf" viewBox="0 0 16 16">
      <path d="M.5 0A.5.5 0 0 0 0 .5V5a.5.5 0 0 0 .5.5H4a.5.5 0 0 0 0-1H1V1h4V.5a.5.5 0 0 0-1 0V5h-2a.5.5 0 0 0 0 1h2v7.5a.5.5 0 0 0 1 0V6h4.5a.5.5 0 0 0 0-1H14V.5a.5.5 0 0 0-1 0V5H2.5a.5.5 0 0 0 0 1h11V15a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 0-1h-.5V6a.5.5 0 0 0-1 0v8H2V1H1a.5.5 0 0 0 0-1H.5z"/>
    </svg>
  );
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {svgLogo} Bibliothèque
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Main</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Detail">Detail</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Search">Search</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route index element={<Main />} />
          <Route path="/Detail" element={<DetailAtelier />} />
          <Route path="/Search" element={<SearchBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
