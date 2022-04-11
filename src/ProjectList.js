import logo from './logo.svg';
import './App.css';
import Flow from './Flow';
import Nodeslist from './Nodeslist';
import  Navbar  from './Navbar';
import { useNavigate } from "react-router-dom";

import { Card,CardGroup, Button } from 'react-bootstrap';
function App() {
    let navigate = useNavigate(); 
    return (
    <div className="project-list-body">
<CardGroup>
     <Card style={{ width: '18rem', margin:"10px" }}>
  
  <Card.Body>
    <Card.Title>Project One</Card.Title>
    <Card.Text>
      Project Actions
    </Card.Text>
    <Button onClick={()=>navigate("/project-1")}  variant="primary">View</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', margin:"10px" }}>
  
  <Card.Body>
    <Card.Title>Project Two</Card.Title>
    <Card.Text>
    Project Actions
    </Card.Text>
    <Button onClick={()=>navigate("/project-2")} variant="primary">View</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , margin:"10px"}}>
  
  <Card.Body>
    <Card.Title>Project Three</Card.Title>
    <Card.Text>
     Project Actions
    </Card.Text>
    <Button onClick={()=>navigate("/project-3")} variant="primary">View</Button>
  </Card.Body>
</Card>
</CardGroup>
    </div>
  );
}

export default App;
