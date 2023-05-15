import React from 'react';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';


const Volunteer = ({data}) => {
    return (
        
            <tr>
        <th>{data.name}</th>
        <td>{data.userName}</td>
        <td>{data.date}</td>
        <td>{data.events}</td>
        <td className='text-red-500'> <FaTrashAlt/></td>
      </tr>
    );
};

export default Volunteer;