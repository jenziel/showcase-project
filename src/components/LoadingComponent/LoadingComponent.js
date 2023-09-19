import pencil from '../../images/pencil.png';
import './LoadingComponent.css';

function LoadingComponent (){

return (
    <div className="loading">
        <img src={pencil} className="Load-image" alt="paper and pencil" />
        <p className="loading-text">Loading ...</p>
    </div>
)
}

export default LoadingComponent;