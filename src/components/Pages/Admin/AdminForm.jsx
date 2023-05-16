import React from 'react';
import { Form } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminForm = () => {




    




    const handeSubmit = (e) => {


        e.preventDefault();

        const form = e.target ;
        const name  = form.name.value;
        const date = form.date.value;

        const Description = form.description.value;
        const image = form.image.value;
        const colorCode = form.color.value;


        const inputsValue = {

            name, date, Description, image, colorCode
        }

        fetch (`http://localhost:7000/allEvents`, {

        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsValue),


    })
    .then (res => res.json())
    .then (data => { console.log (data)

        Swal.fire(
            'Good job!',
            'Event added successfull!',
            'success'
          )
          e.target.reset()
    
    
    })


        console.log (inputsValue)
     }
    return (
        <Form onSubmit={handeSubmit} className='w-full space-y-10'>
            <div className='flex space-x-2'>

               <div className='w-1/2'>


               <label className='font-bold'>Events</label>
                <input name='name' type="text" className='input input-bordered w-full' />

               </div>

               <div className='w-1/2'>


               <label className='font-bold'>Date</label>
                <input name='date' type="date" className='input input-bordered w-full' />

               </div>


                
            </div>


            <div className='flex space-x-2'>

               <div className='w-1/2'>


               <label className='font-bold'>Description</label>
                <input name='description' type="text" className='input input-bordered w-full' />

               </div>

               <div className='w-1/2'>


               <label className='font-bold'>Banner URL</label>
                <input name='image' type="text" className='input input-bordered w-full' />

               </div>


                
            </div>

            <div className='w-1/2'>


<label className='font-bold'>Select Color</label>
 <input name='color' type="color" className='input input-bordered w-full ' />

</div>


            <div className='w-full  flex justify-end'>



            <button className='btn btn-primary  '>Submit</button>

            </div>


        </Form>
    );
};

export default AdminForm;