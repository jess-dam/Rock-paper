import React from 'react';
import logo from './logo.svg';
import './App.css';

import ObjectButton from './components/ObjectButton';

function App() {
  const[name, setName] = React.useState();
  const[objects, setObjects] = React.useState(['Rock','Paper','Scissors']);
  return (
    <>
      <ObjectButton
        name={'Rock'}
        setName={setName}
        objects={objects}
        setObjects={setObjects}
      />
      <ObjectButton
        name={'Paper'}
        setName={setName}
        objects={objects}
        setObjects={setObjects}
      />
      <ObjectButton
        name={'Scissors'}
        setName={setName}
        objects={objects}
        setObjects={setObjects}
      />
    </>
  );
}

export default App;
