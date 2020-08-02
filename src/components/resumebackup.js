import React from 'react'
import {Icon}from 'react-mdl'

const Resume= ()=> { 
    return  (
        <div >
            <nav  className="navbar navbar-expand-lg navbar-dark bg-success  " id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">RESUME</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/dist/assets/img/profile.jpg" alt="" /></span>

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Personal Info</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container-fluid p-0">
            {/* <!-- presonal Info--> */}
                <section class="resume-section" id="about">
                    <div class="resume-section-content">
                        <h1 class="mb-0">
                            AHMED - 
                            <span class="text-success"> ELHOR</span>
                        </h1>
                        <div class="subheading mb-5">
                             Central Tala, Egypt - +20 010 9312 1745 .    
                            <a className = 'text-info' href="#">   aelhor90@gmail.com</a>
                        </div>
                        <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div class="social-icons">
                            <a target= '_blank' class="p-3 mb-2 bg-info social-icon text-white" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a target= '_blank' class="p-3 mb-2 bg-dark social-icon text-white " href="#"><i class="fab fa-github"></i></a>
                            <a target= '_blank' class="p-3 mb-2 bg-info social-icon text-white" href="#"><i class="fab fa-twitter"></i></a>
                            <a target= '_blank' class="p-3 mb-2 bg-info social-icon text-white" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a target= '_blank' class="p-3 mb-2 bg-light social-icon text-danger" href="#"><i class="fab fa-google"></i></a>


                        </div>
                    </div>
                </section>
                    {/* skills */}
                <section class="resume-section" id="skills">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Skills</h2>
                        <div class="subheading mb-3">Programming Languages and Tools</div>
                        <ul class ='list-group list-group-flush'>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Html 5</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> CSS 3</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Vanilla Java Script</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> ES6</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> React.js</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Node.js</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Express.js</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Mongo DB</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> mongoose</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> npm</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Git / Github</li>
                        </ul><br/>
                        <div class="subheading mb-3 ">Concepts</div>
                        <ul class ='list-group list-group-flush'>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> OOP</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Data Structure and Alghorithms</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Problem Solving</li>
                        </ul><br/>
                        <div class="subheading mb-3">Other Tools</div>
                        <ul class ='list-group list-group-flush'>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> python</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Open GL</li>
                            <li class="list-group-item" style={{fontSize : '20px'}}><Icon name="star" style={{fontSize : '16px', color : '#1e7e34'}}/> Photoshop / After Effects</li>
                        </ul><br/>
                        <div class="subheading mb-3">Workflow</div>
                        <ul class="fa-ul mb-0">
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Mobile-First, Responsive Design
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Cross Browser Testing and Debugging
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Cross Functional Teams
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Agile Development and Scrum
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Tanta </h3>
                            <h5>Faculity of Engineering </h5>
                            <div>Computer and Automatic control department - Web Development Track</div>
                        </div>
                    </div>  
                    <div class="flex-grow-1">
                            <h5 class="mb-0">Graduation Year </h5>
                            <div class="text-primary">june - 2022</div>
                    </div>
                </div>
            </section>
            </div>             
        </div>
    )
}

export default Resume 
 