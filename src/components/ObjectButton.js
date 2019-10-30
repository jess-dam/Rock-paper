import React from 'react'

function ObjectButton({ name, setName, objects, setObjects}){
    const [computerChoice, setComputerChoice] = React.useState('');
    const [userChoice, setUserChoice] = React.useState('');

    return(
        <button
            onClick = {() => {
                setComputerChoice(generateComputerChoice(objects));
                //setUserChoice(target.value)
                console.log(name)
            }}
        >
           {name}
        </button>
    )


}


export default ObjectButton;

const generateComputerChoice = (objects) => {
    let computer = Math.round(Math.random() * (2));
    //sconsole.log(`${computer} : ${objects[computer]}`);
    return (objects[computer]);
}