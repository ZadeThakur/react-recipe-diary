import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textField:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "80%",
  },
  button: {
    margin:theme.spacing(1),
  }
}));




const AddRecipe = (props) =>{

  const classes = useStyles();

  const onSubmit = () =>{
    var term1 = document.querySelector("#nameField").value;
    var term2 = document.querySelector("#detailsField").value;
    props.addRecipe(term1,term2);
  }

  return(
    <Grid item xs={12} sm = {8}>
    <TextField
      id="outlined-name"
      label="Enter Recipe Name"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      id="nameField"
    />

    <TextField
      id="outlined-multiline-static"
      label="Multiline"
      multiline
      rows="10"
      label="Enter Recipe details"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      id="detailsField"
    />
    <br></br>
    <Button
     variant="outlined"
     color="primary"
     className={classes.button}
     onClick={onSubmit}
     >
      Submit Recipe
    </Button>
    </Grid>
  );
}

export default AddRecipe;
