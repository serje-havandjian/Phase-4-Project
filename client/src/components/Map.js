import React, {useState, useEffect} from "react";

function Map() {

    const [ states, setStates ] = useState([]);
    const [ stateId, setStateId ] = useState();
    const [ stateDestinations, setStateDestinations ] = useState([]);
   
    useEffect(()=>{
        fetch("/states")
        .then(result => result.json())
        .then(result => 
            setStates(result)
        );
    },[]);

    function displayColonyData(e){
        setStateId(e.target.value);   
    }

    useEffect(()=>{
        fetch(`/states/${stateId}`)
        .then(result => result.json())
        .then(result => setStateDestinations(result));
    },[stateId]); 

  
    let renderStateDestinations = null;

    if (stateDestinations.destinations !== undefined) {
        renderStateDestinations = stateDestinations.destinations.map((destination) => {
            return <div>{destination.location}</div>;
        })
    }

    const renderStates = states.map((state) => {
        return <button value={state.id} onClick={displayColonyData}>
            {state.name}
            </button>
    })
    
    return (
        <>
        <h1>Map</h1>
        <h2>{renderStates}</h2>
        <h3>{renderStateDestinations}</h3>
        </>
    )
    
}

export default Map