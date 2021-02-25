import Home from './components/home/home';
import SideNav from './components/side-nav/side-nav';
import { Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.css';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className = "App-body">
        <Row>
          <Col xs={2}><SideNav /></Col>
          <Col xs={9}><Home /></Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
