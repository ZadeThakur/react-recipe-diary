import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import AddRecipe from "./AddRecipe";
import "../css/app.css";

const useStyles = makeStyles(theme =>({
  root:{
    textAlign:"center"
  },
  button:{
    margin: theme.spacing(1),
    width: "80%"
  },
  recipeListDiv:{
    [theme.breakpoints.between("sm","md")]:{
      marginTop:"2.8%"
    },
    [theme.breakpoints.between("md","xl")]:{
      textAlign:"center",
      marginTop:"1%"
    }
  }
}));



const App = () =>{
  const classes = useStyles();
  const [recipeNames, setRecipeNames] = useState(["Alo Gobhi","Phool Gobhi"]);
  const [recipeDetails,setRecipeDetails] = useState(["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"]);
  const [selectedRecipe, setSelectedRecipe] = useState("0");
  const [addRecipeComp, setAddRecipeComp] = useState(0);

  const onRecipeClick = (term) => {
    setSelectedRecipe(term);
    setAddRecipeComp(0);
  }
  const onAddRecipeButtonClick = () =>{
    setAddRecipeComp(1);
  }
  const addingRecipe = (term1,term2) =>{
    setRecipeNames([...recipeNames, term1]);
    setRecipeDetails([...recipeDetails, term2]);
  }

  const lowerSegment = () =>{
    if(addRecipeComp === 1){
      return(
        <AddRecipe addRecipe={addingRecipe}/>
      );
    }else{
      return(
        <Grid item xs={12} sm={8} style={{textAlign:"center"}}>
          <RecipeDetails recipeDetails = {recipeDetails} selectedRecipe = {selectedRecipe}/>
        </Grid>
      );
    }
  }

    return(
      <div className = {classes.root}>
      <h1>Recipe Diary</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.recipeListDiv} >
          <RecipeList recipeNames = {recipeNames} onRecipeClick = {onRecipeClick}/>
          <Button
           variant="outlined"
           color="primary"
           className={classes.button}
           id="addRecipeButton"
           onClick={onAddRecipeButtonClick}
           >
            Add Recipe
          </Button>
        </Grid>
          {lowerSegment()}
      </Grid>
      </div>
    );
}

export default App;
