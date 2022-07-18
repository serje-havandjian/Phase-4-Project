import React, {useState, useEffect} from "react";
import InputForm from './InputForm';
import { List, Button, Card, Grid, Header } from 'semantic-ui-react';

function Map({ user }) {

    const [ states, setStates ] = useState([]);
    const [ stateId, setStateId ] = useState();
    const [ stateDestinations, setStateDestinations ] = useState([]);
    const [ destinationId, setDestinationId ] = useState();
    const [ destinationReviews, setDestinationReviews ] = useState([]);
    const [ reviewId, setReviewId ] = useState();
    const [ reviewToEdit, setReviewToEdit ] = useState("");
    const [ ratingToEdit, setRatingToEdit ] = useState();
    const [ displayDestForm, setDisplayDestForm ] = useState(false);
    const [ displayReviewForm, setDisplayReviewForm ] = useState(false);
    const [ displayEditForm, setDisplayEditForm ] = useState(false);
   
    useEffect(() => {
        fetch("https://better-state-traveler.herokuapp.com/states")
        .then(result => result.json())
        .then(result => setStates(result));
    },[]);

    function displayColonyData(e) {
        setStateId(e.target.title);   
        setDisplayDestForm(true);
        setDestinationReviews([]);
        setDisplayEditForm(false);
    }

    function handleDestinationId(e) {
        setDestinationId(e.target.name);
        setDisplayReviewForm(true);
        setDisplayEditForm(false);
    }

    useEffect(() => {
        fetch(`https://better-state-traveler.herokuapp.com/states/${stateId}`)
        .then(result => result.json())
        .then(result => setStateDestinations(result));
    },[stateId]); 

    let renderStateDestinations = null;

    if (stateDestinations.destinations !== undefined) {
        renderStateDestinations = stateDestinations.destinations.map((destination) => {
            return <Button color="gray" size="big" style={{ height: '5vh' }} onClick={handleDestinationId} key={destination.id} name={destination.id}>{destination.location}</Button>
        });
    };

    useEffect(() => {
        fetch(`https://better-state-traveler.herokuapp.com/destinations/${destinationId}`)
        .then(result => result.json())
        .then(result => setDestinationReviews(result));
    },[destinationId]); 

    function handleDeleteReview(e) {

        fetch(`https://better-state-traveler.herokuapp.com/reviews/${e.target.value}`, {
            method: "DELETE"
        })
        .then(() => fetch(`https://better-state-traveler.herokuapp.com/destinations/${destinationId}`)
        .then(result => result.json())
        .then(result => setDestinationReviews(result)));

        setDisplayEditForm(false);
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
                    <Card style={{ backgroundColor: "teal" }}textAlign="center">
                        <Card.Content>
                            <Card.Header style={{ fontSize:'20px', color:"white" }}>{review.destination.location}</Card.Header>
                            <Card.Description style={{ fontSize:'20px', color:"white" }}>{review.user?.username} says "{review.review}"</Card.Description>
                            <br></br>
                            <Card.Description style={{ fontSize:'18px', color:"white" }}>Rating: {review.rating}</Card.Description>
                            <br></br>
                            <br></br>
                            <Button value={review.review} name={review.rating} onClick={(e) => {
                            setReviewId(review.id);
                            sendReviewToEdit(e);
                            setDisplayEditForm(true);
                            }} inverted color="green"> Edit </Button>
                            <Button inverted value={review.id} onClick={handleDeleteReview} color="red"> Delete </Button>
                        </Card.Content>
                    </Card>
                </>
            );
        });
    }

    const renderStates = states.map((state) => {
        return (
            <>
                <List.Item>
                    <List.Header style={{ textAlign: "center" }} key={state.id} title={state.id} onClick={displayColonyData}>{state.name}</List.Header>
                </List.Item>
            </>
        );
    });
    
    return (
        <>
            <Header style={{ textAlign: "center", fontSize: "50px" }}>Leave A Review From Your Travels!</Header>
            <Grid>
                <Grid.Column width={3}>
                    <List animated verticalAlign="middle">{renderStates}</List>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Card.Group itemsPerRow={5}>{renderStateDestinations}</Card.Group>
                    <Card.Group itemsPerRow={5}>{renderDestinationReviews}</Card.Group> 
                    <br></br>                   
                    <InputForm displayEditForm={displayEditForm} setDisplayEditForm={setDisplayEditForm} displayReviewForm={displayReviewForm} setDisplayReviewForm={setDisplayReviewForm} displayDestForm={displayDestForm} setDisplayDestForm={setDisplayDestForm} reviewId={reviewId} reviewToEdit={reviewToEdit} ratingToEdit={ratingToEdit} setReviewToEdit={setReviewToEdit} setRatingToEdit={setRatingToEdit} stateId={stateId} user={user} destinationId={destinationId} stateDestinations={stateDestinations} setStateDestinations={setStateDestinations} setDestinationReviews={setDestinationReviews}/>
                </Grid.Column>
            </Grid>
        </>
    );
}

export default Map;