import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Last Name"
          defaultValue=""
        />
        <TextField
          id="outlined-password-input"
          label="DOB"
          defaultValue="dd-mm-yyy"
        />
        <TextField
          id="outlined-read-only-input"
          label="Phone No."
          defaultValue=""
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
         
        />
        <TextField id="outlined-search" label="Doctor ID" type="search" />
        <TextField
          id="outlined-helperText"
          label="Blood group"
          defaultValue=""
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Email"
          
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="phone no"
          defaultValue=""
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="country"
    
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="State"
          defaultValue=""
         
          variant="filled"
        />
        
        <TextField
          id="filled-search"
          label="city"
          
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="pincode"
          type="number"
          
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
     
    </Box>
  );
}
