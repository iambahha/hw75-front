import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import Cipher from "./containers/Cipher/Cipher";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Container style={{marginTop: '20px'}}>
          <Switch>
            <Route path="/" exact component={Cipher} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}



export default App;