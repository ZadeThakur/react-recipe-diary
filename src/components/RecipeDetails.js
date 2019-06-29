import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  detailsDiv:{
    margin:"auto",
    [theme.breakpoints.between("xs","sm")]:{
      width: "80%"
    },
    [theme.breakpoints.between("sm","md")]:{
      textAlign:"center",
      fontSize:"180%",
      paddingLeft:"3%"
    },
    [theme.breakpoints.between("md","xl")]:{
      textAlign:"center",
      fontSize:"140%",
      paddingLeft:"3%"
    }
  }
}));

const RecipeDetails = (props) =>{
  const classes = useStyles();
  var recipeNumber = props.selectedRecipe
  var fullRecipe = props.recipeDetails[recipeNumber].split(".");
  return fullRecipe.map((line) => {
    return(
    <div className={classes.detailsDiv}>
      <ul>
        <li>{line}</li>
      </ul>
    </div>
  );
  })
}

export default RecipeDetails;
