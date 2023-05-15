import React from 'react';
import logo from '../../../assets/Logo/Group 1329.png'
import { Form, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {




    const handleRegistration = (event) => { 


        event.preventDefault();

        const form = event.target;
        const name =  form.name.value;
        const username = form.username.value;
        const date = form.date.value;
        const description = form.description.value;
        const events = form.events.value;

        const allFields = {

            name, username, date, description, events
        }


        console.log (allFields)



        fetch (`http://localhost:7000/volunteers`, {

        method : 'POST',

        headers : {

            "content-type": "application/json",
        },
        body : JSON.stringify(allFields)
        


        })
        .then (res => res.json())
        .then (data => { console.log (data)

            Swal.fire(
                'Good job!',
                'Registration successfull!',
                'success'
              )


              
        event.target.reset()
        
        })


    }
    return (
        <div className=''>
           <div className=' flex justify-center w-full'>



            


            <div>

           <Link to = "/"> <img className='w-56' src= {logo} alt="" /></Link>


            <div className="hero bg-base-200">
  <div className="hero-content ">
    
    <div className="card  lg:w-96 max-w-md border border-gray-100 bg-base-100">
      <Form onSubmit={handleRegistration} className="card-body">
        <h1 className='text-xl font-bold'>Register as a Volunteer</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input name='name' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Username or email</span>
          </label>
          <input name='username' type="text" placeholder="" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Date</span>
          </label>
          <input name='date' type="date" placeholder="" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <input name='description' type="text" placeholder="" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Event</span>
          </label>
          <input name='events' type="text" placeholder="" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </Form>
    </div>
  </div>
</div>
            </div>
           </div>
        </div>
    );
};

export default Register;