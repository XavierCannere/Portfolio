import './Header.css';

function Header() {

    const moveTo = () => {
        window.scrollTo(0, 0);
    }

    return (
      <div className="Header">
        <ul>
            <li onClick={moveTo}>Accueil</li>
            <li>Expériences professionnelle</li>
            <li>Expériences scolaires</li>
            <li>Expériences personnelles</li>
            <li>Compétences</li>
        </ul>
      </div>
    );
  }
  
  export default Header;