import React from 'react'
import child from '../../../../assets/childSupport.png'

const Events = ({ data }) => {
  return (
    <div className=' relative'>


      <img src={data.image} alt="" />
      <h4 style={{ backgroundColor: `${data.colorCode}` }}
        className={`rounded-lg py-6 w-full text-center font-bold  text-white absolute bottom-0`}
      >
        {data.name}
      </h4>
    </div>
  );
};

export default Events;