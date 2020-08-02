import React , {Component} from 'react'
import SingleProject from './singleproject'
import projects from '../projectsInfo/projectsInfo'


class Portfolio extends Component {
    render(){
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Here are some of my work</h3>
                        </div>
                    </div>
                    <div className="row">
                        {projects.map((project, i)=>{
                        return <SingleProject key={i} {...project} />})}
                    </div>
                    <br/>
                </div>
            </section>
        )
    }
}

        
        
export default Portfolio 
 