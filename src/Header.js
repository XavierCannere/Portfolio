import './App.css';

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
        <ul class="headerUl">
            <li class="headerLi" onClick={() => handleTriggerClick('Accueil')}>Accueil</li>
            <li class="headerLi" onClick={() => handleTriggerClick('c2')}>Expériences professionnelle</li>
            <li class="headerLi" onClick={() => handleTriggerClick('c3')}>Expériences scolaires</li>
            <li class="headerLi" onClick={() => handleTriggerClick('c4')}>Expériences personnelles</li>
            <li class="headerLi" onClick={() => handleTriggerClick('c5')}>Compétences</li>
        </ul>
      </div>
    );
  }
  
  export default Header;