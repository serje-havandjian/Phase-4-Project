import React, {useState, useEffect} from "react";

function Map() {

    const [ states, setStates ] = useState([]);
    const [ stateId, setStateId ] = useState();
    const [ stateDestinations, setStateDestinations ] = useState([]);
    const [ destinationId, setDestinationId ] = useState();
    const [ destinationReviews, setDestinationReviews ] = useState([]);
   
    useEffect(()=>{
        fetch("/states")
        .then(result => result.json())
        .then(result => 
            setStates(result)
        );
    },[]);

    function displayColonyData(e) {
        setStateId(e.target.value);   
    }

    function handleDestinationId(e) {
        setDestinationId(e.target.value);
    }

    useEffect(() => {
        fetch(`/states/${stateId}`)
        .then(result => result.json())
        .then(result => setStateDestinations(result));
    },[stateId]); 

  
    let renderStateDestinations = null;

    if (stateDestinations.destinations !== undefined) {
        renderStateDestinations = stateDestinations.destinations.map((destination) => {
            return <button onClick={handleDestinationId} value={destination.id}>{destination.location}</button>
        })
    } 

    useEffect(()=>{
        fetch(`/destinations/${destinationId}`)
        .then(result => result.json())
        .then(result => setDestinationReviews(result));
    },[destinationId]); 

    let renderDestinationReviews = null; 

    if (destinationReviews.reviews !== undefined) {
        renderDestinationReviews = destinationReviews.reviews.map((review) => {
            return <div>{review.review}</div>
        })
    }

    const renderStates = states.map((state) => {
        return <button key={state.id} value={state.id} onClick={displayColonyData}>
            {state.name}
            </button>
    })
    
    return (
        <>
        <h1>Map</h1>
        <h2>{renderStates}</h2>
        <h3>{renderStateDestinations}</h3>
        <h4>{renderDestinationReviews}</h4>
        </>
    )
}

export default Map