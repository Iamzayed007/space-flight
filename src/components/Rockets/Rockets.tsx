import React, { useEffect } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Rocket from '../Rocket/Rocket'
import useDataFetching from '../../hooks/useDataFetching'
import {useDataContext} from '../../contexts/DataContext'
const Rockets = () => {
    const { data, loading, error } = useDataContext();
    // console.log('data', data);
    
  return (
    <>
    <Container>
        {loading && <><span>Loading</span></>

        }
         <Row> 
        {
            !loading &&  data && data.map((dt,index:any)=>
            
            <>
            {/* <Row> */}
            <Col lg={4} md={6} sm={12}  >
            <Rocket key={index} rocket={dt}/>
            </Col>
            {/* </Row> */}
           
            </>
            ) 
        }
     {/* <Rocket/> */}
     </Row> 
    </Container>
    </>
  )
}

export default Rockets