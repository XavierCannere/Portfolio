import './App.css';
import { useState } from 'react';

function Comp2() {

    const [visible, invisible] = useState(true);

    const rendreVisible = () => {
      invisible(!visible);
    }

    return (
      <div className="Comp2">
        <h2>Scolarité</h2>
        <div class={`cardsDiv ${visible ? 'active' : ''}`} onClick={rendreVisible}>
          <p class="cardsP"><strong>2020 - 2022</strong> DUT Informatique à l'IUT Paul Sabatier, 31400 TOULOUSE</p>
        </div>
        {visible && (
        <div>
          Contenu de la div à afficher ou cacher.
        </div>
        )}
        <div class={`cardsDiv ${visible ? 'active' : ''}`} onClick={rendreVisible}>
          <p class="cardsP"><strong>2020 - 2022</strong> DUT Informatique à l'IUT Paul Sabatier, 31400 TOULOUSE</p>
        </div>
        {visible && (
        <div>
          Contenu de la div à afficher ou cacher.
        </div>
        )}
      </div>
    );
  }
  
  export default Comp2;