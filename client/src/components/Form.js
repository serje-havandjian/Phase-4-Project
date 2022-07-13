import React, { useState } from "react";

function Form({ stateId, user, destinationId, stateDestinations, setStateDestinations, setDestinationReviews, reviewToEdit, ratingToEdit, setReviewToEdit, setRatingToEdit, reviewId }) {
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
        .then(() => fetch(`/states/${stateId}`)
        .then(result => result.json())
        .then(result => setStateDestinations(result)))

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
        .then(() => fetch(`/destinations/${destinationId}`))
        .then(result => result.json())
        .then(result => setDestinationReviews(result))

        e.target.reset();
    }

    function changeReview(e) {
        let newReview = e.target.value;
        setReviewToEdit(newReview);
    }

    function changeRating(e) {
        let newRating = e.target.value;
        setRatingToEdit(newRating);
    }

    console.log(reviewId, "formId")

    function handleReviewEdit(e) {
        e.preventDefault();
        const reviewObj = {
            review: reviewToEdit,
            rating: ratingToEdit,
            destination_id: destinationId,
            user_id: user.id
        }

        fetch(`/reviews/${reviewId}`, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },
            body: JSON.stringify(reviewObj)
          })
          .then((resp) => resp.json())
          .then(() => fetch(`/destinations/${destinationId}`))
          .then(result => result.json())
          .then(result => setDestinationReviews(result))

          e.target.reset();
          setRatingToEdit("");
          setReviewToEdit("");
    }

    return (
        <>
            <div class="form">
                <form onSubmit={handleFormSubmit}>
                    <label>Add a new destination:</label><br></br>
                    <input id="destinationForm" onChange={newDestination} type="text" placeholder="Whisper to me your destination..."></input>
                    <button class="submitButton" type="submit">submit</button>
                </form>
                <form onSubmit={handleReviewSubmit}>
                    <label>Add a review:</label><br></br>
                    <input id="reviewForm" onChange={handleNewReview} type="text" placeholder="Whisper to me your review..."></input>
                    <input id="rating" onChange={handleNewRating} type="integer" placeholder="Whisper to me your rating..."></input>
                    <button class="submitButton" type="submit">submit</button>
                </form>
                <form onSubmit={handleReviewEdit}>
                    <label>Edit your review:</label>
                    <input value={reviewToEdit} onChange={changeReview} type="text" placeholder="Whisper to me your edit..."></input>
                    <input value={ratingToEdit} onChange={changeRating} type="integer" placeholder="Whisper to me your edit..."></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;