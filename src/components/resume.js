import React, {Component} from  'react'
import {Grid, Cell, List, ListItem, ProgressBar} from 'react-mdl'


class Resume extends Component { 
    render() { 
        return  (
             <div  >
                  <Grid className="demo-grid-1">
                    <Cell col={3}  className = 'resume-disktop-left-side'hideTablet hidePhone >
                        <img src='/imgs/ahmed (2).jpg' alt= 'ahmed' /> 
                        <List>
                            <ListItem><a href= '#personalinfo'>Prsonal Info</a></ListItem>
                            <ListItem><a href= '#education'>Education</a></ListItem>
                            <ListItem><a href= '#skills'>Skills</a></ListItem>
                            <ListItem><a href= '#mywork'>Experience</a></ListItem>
                            <ListItem><a href= '#contact'>Contact</a></ListItem>

                        </List>
                        
                    </Cell>
                    {/* phone display  */}
                    <Cell col={5} className = 'resume-phone-head' tablet={8} hideDesktop >
                        <img src='/imgs/ahmed (2).jpg' alt= 'ahmed' /> 
                        <h4>Ahmed Elhor</h4>
                        <span>web developer</span>
                    </Cell>

                    <Cell col={9} className= 'resume-content' offsetDesktop={3} tablet={8} >
                    <h4 id = 'personalinfo' className = 'section-title'>Personal Info</h4>

                        <div className = 'resume-section'> 
                            <p> <span className= 'sub-title'>Name :</span> Ahmed Elsayed Dwedar <br/>
                                <span className= 'sub-title'>Nick Name : </span> Elhor <br/>
                                <span className= 'sub-title'>Address :  </span>Tanta Egypt <br/>
                                <span className= 'sub-title'>Phone : </span> +20 010-9312-1745<br/>
                                <span className= 'sub-title'>Email :</span> aelhor90@gmail.com <br/>


                            </p>
                        </div>

                        <h4 id  = 'education' className = 'section-title' >Education</h4>
                        <div className = 'resume-section'> 
                            <p>
                                <sapn className = 'sub-title'>july 2017</sapn><br/>
                                Faculty of Engineering ,<br/>
                                Computer and Automatic Control department .
                             </p>
                             <span className = 'sub-title'>Expected Gradution Year : </span><br/>
                             <p>May, 2022</p>
                        </div>
                        
                        <h4 id= 'skills' className = 'section-title'>Skills</h4>
                        <div className = 'resume-section'>
                            <h5 className='skill-sub-title'>Technical Skill</h5>
                            <List>
                                <ListItem>
                                    <sapn className='skill'>HTML_5 </sapn> < ProgressBar className= 'progressbar' progress={90} buffer={95} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>CSS_3 </sapn>  <ProgressBar className= 'progressbar'  progress={90} buffer={95} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>Java_Script </sapn>  <ProgressBar className= 'progressbar' progress={90} buffer={95} />
                                </ListItem>
                                <ListItem>
                                    <sapn className='skill'>ES6</sapn> <ProgressBar className= 'progressbar' progress={90} buffer={95} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>React.js</sapn>  <ProgressBar className= 'progressbar' progress={90} buffer={95} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>Node.js</sapn> <ProgressBar className= 'progressbar' progress={80} buffer={90} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>Express.js </sapn>  <ProgressBar className= 'progressbar' progress={80} buffer={85} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>mongoo_db</sapn> <ProgressBar className= 'progressbar' progress={70} buffer={75} />
                                </ListItem>
                                <ListItem>
                                    <span className='skill'>mongoose</span> <ProgressBar className= 'progressbar' progress={70} buffer={85} />
                                </ListItem>
                                <ListItem>
                                <sapn className='skill'>Git/Github  </sapn> <ProgressBar className= 'progressbar' progress={85} buffer={90} />
                                </ListItem>
                                <ListItem>
                                    <sapn className='skill'>Python</sapn> < ProgressBar className= 'progressbar' progress={90} buffer={95} />
                                </ListItem>
                                <ListItem>- Excellent Understanding of OOP Programming Technique</ListItem>
                                <ListItem>- Excellent problem Solving Skill</ListItem>
                                <ListItem>- Familiar with Data Structures and Alghorithms  </ListItem>
                                <ListItem>- Familiar with Rest Full APi  </ListItem>


                            </List>
                            <h5 className='skill-sub-title'>Soft Skills</h5>
                            <List>
                                <ListItem>Time Mangement</ListItem>
                                <ListItem>Team Member</ListItem>
                                <ListItem>Creativity</ListItem>
                            </List>
                            <h5 className='skill-sub-title'>More Skills</h5>
                            <List>
                                <ListItem>Adobe Photoshop</ListItem>
                                <ListItem>Open Gl </ListItem>
                                <ListItem>C++ Fundamentals</ListItem>
                            </List>
                        </div>
                            


                        <h4 id ='mywork'className = 'section-title'>Experience</h4>
                        <div className='resume-section'>
                            <h5>FreeLancer Web developer</h5>
                            <sapn className='sub-title'>2018 - 2022</sapn>
                            <p>I bulid many Projects ... check my <a target='_blank' href='/portfolio'>PORTFOLIO</a> </p>
                        </div>

                        <h4 id ='contact'className = 'section-title'>Contact</h4>
                        <div className='contact resume-section'>
                           <a href='https://www.facebook.com/ahmed.elsayed.37853' className='facebook social-media' target='_blank'>
                               <i className="fab fa-facebook"></i>
                            </a> 
                           <a href='https://twitter.com/aelhor6' className='twitter social-media' target='_blank'>
                               <i className="fab fa-twitter"></i>
                            </a> 
                           <a href='#' className='gmail social-media' target='_blank'>
                               <i className="fas fa-envelope"></i>
                            </a> 
                           <a href='https://www.linkedin.com/in/ahmed-elhor-55a436169/' className='linkedin social-media' target='_blank'>
                               <i className="fab fa-linkedin"></i>
                            </a> 
                           <a href='https://github.com/aelhor' className='github social-media' target='_blank'>
                               <i className='fab fa-github'></i>
                            </a> 

                        </div>
                    </Cell>
                </Grid>
             </div>
        )
    }
}
export default Resume