import { FormLabel, TextField } from "@mui/material";
const TextInput = (
    { fieldName, register, errors, variant ='outlined', placeHolder, isRequired,  maxLength, minimLength, label, disabled =false,className = "col-md-12", multiline = false, children }
) => {

    return (

        //Input field
        <div className={"form-field "+ className}>
            <div className="text-label">{label}{isRequired && '*'} </div>
            {children}
            <TextField  className="w-100 textInput"   inputProps={{ style: { height: 'inherit' } }}  disabled ={disabled} 
            multiline = {multiline}
                placeholder={placeHolder} {...register(fieldName, {
                    required: {
                        value: isRequired,
                        message: label+" is required",
                    },
                    maxLength: {
                        value: maxLength,
                        message: `Value must be maximum ${maxLength}`,
                    },
                    minLength: {
                        value: minimLength,
                        message: `Value must be minimum ${minimLength}`,
                    },
                }
                )}
            />

            <p className="error"> {

                //Shows if error exist
                errors[fieldName] && errors[fieldName].message

            } </p>
        </div>);
};

export default TextInput;