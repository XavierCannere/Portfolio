import './Content.css';

function Content({id}) {
    return (
      <div id={id} className="Content">
            <h1>{id}</h1>
      </div>
    );
  }
  
  export default Content;