import React, { useEffect, useState } from 'react';
import Events from './Event/Events';


const Home = () => {



    const [event, setEvent] = useState ([])


    useEffect (() => { 

        fetch (`http://localhost:7000/allEvents`)
        .then (res => res.json())
        .then (data => setEvent (data))



    }, [])




    return (
       <>
       

       <div className="flex justify-center">
        <div className="space-y-10 w-full">
          <h1 className="text-4xl text-center font-bold">
            I grow by helping people in need.
          </h1>
          <div className="flex justify-center">
            <div className="form-control w-full sm:w-auto">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-primary">
                 
                  Search
                </button>
              </div>
            </div>

            
          </div>


          

        </div>
      </div>


      <div className=' grid lg:grid-cols-4 mx-16 my-10 gap-10'>
     {

        event && event.map (data =>  <Events key={data._id} data = {data}></Events>
        )
     }




      </div>
       
       
       
       
       </>
    );
};

export default Home;