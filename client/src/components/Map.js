import React, {useState, useEffect} from "react";
import Form from './Form';

function Map({ user }) {

    const [ states, setStates ] = useState([]);
    const [ stateId, setStateId ] = useState();
    const [ stateDestinations, setStateDestinations ] = useState([]);
    const [ destinationId, setDestinationId ] = useState();
    const [ destinationReviews, setDestinationReviews ] = useState([]);
    const [ reviewId, setReviewId ] = useState();
    const [ reviewToEdit, setReviewToEdit ] = useState("");
    const [ ratingToEdit, setRatingToEdit ] = useState();
   
    useEffect(() => {
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

    useEffect(() => {
        fetch(`/destinations/${destinationId}`)
        .then(result => result.json())
        .then(result => setDestinationReviews(result));
    },[destinationId]); 

    function handleDeleteReview(e) {

        fetch(`/reviews/${e.target.value}`, {
            method: "DELETE"
        })
        .then(() => fetch(`/destinations/${destinationId}`)
        .then(result => result.json())
        .then(result => setDestinationReviews(result)))

    } 

    function sendReviewToEdit(e) {
        setReviewToEdit(e.target.value);
        setRatingToEdit(e.target.name);
    }

    let renderDestinationReviews = null; 

    if (destinationReviews.reviews !== undefined) {
        renderDestinationReviews = destinationReviews.reviews.map((review) => {
            return (
                <>
                    <div>review: {review.review} | rating: {review.rating}</div>
                    <button value={review.review} name={review.rating} onClick={(e) => {
                        setReviewId(review.id);
                        sendReviewToEdit(e)
                        }}>Edit</button>
                    <button value={review.id} onClick={handleDeleteReview}>Delete</button>
                </>
            )
        })
    }
    console.log(reviewId, "reviewId after")

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
            <Form reviewId={reviewId} reviewToEdit={reviewToEdit} ratingToEdit={ratingToEdit} setReviewToEdit={setReviewToEdit} setRatingToEdit={setRatingToEdit} stateId={stateId} user={user} destinationId={destinationId} stateDestinations={stateDestinations} setStateDestinations={setStateDestinations} setDestinationReviews={setDestinationReviews}/>
        </>
    )
}

export default Map;