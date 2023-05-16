import React, { useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Events from './Events';
import { useForm } from 'react-hook-form';

const ShowAll = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [data , setData ] = useState ([])


    

    const handlesortDate = () => {

        fetch (`http://localhost:7000/eventbyDate`)
        .then (res => res.json())
        .then (data  => setData  (data) )




    }


    useEffect(() => {


        fetch (`http://localhost:7000/eventsAll`)
        .then (res => res.json())
        .then (data =>  setData (data))

     }, [])

     


const handleSearchSubmit = (e) => {
e.preventDefault()

const search = e.target.search.value;

console.log (search)

fetch (`http://localhost:7000/search/${search}`)
.then (res => res.json())
.then (data => setData (data))


}






    return (

        <>

<div className="flex justify-center">
            <div className="form-control w-full sm:w-auto">
              <Form onSubmit={handleSearchSubmit} className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                  name='search'
                />
                <button className="btn btn-primary">

                  Search
                </button>
              </Form>
            </div>


          </div>


        <button onClick={handlesortDate} className='btn'>sort by date</button>
        <div className='grid lg:grid-cols-4 gap-5'>


            { 
            data && data.map (data => <Events data={data}></Events>)


            }
            
        </div>

        </>
    );
};

export default ShowAll;