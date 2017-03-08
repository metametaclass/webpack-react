import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.css'

import { NumberList } from './numberlist'

import { Clock } from './clock'

import { Comment } from './comment'

/*
function formatName(user) {  
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);

*/


/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

*/







const numbers = [1, 2, 3, 4, 5];

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
    <div>
        <Clock/>
        <NumberList numbers={numbers} />
        <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
    </div>,
    document.getElementById('root')
);

