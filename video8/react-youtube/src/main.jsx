import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

const container = document.getElementById('root');

console.log(<App />);
console.log(App());

ReactDOM.render(<App />, container);
