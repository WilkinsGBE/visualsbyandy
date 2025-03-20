import React from 'react'

const contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-[#A0522D]">
      <div>
        <h1>You have an event coming soon ?</h1>
      </div>
      <div>
        <form action="">
          <label htmlFor="">First Name</label>
          <input type="text" className='bg-white'/>
          <label htmlFor="">Last Name</label>
          <input type="text" className='bg-white'/>
          <label htmlFor="">Email</label>
          <input type="email" className='bg-white'/>
          <label htmlFor="">Subject</label>
          <input type="text" className='bg-white'/>
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10" className='bg-white'></textarea>
        </form>
        <button type="submit" className='bg-black'>Submit</button>
      </div>
    </div>
  )
}

export default contact