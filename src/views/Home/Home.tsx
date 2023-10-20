import React,{useState,useEffect} from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import Filter from "../../components/Filter/Filter";
import Rockets from "../../components/Rockets/Rockets";
import Pagination from "../../components/Pagination/Pagination";
import { useDataContext } from '../../contexts/DataContext';
const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {setUpcoming} = useDataContext()
  const handleUpcomming = (e) =>{
    setIsChecked(e.target.checked)
  
console.log(isChecked);

  }

  useEffect(() => {
    setUpcoming(isChecked)
  }, [isChecked])
  
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={6} className="my-3 pt-4">
            <Search />
          </Col>
          <Col>

            <Col className="checkBox">
              <input type="checkbox" checked={isChecked} onChange={handleUpcomming}/>
              <span className="mx-3">Show Upcoming only</span>
            </Col>

            <Col className="my-3">
              <Row>
                <Col sm={12} md={6}>
                  {/* <Search /> */}
                  <Filter title="By Launch Status"/>
                </Col>
                <Col sm={12} md={6}>
                <Filter title="By Launch Date"/>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
      <Rockets/>
      <Pagination/>
    </>
  );
};

export default Home;
