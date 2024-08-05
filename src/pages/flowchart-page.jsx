import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFlow from '../components/flowchart'
import { getServerProject } from '../services/api.service';

const SERVER_DATA = {
  "id": "",
  "name": "Ubuntu-Server",
  "isActive": true,
  "projects": [
    {
      "id": "UNKNOWN",
      "programmingLanguage": "Java Script",
      "framework": "Node JS",
      "ramCpuStats": [
        {
          "cpuPerformance": 0.0,
          "ramPerformance": 0.0,
          "capturedAt": "2023-09-26T02:43:23.687"
        }
      ]
    }
  ]
};

const Flowchart = () => {
  const { id } = useParams();
  const [serverData, setServerData] = useState(SERVER_DATA);

  const onInit = async () => {
    try {
      const data = await getServerProject(id);
      setServerData(() => data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="flowchart"><LayoutFlow server={serverData} /></div>
  )
}

export default Flowchart