import "./Credits.css";
import { Link } from "react-router-dom";

function Credits() {
  return (
    <div className='credits'>
      <Link to='/'>
        <button className='back-to-home-btn'>Back to Home</button>
      </Link>
      <div className='credits-list'>
        <h1>Credits</h1>
        <p>
          Our loading image is courtesy of{" "}
          <a
            href='https://thenounproject.com/icon/pencil-1357435/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Olga
          </a>{" "}
          at the noun project.
        </p>
        <p>
          Special Thanks to Art Institute of Chicago for sharing their{" "}
          <a
            href='https://api.artic.edu/docs/#introduction/'
            target='_blank'
            rel='noopener noreferrer'
          >
            API
          </a>{" "}
          with the public.
        </p>
      </div>
    </div>
  );
}

export default Credits;
