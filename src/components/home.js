import React from 'react'

const Home= ()=> { 
    return  (
    <header className="">

        
        <div className="container text-center">
          <img src='/imgs/ahmed (2).jpg' alt='ahmed elhor' style={{width:'40%', height:'30%', borderRadius:'50%',}} />
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">I am a full stack web develper-designer</p>
          <a href='/about'><button>More about me </button></a>

          <p>Powered by <a href='https://reactjs.org/'>React</a></p>
        </div> 
    </header>
    )
}

export default Home 
 