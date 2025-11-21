import ReactDOM from 'react-dom/client'; 
import './index.css';
import React from 'react'; 

const MyTitle = props => { 
  console.log(props);
  return <h3 className='title'>{props.children}</h3>
};

const app = (
  <div>
    <MyTitle>Desarrollo Útil</MyTitle> 
  </div>
);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(app);