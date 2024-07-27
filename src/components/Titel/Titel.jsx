import React from 'react';
import "./Titel.css"
{/* we use props, in APP JSX we give the titel and here we use(give the name as subTitel and titel)*/}
const Titel = ({subTitel, titel}) => {
  return (
    <div className='titel'>
      <p>{subTitel}</p>
      <h2>{titel}</h2>
    </div>
  );
}

export default Titel;
