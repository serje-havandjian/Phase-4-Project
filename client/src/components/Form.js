import React, { useState } from "react";

function Form({ stateId, user, destinationId, stateDestinations, setStateDestinations }) {
    const [ newDestName, setNewDestName ] = useState("");
    const [ newReview, setNewReview ] = useState("");
    const [ newRating, setNewRating ] = useState();

    function newDestination(e) {
        e.preventDefault();
        setNewDestName(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        let newDestObj = {
            location: newDestName,
            state_id: stateId,
            user_id: user.id
        }

        fetch("/destinations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDestObj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        e.target.reset();
    }

    function handleNewReview(e) {
        e.preventDefault();
        setNewReview(e.target.value);
    }

    function handleNewRating(e) {
        e.preventDefault();
        setNewRating(e.target.value);
    }
    
    function handleReviewSubmit(e) {
        e.preventDefault();

        let newReviewObj = {
            review: newReview,
            rating: newRating,
            destination_id: destinationId,
            user_id: user.id
        }

        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReviewObj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        e.target.reset();
    }

    return (
        <>
            <div class="form">
                <form onSubmit={handleFormSubmit}>
                    <label>Add a new destination:</label><br></br>
                    <input id="destinationForm" onChange={newDestination} type="text" placeholder="Whisper to me your destination..."></input>
                    {/* <input type="hidden" value={stateId}></input> */}
                    <button class="submitButton" type="submit">submit</button>
                </form>
                <form onSubmit={handleReviewSubmit}>
                    <label>Add a review:</label><br></br>
                    <input id="reviewForm" onChange={handleNewReview} type="text" placeholder="Whisper to me your review..."></input>
                    {/* <input type="hidden" value={destinationId}></input> */}
                    <input id="rating" onChange={handleNewRating} type="integer" placeholder="Whisper to me your rating..."></input>
                    <button class="submitButton" type="submit">submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;