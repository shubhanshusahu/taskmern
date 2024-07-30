import React, { useState } from "react";
import FormFields from "./formFields";
import { Button } from "@mui/material";
import { PostReq } from "../../api";

const FormFilling = () => {
  const [data, setData] = useState([]);
  const [rowCount, setrowCount] = useState(1);
  const dummyData = {
    title: "",
    description: "",
    price: "",
    qty: "",
    date: "",
  };
  const handleSave = async () => {
    const formData = new FormData();
    console.log(data, "to be sent");
    formData.append("data", JSON.stringify(data));

    data.forEach((rec) => {
      formData.append("image", rec.img);
    });

    const res = await PostReq("/form/save", formData);
    console.log(res);
    alert('Data submitted!')
  };
  return (
    <div className="row">
      <FormFields data={data} setData={setData} />

      {data.map((record, index) => (
        <>
          <FormFields data={data} setData={setData} />
          <Button
            variant="outlined"
            onClick={() =>
              setData((data) => data.filter((item, i) => i !== index))
            }
          >
            -
          </Button>{" "}
        </>
      ))}
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default FormFilling;
