import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Chart from '../components/chart';
import { CPU_data, RAM_data } from '../components/data/graphData';
import { getProjectStats } from '../services/api.service';

const ProjectStatsPage = () => {
  const { id } = useParams();
  const [isCpu, setIsCpu] = useState(false);
  const [isRam, setIsRam] = useState(false);
  const [ramPoints, setRAMPoints] = useState(RAM_data);
  const [cpuPoints, setCPUPoints] = useState(CPU_data);

  const onInit = async () => {
    const { returnCPU, returnRAM } = await getProjectStats(id);
    setCPUPoints(() => returnCPU);
    setRAMPoints(() => returnRAM);
  }

  useEffect(() => {
    onInit();
    setIsCpu(true);
    setIsRam(false);
  }, [])
  return (
    <>
      <div className='project_container'>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>

            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <button className={`${isCpu ? "selected" : "list_items"}`} onClick={() => { setIsCpu(true); setIsRam(false); }}>CPU</button>
              <button className={`${isRam ? "selected" : "list_items"}`} onClick={() => { setIsRam(true); setIsCpu(false) }}>RAM</button>
            </Grid>

          </Grid>
          <Grid item lg={9} md={9} sm={10}>
            {isCpu ? <Box sx={{ height: 600, width: '100%', boxShadow: 1, marginTop: 3 }}><Chart data={cpuPoints} name="cpu" color="#3185FC" /></Box> : <></>}
            {isRam ? <Box sx={{ height: 600, width: '100%', boxShadow: 1, marginTop: 3 }}><Chart data={ramPoints} name="ram" color="#3185FC" /></Box> : <></>}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ProjectStatsPage