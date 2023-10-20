import React from 'react'
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import './Rocket.scss'


interface RocketProps{

}
const Rocket = (props:RocketProps) => {
  const {links,launch_date_utc,mission_name,rocket,launch_success}= props.rocket
  // console.log('rocket',props.rocket);
  let launchStatusBg = launch_success ? 	'#008000' :'#F11242' ;
  return (
    <>
        <Card  className='my-2 text-center cardSection'>
      <Card.Img variant="top"  src={links?.mission_patch} />
      <Card.Body>
      <Card.Text>
        Launch Date: {moment(launch_date_utc).format("D MMM YYYY")}
      </Card.Text>
        <Card.Title className='text-center'>{mission_name}</Card.Title>
        <Card.Text>
          {rocket.rocket_name}
        </Card.Text>
        <Card.Text>
         <h6> 
         <span className='d-block mb-2'>

         Launch Status: 
         </span>
         <span className='mt-3' style={{backgroundColor: launchStatusBg , color: 'white', padding: '3px' ,borderRadius: '5px'}}>
         {launch_success? "success" : "Failed"}
          </span>  
          </h6> 
        </Card.Text>
       
      </Card.Body>
    </Card>
      </>
  )
}

export default Rocket