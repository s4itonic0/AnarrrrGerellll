import React from 'react'

const Home = () => {
  return (

  <div class="bg-cover bg-center h-screen bg-[url('./components/Home/Ballet.png')]">
    <div className=' py-16'>
        <div className='flex flex-col align-middle justify-center items-center text-center gap-4  mt-16'>
            <div>
                <h1 className='text-secondary font-serif text-8xl tracking-widest uppercase'>World <br /> Ballet <br /> Day <br /> 2023</h1>
            </div>
            <div>
              <h1><h1 className='text-third font-serif text-3xl mt-16'>Celebrating 10 years of uniting the world's <br />leading dance companies and artists</h1></h1>
            </div>
        </div>
    </div>
  </div>

  )
}

export default Home
