import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from 'styled-components'
import { auth, db } from "./firebase"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null)
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <div className="App">
      <Router>
        {
          !user ?
            (<Login setUser={setUser} />) :
            (
              <Container>
                <Header
                  signOut={signOut}
                  cartItems={cartItems}
                  user={user} />
                <Switch>
                  <Route path="/cart">
                    <Cart cartItems={cartItems} />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>

                </Switch>
              </Container>)
        }

      </Router>
    </div>
  );
}
const Container = styled.div`
background-color:#eaedea;
`
export default App;
