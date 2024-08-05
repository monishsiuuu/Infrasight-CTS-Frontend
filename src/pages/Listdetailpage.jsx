import React, { useEffect } from 'react'
import '../css/listdetailpage.css';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { addScheduledTask, getAllUserName, getServerDetails, provideAccessToServer, revokeAccessToSerevr } from '../services/api.service';
import swal from 'sweetalert';


const INITIAL_SERVER = {
  "id": "",
  "name": "Ubuntu-Server",
  "description": "T",
  "isActive": true,
  "serverUpTime": "18:56:09 up  3:00",
  "tasks": [
    {
      "id": "6511b4634b961753842e0bbd",
      "tittle": "Virus Scan"
    }
  ],
  "serverUsers": [
    {
      "id": "650fe8c883380048d84d8a34",
      "companyEmail": "smlogasubramani@gmail.com"
    }
  ],
  "projects": [
    {
      "id": "UNKNOWN",
      "programmingLanguage": "Java Script",
      "framework": "Node JS"
    }
  ]
};

const INITIAL_TASK = {
  "serverId": "",
  "tittle": "",
  "command": "l",
  "atEndOfDay": true,
  "deleteAfterExecution": true
};

const email_obj = [
  {
    id: "1",
    email: "username@gmail.com",
  },
  {
    id: "2",
    email: "user02@gmail.com"
  }
]
const title_obj = [
  {
    id: "1",
    title: "Task 1",
  },
  {
    id: "2",
    title: "Task 2"
  }
]

const Listdetailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [taskBody, setTaskBody] = React.useState(INITIAL_TASK);
  const [serverData, setServerData] = React.useState(INITIAL_SERVER);
  const [allUsers, setAllUsers] = React.useState(email_obj);
  const [IsEmail, setIsEmail] = React.useState(email_obj)
  const [IsTitle, setIsTitle] = React.useState(title_obj)
  // const emails = ['username@gmail.com', 'user02@gmail.com'];
  // const title = ['JAWAN', 'SHARUK'];
  const [shareopen, setShareOpen] = React.useState(false);
  const [formopen, setFormOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(email_obj[1]);

  const handleDeleteClick = async (email) => {
    console.log('Deleted Email ID:', email.id);
    const message = await revokeAccessToSerevr(id, email.id);
    swal("Sent!", message, "success");
  };

  const handletitleDeleteClick = (title) => {
    console.log('Deleted title ID:', title.id);
  };

  const clickopen = () => {
    setShareOpen(true);
  };

  const clickclose = (value) => {
    setShareOpen(false);
    setSelectedValue(value);
  };
  const submitopen = () => {
    setFormOpen(true);
  };

  const submitclose = (value) => {
    setFormOpen(false);

  };

  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = async (value) => {
      console.log("==", value);
      const message = await provideAccessToServer(id, value);
      swal("Sent!", message, "success");
      onClose(value);

    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Give Access To the Server</DialogTitle>
        <List sx={{ pt: 0 }}>
          {allUsers.map((email) => (
            <ListItem disableGutters key={email.id}>
              <ListItemButton onClick={() => handleListItemClick(email.companyEmail)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email.companyEmail} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick('addAccount')}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  // FORM DIALOGUE BOX

  function FormDialog(props) {
    const { onClose, selectedValue, open } = props;
    //   const [open, setOpen] = React.useState(false);

    const handlesubmitClose = () => {
      onClose(selectedValue);
    };

    const handlesubmit = (value) => {
      console.log(value);
      onClose(value);

    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const handleTaskSubmit = async (e) => {
      e.preventDefault();
      try {
        taskBody.serverId = id;
        setTaskBody(() => taskBody);
        console.log(taskBody);
        const data = await addScheduledTask(taskBody);
        swal("Connected", data || "Added.", "success");
      } catch (e) {
        console.log(e);
      }
    }

    const handleChangeTask = (e) => {
      const { name, value } = e.target;
      setTaskBody((prev) => ({ ...prev, [name]: value }));
    }

    return (
      <div>
        <Dialog open={open} onClose={handlesubmitClose}>
          <DialogTitle>Check server</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              name="tittle"
              value={taskBody.tittle}
              onChange={handleChangeTask}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Command"
              type="text"
              fullWidth
              variant="standard"
              name="command"
              value={taskBody.command}
              onChange={handleChangeTask}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Timeline</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="atEndOfDay"
                  value={taskBody.atEndOfDay}
                  onChange={handleChangeTask}
                >
                  <MenuItem value={false}>Start of the day</MenuItem>
                  <MenuItem value={true}>End of the day</MenuItem>
                </Select>
              </FormControl>
            </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={handlesubmitClose}>Cancel</Button>
            <Button onClick={handlesubmitClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const onInit = async () => {
    try {
      const details = await getServerDetails(id);
      setServerData(() => details);
      console.log(details["tasks"]);
      setIsTitle(() => details["tasks"]);
      setIsEmail(() => details["serverUsers"]);
      const allusersRes = await getAllUserName();
      setAllUsers(() => allusersRes);
      console.log(details);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className='detail-title'>Server Detail Page</h1>
          <p className='detail-subtitle'>A detailed info of your server!</p>
        </div>
        <div className="listdetail-box">
          <div className="row">
            <div className="col-md-2"></div>
            <div id='partition-left' className="col-md-4">
              <p>Name : {serverData.name}</p>
              <p>Description : {serverData.description}</p>
            </div>
            <div id='partition-right' className="col-md-4">
              <p>Cost  : Rs. 93983</p>
              <p>Uptime : {serverData.serverUpTime} </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col">
              <button className='detail-add-button' onClick={() => { navigate(`/chart/${id}`) }}>Chart</button>
              <FormDialog selectedValue={selectedValue}
                open={formopen}
                onClose={submitclose}
              />
            </div>
            <div className="col">
              <button className='detail-add-button' onClick={submitopen}>ADD</button>
              <FormDialog selectedValue={selectedValue}
                open={formopen}
                onClose={submitclose}
              />
            </div>
            <div className="col">
              <button className='detail-add-button' onClick={clickopen} >SHARE</button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={shareopen}
                onClose={clickclose}
              />
            </div>
            <div className="col">
              <button className='detail-add-button' onClick={() => { navigate(`/flow/${id}`) }}>Flow</button>
              <FormDialog selectedValue={selectedValue}
                open={formopen}
                onClose={submitclose}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>

      {/* USER ACCESS  */}
      <div className="container">
        <div className="row">
          <h1 className='detail-title'>USER ACCESS</h1>
          <p className='detail-subtitle'>Analyze the users of the server</p>
        </div>
        <div className="listdetail-box">
          <div className="row">
            <div className="col-md-2"></div>
            <div id='partition-left' className="col-md-4">
              {IsEmail.map((email) => (
                <div key={email.id}>
                  <p>{email.companyEmail}</p>
                </div>
              ))}
            </div>
            <div id='partition-right' className="col-md-4">
              {IsEmail.map((email) => (
                <div key={email.id}>
                  <p>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDeleteClick(email)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>

      {/* TASK DETAILS */}
      <div className="container">
        <div className="row">
          <h1 className='detail-title'>Task Details</h1>
          <p className='detail-subtitle'>Analyze the Scheduled task in the serer</p>
        </div>
        <div className="listdetail-box">
          <div className="row">
            <div className="col-md-2"></div>
            <div id='partition-left' className="col-md-4">
              {IsTitle.map((title) => (
                <div key={title.id}>
                  <p>{title.tittle}</p>
                </div>
              ))}
            </div>
            <div id='partition-right' className="col-md-4">
              {IsTitle.map((title) => (
                <div key={title.id}>
                  <p>
                    <button
                      className='btn btn-danger'
                      onClick={() => handletitleDeleteClick(title)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>


      {/* PROJECT DETAILS */}
      <div className="container">
        <div className="row">
          <h1 className='detail-title'>Project Details</h1>
          <p className='detail-subtitle'>Analyze the projects in the serer</p>
        </div>
        <div className="listdetail-box">
          <div className="row">
            <div className="col-md-2"></div>
            <div id='partition-left' className="col-md-4">
              {serverData["projects"].map((project) => (
                <div key={project.id} onClick={() => { navigate(`/project/${project.id}`) }} >
                  <p>{project.id != "UNKNOWN" && project.id}</p>
                </div>
              ))}
            </div>
            <div id='partition-right' className="col-md-4">
              {serverData["projects"].map((project) => (
                <div key={project.id}>
                  <p>
                    {project.id != "UNKNOWN" && project.programmingLanguage} {project.id != "UNKNOWN" && project.framework}
                  </p>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  )
}

export default Listdetailpage