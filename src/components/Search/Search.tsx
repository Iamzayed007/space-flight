import React,{useState,useEffect} from "react";
import "./Search.scss";
import { InputGroup, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {useDataContext} from '../../contexts/DataContext'
const Search = () => {
  const {setSearch} = useDataContext()
  const [value,setValue] = useState('')
  const handleOnChange =(e)=>{
    setValue(e.target.value)
    console.log(e.target.value);
    
  }
  useEffect(() => {
    setSearch(value)
  }, [value])
  
  return (
    <div className="search">
      <Form>
        <Form.Group as={Row}>
          <InputGroup>
            <Form.Control type="text" placeholder="Search here" onChange={handleOnChange} />

            <InputGroup.Text className="searchIcon" >
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
