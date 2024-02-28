import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Liver, Delete_Liver, Reset_Panier } from '../store/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Main() {
    const svgLogo = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      );
    
  const [genre, setGenre] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.livres);
  const Panier = useSelector((state) => state.Panier);

  const onAdd = (b) => {
    dispatch(Add_Liver(b));
  };

  const onReset = () => {
    dispatch(Reset_Panier());
  };

  const onDel = (a) => {
    dispatch(Delete_Liver(a));
  };

  const total = () => {
    return Panier.reduce((total, livre) => total + livre.Prix, 0);
  };

  return (
    <div className='main-background'>
    <div className="container mt-5 ">
      <label>Choose Genre:</label>
      <select
        className="form-select"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        {selector.map((a, key) => (
          <option key={key} value={a.Genre}>
            {a.Genre}
          </option>
        ))}
      </select>

      <h1 className="mt-3">Books of Genre: {genre}</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead className="table-primary">
            <tr>
              <th scope="col">ISBN</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Genre</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {selector
              .filter((a) => a.Genre === genre)
              .map((a, key) => (
                <tr key={key}>
                  <td scope="row">{a.isbn}</td>
                  <td>{a.Titre}</td>
                  <td>{a.Auteur}</td>
                  <td>{a.Prix}</td>
                  <td>{a.Genre}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => onAdd(a)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h1 className="mt-3">{svgLogo} Shopping Cart</h1>
      <ul className="list-group">
        {Panier.map((e, key) => (
          <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
            {e.Auteur} - {e.Prix}
            <button
              className="btn btn-danger"
              onClick={() => onDel(e.isbn)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onReset} className='btn btn-danger'>onReset</button>
      <h1 className="mt-3">Total: {total()} MAD</h1>

    </div>
    <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
          <span>Connect with us:</span>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="text-center py-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2024 Bibliothèque
        </div>
      </footer>
    </div>
  );
}
