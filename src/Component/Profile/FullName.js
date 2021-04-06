import React from 'react'
import {Table} from 'react-bootstrap';

const   user= {
name: 'Rowan',
lastName:'Atkinson', 
};
const UserName = () =>{
    return (
        <div className ="divTable">
            <Table striped bordered hover variant="dark"  >
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.name}</td>
      <td>{user.lastName}</td>
    </tr>
  </tbody>
</Table>
        </div>  
        
    )
}
export default UserName