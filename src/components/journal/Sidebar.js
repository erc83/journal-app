import React from 'react'

const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
        <div className='journal__sidebar-navbar'>
            <h3 className='mt-5'>
                <i className='far fa-moon'></i>
                <span> Eric</span>
            </h3>

            <button className='btn'>
                Logout
            </button>

        </div>

        <div className='journal__new-entry'>
            <i className='far fa-calendar-plus fa-5x'></i>
            <p>
                New Entry
            </p>
        </div>


    </aside>
  )
}

export default Sidebar