import React, {useState, useEffect} from "react";
import Form from './Form';

function Map({ user }) {

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
            return <button onClick={handleDestinationId} key={destination.id} value={destination.id}>{destination.location}</button>
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
            <div>{renderStates}</div>
            <div>{renderStateDestinations}</div>
            <br></br>
            <div>{renderDestinationReviews}</div>
            <Form stateId={stateId} user={user} destinationId={destinationId} stateDestinations={stateDestinations} setStateDestinations={setStateDestinations}/>
        </>
    )
}

// const [ destinationReviews, setDestinationReviews ] = useState([]);

export default Map;