import React, { useState ,useEffect} from "react";
import { Form } from "react-bootstrap";
import { useDataContext } from "../../contexts/DataContext";

interface FilterProps {
  title: string;
}

const Filter = (props: FilterProps) => {
  const { title } = props;
  const [value, setValue] = useState("");
  const { setFilterType, setFilterValue } = useDataContext();
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  useEffect(() => {
    setFilterType(title)
    setFilterValue(value)
  }, [value,title])
  
  const getOptions = () => {
    switch (title) {
      case "By Launch Status":
        return (
          <React.Fragment>
            <option value="true">Success</option>
            <option value="false">Failed</option>
          </React.Fragment>
        );
      case "By Launch Date":
        return (
          <React.Fragment>
            <option value="1">Last Week</option>
            <option value="2">Last Month</option>
            <option value="3">Last Year</option>
          </React.Fragment>
        );

      default:
        return;
        break;
    }
  };
  return (
    <Form.Select onChange={handleOnChange}>
      <option value="">{title}</option>
      {getOptions()}
    </Form.Select>
  );
};

export default Filter;
