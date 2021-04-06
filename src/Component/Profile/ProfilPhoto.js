import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap';



const UserPhoto = () =>{
    return (
        <Container>
  <Row className="center">
       <Col xs={6} md={4}>
      <Image src="./picUser.jpg" thumbnail  />
    </Col>
  </Row>
</Container>
        // <div>
        //     <img src='./picUser.jpg' alt='this is the user picture'/ >
        // </div>
    )
}
export default UserPhoto