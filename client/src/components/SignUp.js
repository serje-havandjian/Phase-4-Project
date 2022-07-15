import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }

    return (
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUq6t2-8dvl2Gc3YBDLC669_hzvoL3RYgOw&usqp=CAU"/> Create a new account
              </Header>
              <Form size='large' onSubmit={handleSubmit}>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition="left" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  <Button type="submit" color='teal' fluid size="large">
                    Sign-up
                  </Button>
                </Segment>              
              </Form>
              <Message>
                Already have an account? <a href="/login">Login here.</a>
              </Message>
            </Grid.Column>
          </Grid>
    );
}

export default SignUp;




{/* <div>
<form onSubmit={handleSubmit}>
  <h1>Sign Up</h1>
  <label htmlFor="username">Username</label>
  <input
    type="text"
    id="username"
    autoComplete="off"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    autoComplete="current-password"
  />
  <label htmlFor="password">Password Confirmation</label>
  <input
    type="password"
    id="password_confirmation"
    value={passwordConfirmation}
    onChange={(e) => setPasswordConfirmation(e.target.value)}
    autoComplete="current-password"
  />
  <button type="submit">Sign Up</button>
</form>
</div> */}