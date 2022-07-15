import React, { useState } from "react";
import { Form, Button, TextArea } from "semantic-ui-react";

function InputForm({ displayEditForm, setDisplayEditForm, displayReviewForm, setDisplayReviewForm, displayDestForm, setDisplayDestForm, stateId, user, destinationId, stateDestinations, setStateDestinations, setDestinationReviews, reviewToEdit, ratingToEdit, setReviewToEdit, setRatingToEdit, reviewId }) {
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
        };

        fetch("https://better-state-traveler.herokuapp.com/destinations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDestObj)
        })
        .then(resp => resp.json())
        .then(() => fetch(`https://better-state-traveler.herokuapp.com/states/${stateId}`)
        .then(result => result.json())
        .then(result => setStateDestinations(result)));

        e.target.reset();
        setDisplayReviewForm(false);
        setDestinationReviews([]);
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
        };

        fetch("https://better-state-traveler.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReviewObj)
        })
        .then(resp => resp.json())
        .then(() => fetch(`https://better-state-traveler.herokuapp.com/destinations/${destinationId}`))
        .then(result => result.json())
        .then(result => setDestinationReviews(result));

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

    function handleReviewEdit(e) {
        e.preventDefault();
        let reviewObj = {
            review: reviewToEdit,
            rating: ratingToEdit,
            destination_id: destinationId,
            user_id: user.id
        };

        fetch(`https://better-state-traveler.herokuapp.com/reviews/${reviewId}`, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },
            body: JSON.stringify(reviewObj)
          })
          .then((resp) => resp.json())
          .then(() => fetch(`https://better-state-traveler.herokuapp.com/destinations/${destinationId}`))
          .then(result => result.json())
          .then(result => setDestinationReviews(result));

          e.target.reset();
          setRatingToEdit("");
          setReviewToEdit("");
    }

    return (
        <>
            <div class="form">
                {displayDestForm ? <Form style={{ backgroundColor: "teal" }} onSubmit={handleFormSubmit}>
                    <label>Add a new destination:</label><br></br>
                    <Form.Input id="destinationForm" onChange={newDestination} type="text" placeholder="Whisper to me your destination..."></Form.Input>
                    <Button class="submitButton" type="submit">submit</Button>
                </Form> : null}
                {displayReviewForm ? <Form onSubmit={handleReviewSubmit}>
                    <label>Add a review:</label><br></br>
                    <TextArea id="reviewForm" onChange={handleNewReview} type="text" placeholder="Whisper to me your review..."></TextArea>
                    <Form.Input id="rating" onChange={handleNewRating} type="integer" placeholder="Whisper to me your rating..."></Form.Input>
                    <Button class="submitButton" type="submit">submit</Button>
                </Form> : null}
                {displayEditForm ? <Form onSubmit={handleReviewEdit}>
                    <label>Edit your review:</label>
                    <TextArea value={reviewToEdit} onChange={changeReview} type="text" placeholder="Whisper to me your edit..."></TextArea>
                    <Form.Input value={ratingToEdit} onChange={changeRating} type="integer" placeholder="Whisper to me your edit..."></Form.Input>
                    <Button type="submit">submit</Button>
                </Form> : null}
            </div>
        </>
    );
}

export default InputForm;