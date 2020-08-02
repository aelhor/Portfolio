import React, {Component} from 'react' 
import {Card, CardTitle, CardText, CardActions,Button } from 'react-mdl'
import { Link } from 'react-router-dom'
class Singleprojesct extends Component { 


    render() { 
        return (
            <Card shadow={6} style={{width: '320px', height: '320px', margin: 'auto', marginBottom: '50px'}}>
                <CardTitle expand style={{color: '#fff', background: `url(${this.props.imageUrl})  center / cover #46B6AC`}}>{this.props.projectName}</CardTitle>
                <CardText style={{fontSize:"16px"}}>
                    {this.props.description}
                </CardText>
                <CardActions border>
                   <a target='_blank' href={`${this.props.githubUrl}`}><Button colored>Github</Button></a> 
                   <a target='_blank' href={`${this.props.link}`}><Button colored>Link</Button></a> 
                </CardActions>
            </Card>
        )
    }
}
export default Singleprojesct  