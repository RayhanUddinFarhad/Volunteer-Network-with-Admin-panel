import React, { useEffect, useState } from 'react';
import Events from './Event/Events';
import { useLoaderData } from 'react-router-dom';


const Home = () => {



  const [event, setEvent] = useState([])
  const { totalProducts } = useLoaderData()
  const [currentPage, setCurrentPage] = useState(0)
  const totalPerpage = 4;


  const pages = Math.ceil(totalProducts / totalPerpage)


  const totalPages = []

  for (let i = 1; i < pages; i++) {


    totalPages.push(i)

  }

  console.log(totalPages)





  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:7000/allEvents?page=${currentPage}&limit=${totalPerpage}`);

      const data = await response.json();
      setEvent(data);
    }
    fetchData();
  }, [currentPage, totalPerpage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };




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

          event && event.map(data => <Events key={data._id} data={data}></Events>
          )
        }




      </div>


      <p>{currentPage}</p>


      {


        totalPages.map(number => <button className='btn text-center' onClick={() => setCurrentPage(number)}>{number}</button>)
      }
       <div className="pagination">
        {currentPage > 1 && (
          <button className="btn btn-primary" onClick={handlePreviousPage}>
            Previous Page
          </button>
        )}

        {currentPage < totalPages.length && (
          <button className="btn btn-primary" onClick={handleNextPage}>
            Next Page
          </button>
        )}
      </div>



    </>
  );
};

export default Home;