import React from 'react'
import {Grid, Cell, Button} from 'react-mdl'

const style = { 
   background : '#fff', 
   margin: '50px auto',
   padding: '10px',
   borderRadius:'20px', 
   
}
const About =()=> { 
    return  (
        <div >
            <Grid className="demo-grid-2" >
                <Cell className='info-about-page' style = {style} shadow={2} col={10}>
                    <h2> Ahmed ELhor</h2>
                    <p>Full Stack Web developer</p>
                    <h4 style= {{fontStyle:'italic'}}> I share things i know and things i do not know</h4>
                    <hr />
                    <h3>
                        I am experienced in leveraging agile frameworks to provide a robust 
                        synopsis for 
                        high level overviews. Iterative approaches to corporate strategy 
                        foster collaborative thinking to further the overall value proposition.
                    </h3>
                        <a href='/resume'><Button raised accent ripple colored>RESUME</Button></a>
                </Cell>
            </Grid>
        </div>
    )
}

export default About;
