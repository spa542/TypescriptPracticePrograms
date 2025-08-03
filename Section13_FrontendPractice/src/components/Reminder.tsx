import { useState } from "react";


type ChildProps = {
    parentCounter: number;
}


function ChildCounter(props: ChildProps) {
    const [childCounter, setChildCounter] = useState(0);
    
    function handleClickIncrement() {
        setChildCounter(childCounter + 1);
    }

    console.log('Rendering child component')
    
    return (
        <div style={{ border: "1px dashed red"}}>
            <button onClick={handleClickIncrement}>Increment child counter</button> 
            <p>Child counter: {childCounter}</p>
            <p>Parent counter: {props.parentCounter}</p>
        </div>
    )
}


function ParentCounter() {
    const [parentCounter, setParentCounter] = useState(0);
    
    function handleClickIncrement() {
        setParentCounter(parentCounter + 1);
    } 

    return (
        <div style={{ border: "1px dashed blue"}}>
            <button onClick={handleClickIncrement}>Increment parent counter</button> 
            <ChildCounter parentCounter={parentCounter} />
        </div>
    )
}


function App2() {
    return (
        <div className="App">
            app works
            <br />
            <ParentCounter />
        </div>
    )
}


export default App2;
