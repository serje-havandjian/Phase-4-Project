import SignUp from "./SignUp";
import Login from "./Login";

function Home({ user, setUser }) {
    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return <SignUp setUser={setUser} />;
    }
  }
  
  export default Home;
  