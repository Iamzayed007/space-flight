import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Rocket from '../Rocket/Rocket'
import { useDataContext } from '../../contexts/DataContext'
const Rockets = () => {
  const { data, loading } = useDataContext();


  return (
    <>
      <Container>
        {loading && <><span>Loading</span></>

        }
        <Row>
          {
            !loading && data && data.map((dt: object, index: number) =>
                <Col lg={4} md={6} sm={12} key={index} >
                  <Rocket rocket={dt} />
                </Col>
            )
          }
          {
            data.length <= 0 && !loading && <>
              <p>No Data Found</p>
            </>
          }

        </Row>
      </Container>
    </>
  )
}

export default Rockets