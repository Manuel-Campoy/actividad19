import ReactDOM from 'react-dom';
import './index.css';

const Title = props => {
    console.log(props);
    return <h3 className='title'>{props.children}</h3>
};

const app = (
    <div>
        <title>Desarrollo Útil</title>
    </div>
);
const container = document.getElementById('root');

ReactDOM.render(app, container);