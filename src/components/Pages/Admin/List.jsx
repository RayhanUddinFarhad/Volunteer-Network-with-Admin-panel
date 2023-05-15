import React, { useEffect, useState } from 'react';
import Volunteer from './Volunteer';

const List = () => {


    const [volunteer, setVolunteer] = useState([])


   useEffect (() => {
    fetch (`http://localhost:7000/volunteers`)
    .then (res => res.json())
    .then (data => setVolunteer (data))
    }, [])





    return (
        <div>


            <div>



            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Registration Date</th>
        <th>Volunteer list</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}


      {

        volunteer && volunteer.map (data => <Volunteer key={volunteer._id} data = {data}></Volunteer>)
      }
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default List;