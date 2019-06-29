import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
  button: {
    margin: theme.spacing(1),
    width: "80%"
  },
  buttonDiv:{
    [theme.breakpoints.between("xs","sm")]:{
      textAlign:"center",
    },
    [theme.breakpoints.between("sm","md")]:{
      textAlign:"center",
    },
  }
}));


const RecipeList = (props) =>{

  const onButtonClick = (event) =>{
    //props.onRecipeClick(event.target.name);
    props.onRecipeClick(event.currentTarget.name);
  }

  const classes = useStyles();

  var recipeNumber = "-1";
  return props.recipeNames.map((recipeName) =>{
      recipeNumber = parseInt(recipeNumber, 10);
      recipeNumber = recipeNumber +1;
      recipeNumber = recipeNumber.toString();
    return(
      <div  className={classes.buttonDiv}>
      <Button
       variant="outlined"
       color="primary"
       className={classes.button}
       onClick={onButtonClick}
       name={recipeNumber}

       >
        {recipeName}
      </Button>
      </div>
    );
  })
}

export default RecipeList;
