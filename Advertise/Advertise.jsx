import React from 'react'

const Advertise = () => {
  return (
    <div className='bg-white relative z-40 m-10'>
      <div className='py-18 '>
        <div className='flex flex-col align-middle justify-center items-center text-center gap-4  mt-16'> 
            <div>
                <h1 className='font-serif text-center flex items-center text-5xl'>Proudly brought to you by</h1>
            </div>
            <div className='container flex justify-between items-center gap-11'>
                <img className='w-[370px]' src="https://images.squarespace-cdn.com/content/v1/60e6341f017575363ab46dbc/a8e7b4a5-7ff1-4d66-8df5-abcfbecd7a8b/TAB+Logo.png?format=750w" alt="" />
                <img className='w-[370px]' src="https://images.squarespace-cdn.com/content/v1/60e6341f017575363ab46dbc/73ff9abb-b974-43c7-8739-1cfb10147b3b/MicrosoftTeams-image+%2829%29.png?format=750w" alt="" />
                <img className='w-[370px]' src="https://images.squarespace-cdn.com/content/v1/60e6341f017575363ab46dbc/38c3c827-abc5-4f36-b562-b51d68bac102/SF+Logo.png?format=750w" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Advertise
