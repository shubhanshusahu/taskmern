import React, { useEffect, useState } from "react";
import { base, GetReq } from "../../api";
import TextInput from "../../components/FormTextBox";
import { Button, TextField } from "@mui/material";

const List = () => {
  const [formRecords, setformRecords] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  const [search, setsearch] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const getData = async () => {
    const result = await GetReq("/form/display");
    setformRecords(result.data.data);
    setfilteredData(result.data.data);
    console.log(result);
  };
  const filterData = async () => {
    if (search === "") {
      setfilteredData(formRecords);
    } else {
      setfilteredData(formRecords.filter((rec) => rec.title.includes(search)));
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    filterData(search);
  }, [search]);

  const handleDateSearch = () => {
    if(startDate!=="" && endDate !== ""){
      setfilteredData(formRecords.filter((rec) => rec.date < endDate && rec.date > startDate));

    }
    else{
      alert('select start date and end date to search!')
    }
  };

  const Reset = ()=>{
    setfilteredData(formRecords)
    setstartDate("")
    setendDate("")
    setsearch("")
  }
  return (
    <div>
      <TextField
        onChange={(e) => setsearch(e.target.value)}
        value={search}
        placeholder="Start Searching Titles.."
      />
      <input
        type="date"
        onChange={(e) => setstartDate(e.target.value)}
        value={startDate}
      />
      <Button onClick={handleDateSearch}>Search in Date Range</Button>
      <input
        type="date"
        onChange={(e) => setendDate(e.target.value)}
        value={endDate}
      />
<Button onClick={Reset}>Clear Filters</Button>
      {filteredData.length > 0 &&
        filteredData.map((record) => (
          <div className="displayCard">
            <img src={base + "/uploads/" + record.img} className="imag" />
            <div className="insideText">
              <h4>{record.title}</h4>
              <div style={{ fontSize: "20px", marginBottom: "2px" }}>
                {record.description}
              </div>
              <span>
                Price: &#8377;{record.price}, Quantity: {record.qty} Date:{" "}
                {record.date.split("").splice(0, 10).join("")}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
