import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Events from './Events';

const ShowAll = () => {


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









    return (

        <>

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