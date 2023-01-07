import React from 'react'

const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images.unsplash.com/photo-1672497826788-8f19a2e30b26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)'
            }}
        ></div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo día
            </p>
            <p className='journal__entry-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, mollitia.
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>


    </div>
  )
}

export default JournalEntry