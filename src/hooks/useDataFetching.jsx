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
    async function fetchData() {
      try {
        const response = await fetch("https://api.spacexdata.com/v3/launches");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
     
        if (upcoming) {
          setLoading(true);
         let result = jsonData.filter(dt=> dt.upcoming == true);
         setData(result);
        setTotalPages(Math.ceil(result.length / itemsPerPage));
        }
        else if (search !='') {
          setLoading(true);
          let result = jsonData.filter(dt=> dt.mission_name.toLowerCase().includes(search.toLowerCase()));
          setData(result);
         setTotalPages(Math.ceil(result.length / itemsPerPage));
        }
        else if ( filterValue != '') {
          setLoading(true);
          if (filterType === "By Launch Status") {
            let value = null
            switch (filterValue) {
              case "true":
                value = JSON.parse(filterValue)
                break;
              case "false":
                value =  JSON.parse(filterValue)
                break;
            
              default:
                break;
            }
            let result = jsonData.filter(dt=> dt.launch_success == value);
            setData(result);
           setTotalPages(Math.ceil(result.length / itemsPerPage));
          }
          if (filterType === "By Launch Date") {
            setLoading(true);
            const today = new Date();
            switch (filterValue) {
              case "1":
                today.setDate(today.getDate() - 7);
                break;
              case "2":
                today.setMonth(today.getMonth() - 1);
                break;
              case "3":
                today.setFullYear(today.getFullYear() - 1);
                break;
            
              default:
                break;
            }
            let result = jsonData.filter(dt=> dt.launch_date_utc >= today.toISOString());
            setData(result);
           setTotalPages(Math.ceil(result.length / itemsPerPage));
          }
       
        }
       else {
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
  }, [url,totalPages,currentPage,upcoming,search,filterValue,filterType,itemsPerPage]);




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
