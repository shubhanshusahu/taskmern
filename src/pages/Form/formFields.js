import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/FormTextBox";
import { Button } from "@mui/material";
const FormFields = ({data,setData}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({});
  const [img, setimg] = useState(null);
  const handleFile = async (e) => {
    let fileSelected = e.target.files[0];
    console.log(fileSelected);
    setValue('img', fileSelected)
    setimg(URL.createObjectURL(fileSelected));
  };
  const onSubmit = async (dataform) => {
    console.log(dataform);
    setData((data) => [...data, dataform])
  };
  return (
    <form className="formhorizontal" onSubmit={handleSubmit(onSubmit)}>
      {img ? (
        <img src={img} className="imag" />
      ) : (
        <input
          type="file"
          id={"formImg"}
          onChange={handleFile}
          accept="image/png, image/jpeg"
        />
      )}
      <TextInput
        className="form-field textbox"
        disabled={false}
        label="Title"
        fieldName="title"
        register={register}
        errors={errors}
        placeHolder="Enter title.."
        isRequired={true}
        maxLength={70}
        minimLength={2}
      />
      <TextInput
        className="form-field textbox"
        disabled={false}
        label="Description"
        fieldName="description"
        register={register}
        errors={errors}
        placeHolder="Enter description.."
        isRequired={true}
        maxLength={70}
        minimLength={2}
      />
      <TextInput
        className="form-field textbox"
        disabled={false}
        label="Quantity"
        fieldName="qty"
        register={register}
        errors={errors}
        placeHolder="Enter qty.."
        isRequired={true}
        maxLength={70}
        minimLength={2}
      />
      <TextInput
        className="form-field textbox"
        disabled={false}
        label="Price"
        fieldName="price"
        register={register}
        errors={errors}
        placeHolder="Enter price.."
        isRequired={true}
        maxLength={70}
        minimLength={2}
      />
      <input type="date" onChange={(e) => setValue('date', e.target.value)} />
      <Button
        variant="outlined" type = "submit"
        // onClick={() => setData((data) => [...data, dummyData])}
      >
        +
      </Button>
    </form>
  );
};

export default FormFields;
