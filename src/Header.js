import './Header.css';

function Header() {

    const handleTriggerClick = (targetId) => {
        console.log('Appel de :', targetId);
        const element = document.getElementById(targetId);
        if (element) {
            const headerHeight = document.querySelector('.Header').offsetHeight;
            let topPosition = element.getBoundingClientRect().top + window.pageYOffset;
            topPosition -= headerHeight;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    }

    return (
      <div className="Header">
        <ul>
            <li onClick={() => handleTriggerClick('c1')}>Accueil</li>
            <li onClick={() => handleTriggerClick('c2')}>Expériences professionnelle</li>
            <li onClick={() => handleTriggerClick('c3')}>Expériences scolaires</li>
            <li onClick={() => handleTriggerClick('c4')}>Expériences personnelles</li>
            <li onClick={() => handleTriggerClick('c5')}>Compétences</li>
        </ul>
      </div>
    );
  }
  
  export default Header;