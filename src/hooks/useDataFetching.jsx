import { useState, useEffect } from 'react';

function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [upcoming, setUpcoming] = useState(false);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');


let itemsPerPage =9
  useEffect(() => {
    console.log('filterType',filterType,filterValue);
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log('a');
        if (upcoming) {
          console.log('u');
         let result = jsonData.filter(dt=> dt.upcoming == true);
         setData(result);
        setTotalPages(Math.ceil(result.length / itemsPerPage));
        }
        else if (search !='') {
          console.log('s',search);
          let result = jsonData.filter(dt=> dt.mission_name.toLowerCase().includes(search.toLowerCase()));
          console.log('result',result);
          setData(result);
         setTotalPages(Math.ceil(result.length / itemsPerPage));
        }
        else if ( filterValue != '') {
          console.log('f1');
          if (filterType === "By Launch Status") {
            console.log('f2',typeof(filterValue));
            let value = null
            switch (filterValue) {
              case "true":
                console.log('f3');
                value = JSON.parse(filterValue)
                break;
              case "false":
                console.log('f3');
                value = null
                break;
            
              default:
                break;
            }
            // if (filterValue === "true") {
            //   console.log('f3');
            //   value = JSON.parse(filterValue)
           
            // } 
            // if (filterValue === "true") {
            //   console.log('f3');
            //   value = JSON.parse(filterValue)
           
            // } 
            let result = jsonData.filter(dt=> dt.launch_success == value);
            console.log('result',result);
            setData(result);
           setTotalPages(Math.ceil(result.length / itemsPerPage));
          }
       
        }
       else {
        console.log('all');
        setData(jsonData);
        setTotalPages(Math.ceil(jsonData.length / itemsPerPage));
      }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url,totalPages,currentPage,upcoming,search,filterValue,filterType]);




  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data ? data.slice(startIndex, endIndex) : [];
  return {
    data: currentData,
    loading,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
    setUpcoming,
    setSearch,
    setFilterValue,
    setFilterType
  };
}

export default useDataFetching;
