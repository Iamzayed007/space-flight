import React from 'react'
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import './Rocket.scss'


interface RocketProps{
  rocket: {
    links: {
      mission_patch: string,
    },
    launch_date_utc: string,
    mission_name: string,
    launch_success: boolean,
    rocket: {
      rocket_name: string
    }
  }
}
const Rocket = (props:RocketProps) => {
  const {links,launch_date_utc,mission_name,rocket,launch_success}= props.rocket

  const launchStatusBg = launch_success ? 	'#008000' :( launch_success == false ? '#F11242': '#0096FF') ;
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
         <span className='d-block mb-2'>

         Launch Status: 
         </span>
         <span className='mt-3' style={{backgroundColor: launchStatusBg , color: 'white', padding: '3px' ,borderRadius: '5px'}}>
         {launch_success? "success" : (launch_success == false ? "Failed" : "Upcoming")}
          </span>  
        </Card.Text>
       
      </Card.Body>
    </Card>
      </>
  )
}

export default Rocket