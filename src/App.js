import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Alert,Breadcrumb,Card,Form,Container,Row,Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container> 
       <Form>
        <Row>
          <Col md>
            <Form.Group controlId='formEmail'>
             <Form.Label>E-mail address</Form.Label>
             <Form.Control type='email' placeholder='name@mail.com' />
             <Form.Text className='text-muted'>
               we dont share your email.
            </Form.Text>
           </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='*****' />
        </Form.Group>
          </Col>
        </Row>
        <Button variant='danger' className='my-3' type="submit">Login </Button>
      </Form>
      <Card className='mb-3' style={{color:"black"}}>
        <Card.Img src='https://picsum.photos/150/150'/>
          <Card.Body>
            <Card.Title>
              card example
            </Card.Title>
            <Card.Text>
              this is an example of react bootstrap cards 
            </Card.Text>
            <Button variant='primary'>test button </Button>
          </Card.Body>
      </Card>
        <Breadcrumb>
          <Breadcrumb.Item active="true">
            test1
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            test2
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            test3
          </Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is a button</Alert>
        <Button>test button </Button>
    </Container>
        
      </header>
    </div>
  );
}

export default App;
