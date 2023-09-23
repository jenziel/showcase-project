import pencil from '../../images/pencil.png';
import spinner from '../../images/spinner-transparent.png'
import './LoadingComponent.css';

function LoadingComponent (){

return (
    <div className="loading">
        <img src={pencil} className="Load-image" alt="paper and pencil" />
        <div className='spinner-section'>
        <img src={spinner} alt='spinner' className='spinner'/>
        <p className="loading-text">Loading ...</p>
        </div>
    </div>
)
}

export default LoadingComponent;