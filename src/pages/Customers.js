import React from "react";
import Navbar from "../components/Navbar";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const columns = [
  { field: "id", headerName: "ID", width: 92 },
  {
    field: "firstName",
    headerName: "First name",
    width: 143,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 145,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company",
    width: 140,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 105,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 124,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];


const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon",company:"IBM",gender:"male", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei",company:"Microsoft",gender:"male", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime",company:"Oracle",gender:"male", age: 45 },

];



if( localStorage.getItem("Data") === null || localStorage.getItem("Data") === undefined ){
  localStorage.setItem("Data",JSON.stringify(rows))
}







const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginBottom:15,
    marginTop:15,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    
    width: 650,
    marginTop:0,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Customers() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const [state, setState] = React.useState({
    age: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.name,event.target.value)
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  function addData(){
    
    var obj = {};
    


let a = JSON.parse(localStorage.getItem("Data"))

    obj.id=a[a.length-1].id+1
    obj.lastName=state.lastname
    obj.firstName=state.firstname
    obj.company=state.company
    obj.age=state.age
    obj.gender=state.gender1


a.push(obj)
localStorage.setItem("Data",JSON.stringify(a))

    // b.push(obj)

    // localStorage.setItem("Data",JSON.stringify(b))
    setOpen(false);


  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title">Customers Add - Show </h3>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="Firstname"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={handleChange}
            />

<TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Lastname"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={handleChange}
            />

<TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="company"
              label="Company"
              name="company"
              autoComplete="company"
              autoFocus
              onChange={handleChange}
            />

<FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          name="age"
          value={state.age}
          
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
     

      </FormControl>

      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1"  onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
      <Button variant="contained" color="primary" fullWidth onClick={addData} >Save</Button> 
      <Button variant="contained" color="secondery" style={{marginTop:"15px"}} fullWidth onClick={addData} >Close</Button> 
      {/* <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
    </div>
  );
  
  if(localStorage.getItem("isLogin")==="success"){
    return (
      <div>
        <Navbar />{" "}
 
        <div
          style={{
            marginLeft: "275px",
            marginTop: "10px",
            height: 400,
            width: "70%",
          }}
        >    
          
    

      <Button onClick={handleOpen} style={{width:"33%"}}> 
      <h4>Add Customers<Tooltip title="Add" aria-label="add" >
      <Fab color="primary" className={classes.fab} >
<AddIcon />
 </Fab>
</Tooltip></h4>
 
 </Button>
     

      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
          <DataGrid
            rows={JSON.parse(localStorage.getItem("Data"))}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    );
  }
 else{
  return (
    <div>
      <Navbar />{" "}
      <div className="customers">
      <h1>Unauthorized Access</h1>
      </div>
    </div>
  );
 }
}

export default Customers;
