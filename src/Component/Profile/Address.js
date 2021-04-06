import React from 'react'
import {Table} from 'react-bootstrap';

const   adress= { 
    avenue:  '8 Harley Gardens',
    city: ' London',
    country: 'England',
        
    };

const UserAddress = () =>{
    return (
        <div className="divTable">
            <Table striped bordered hover variant="dark" >
  <thead>
    <tr>
      <th>Avenue</th>
      <th>City</th>
      <th>Country</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{adress.avenue}</td>
      <td>{adress.city}</td>
      <td>{adress.country}</td>

    </tr>
  </tbody>
</Table>
        </div>
    )
}
export default UserAddress
