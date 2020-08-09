import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import history from '../utils/history';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const [search, setSearch] = useState("")


  const handleChange  = e  => {
   setSearch(e.target.value)
  }

  const handleSubmit = () =>{
      history.push(`/search/${search}`)
  }

  const handleKeyDown =(event)=> {
    if (event.keyCode === 'Enter') {
        handleSubmit()
    }
}

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      
        <InputBase
          className={classes.input}
          onChange={handleChange}
          onKeyDown = {handleKeyDown}
          placeholder="Search Product Name"
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      


    </Paper>
  );
}
