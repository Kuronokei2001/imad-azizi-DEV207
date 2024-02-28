import React from 'react';
import { useSelector } from 'react-redux';

export default function DetailAtelier() {
  const livresinfo = useSelector((state) => state.livres);

  return (
    <div className='detail-background'>
      <div className="container mt-5">
        <ul className="list-group custom-ul">
          {livresinfo.map((a, key) => (
            <li key={key} className="list-group-item custom-li">
              <strong>ISBN:</strong> {a.isbn}<br />
              <strong>Genre:</strong> {a.Genre}<br />
              <strong>Title:</strong> {a.Titre}<br />
              <strong>Author:</strong> {a.Auteur}<br />
              <strong>Price:</strong> {a.Prix}<br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
