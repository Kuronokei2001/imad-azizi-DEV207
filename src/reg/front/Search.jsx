import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function SearchBook() {
  const [titre, setTitre] = useState();
  const [Author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const selector = useSelector((state) => state.livres);
  const [searchClicked, setSearchClicked] = useState(false);
  const [list, setList] = useState([]);

  const searchBooks = () => {
    const filter = selector.filter((e) => {
      const titreMatch = e.Titre && e.Titre.toLowerCase().includes((titre || '').toLowerCase());
      const authorMatch = e.Auteur && e.Auteur.toLowerCase().includes((Author || '').toLowerCase());
      const genreMatch = e.Genre && e.Genre.toLowerCase().includes((genre || '').toLowerCase());

      return titreMatch && authorMatch && genreMatch;
    });

    setList(filter);
  };

  const handleSearch = () => {
    searchBooks();
    setSearchClicked(true);
  };

  useEffect(() => {
    searchBooks();
  }, [titre, Author, genre]);

  return (
    <div className="container mt-4">
      <form className="d-flex">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">
              Book's Name:
            </label>
            <input
              type="text"
              value={titre}
              className="form-control"
              placeholder=""
              aria-describedby="bookNameHelp"
              onChange={(e) => setTitre(e.target.value)}
            />
            <label htmlFor="author" className="form-label">
              Author:
            </label>
            <input
              type="text"
              value={Author}
              className="form-control"
              placeholder=""
              aria-describedby="authorHelp"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="genre" className="form-label">
              Genre:
            </label>
            <select value={genre} onChange={(e) => setGenre(e.target.value)} className="form-select">
              {selector.map((v) => (
                <option key={v.id} value={v.Genre}>
                  {v.Genre}
                </option>
              ))}
            </select>

            <button onClick={handleSearch} className="btn btn-primary mt-3">
              Search
            </button>

            {searchClicked && list.length > 0 ? (
              <div className="table-responsive mt-3">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th scope="col">Titre</th>
                      <th scope="col">Author</th>
                      <th scope="col">Genre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((e, key) => (
                      <tr className="" key={key}>
                        <td scope="row">{e.Titre}</td>
                        <td>{e.Auteur}</td>
                        <td>{e.Genre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
