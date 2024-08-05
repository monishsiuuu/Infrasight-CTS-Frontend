import React, { useState } from 'react';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import '../css/Addserver.css';
import { addServer } from '../services/api.service';

const INITIAL_DATA = {
  "name": "",
  "description": "",
  "host": "",
  "port": "",
  "username": "",
  "password": "",
  cpuLimit: "",
  ramLimit: "",
}
const Addserverpage = () => {
  const navigate = useNavigate();

  const [sreverData, setServerData] = useState(INITIAL_DATA);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addServer(sreverData);
      swal("Connected", data || "Added.", "success");
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServerData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
        <div className="login-container1">
              <div className="login-box1">
                <h2 className="login-title1">SERVER ADDING PAGE</h2>
                 <form className="login-form1" onSubmit={handleSubmit}>
                        <div className="row">
                        <div id='loga' className="col-md-6">
                        <input id='pad-gap' type="text" placeholder="Name" name="name" value={sreverData.name} onChange={handleChange} />
                        <input id='pad-gap' type="text" placeholder="Host" name="host" value={sreverData.host} onChange={handleChange} />
                        <input id='pad-gap' type="number" placeholder="port" name="port" value={sreverData.port} onChange={handleChange} />
                        <input id='pad-gap' type="text" placeholder="Username" name="username" value={sreverData.username} onChange={handleChange} />
                        <input id='pad-gap' type="password" placeholder="Password" name="password" value={sreverData.password} onChange={handleChange} />
                       
                        </div>
                        <div id='loga' className="col-md-6">
                        <input id='pad-gap' type="number" placeholder="Cpu limit" name="cpuLimit" value={sreverData.cpuLimit} onChange={handleChange} />
                        <input id='pad-gap' type="number" placeholder="Ram limit" name="ramLimit" value={sreverData.ramLimit} onChange={handleChange} />
                        <textarea id="pad-gap" placeholder='Description' className='textarea' rows="8" cols="26" name="description" value={sreverData.description} onChange={handleChange}></textarea>
                        </div>
                        </div>

                  <button type="submit" className="login-button">
                    Add server
                  </button>
                </form>
              </div>
            </div>  
    </div>
  )
}

export default Addserverpage