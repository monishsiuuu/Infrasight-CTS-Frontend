import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import { useParams } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Dialog, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material'
import Chart from '../components/chart';
import { CPU_data, Disk_columns, Disk_rows, IO_columns, IO_rows, Load_data, RAM_data, Swap_data } from '../components/data/graphData';
import '../styles/index.css'
import { getOneMonth, getServer, getTodaysDate, getRAMCPUPoints, runSecuryCheck, executeCommand } from '../services/api.service';
import Loading from '../components/loading';
import PropTypes from 'prop-types'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ListToParagraphs from '../components/ListToParagraphs';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function FilterDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
        DateFormatter(fromvalue);
        DateFormatter(tovalue);
    };
    const [fromvalue, setFromValue] = useState(dayjs('2022-04-17T15:30'));
    const [tovalue, setToValue] = useState(dayjs('2022-04-17T15:30'));

    return (

        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>Select Date and time</DialogTitle>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <h6 className='dialog_heading'>From:</h6>
                    <DateTimePicker
                        value={fromvalue}
                        onChange={(newValue) => setFromValue(newValue)}
                    />
                    <h6 className='dialog_heading'>To:</h6>
                    <DateTimePicker
                        value={tovalue}
                        onChange={(newValue) => setToValue(newValue)}
                    />

                </DemoContainer>
            </LocalizationProvider>
            <Button variant="contained" onClick={handleClose} sx={{ background: "#3185FC" }} endIcon={<FilterAltIcon />}>Filter</Button>
        </Dialog>
    );
}

function DateFormatter(props) {
    const year = props.$y;
    const month = String(props.$M + 1).padStart(2, '0'); // Month is 0-based
    const day = String(props.$D).padStart(2, '0');
    const hours = String(props.$H).padStart(2, '0');
    const minutes = String(props.$m).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    console.log(formattedDate);

}
// FilterDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

const SERVER_DATA = {
    "name": "Ubuntu-Serve",
    "description": "This is an ubuntu containmer running in Docker.",
    "host": "localhost",
    "isActive": true,
    "ramCPU": [
        {
            "availableRam": 7170508,
            "totalRam": 8039920,
            "cpuPerformance": 0.25,
            "capturedAt": "2023-09-15T11:06:50.101"
        },
        {
            "availableRam": 7170028,
            "totalRam": 8039920,
            "cpuPerformance": 0.5,
            "capturedAt": "2023-09-15T11:12:25.843"
        },
        {
            "availableRam": 7166976,
            "totalRam": 8039920,
            "cpuPerformance": 0.74,
            "capturedAt": "2023-09-15T11:17:24.153"
        },
        {
            "availableRam": 7176856,
            "totalRam": 8039920,
            "cpuPerformance": 1.75,
            "capturedAt": "2023-09-16T18:56:25.520"
        },
        {
            "availableRam": 7172852,
            "totalRam": 8039920,
            "cpuPerformance": 0.0,
            "capturedAt": "2023-09-16T19:01:21.596"
        },
        {
            "availableRam": 7168600,
            "totalRam": 8039920,
            "cpuPerformance": 1.0,
            "capturedAt": "2023-09-16T19:06:29.120"
        },
        {
            "availableRam": 7177040,
            "totalRam": 8039920,
            "cpuPerformance": 1.0,
            "capturedAt": "2023-09-22T13:29:23.821"
        },
        {
            "availableRam": 7173072,
            "totalRam": 8039920,
            "cpuPerformance": 0.75,
            "capturedAt": "2023-09-22T13:34:19.202"
        },
        {
            "availableRam": 7167568,
            "totalRam": 8039920,
            "cpuPerformance": 1.25,
            "capturedAt": "2023-09-22T13:39:27.527"
        },
        {
            "availableRam": 7164308,
            "totalRam": 8039920,
            "cpuPerformance": 0.5,
            "capturedAt": "2023-09-22T13:44:35.973"
        },
        {
            "availableRam": 7161392,
            "totalRam": 8039920,
            "cpuPerformance": 1.02,
            "capturedAt": "2023-09-22T13:49:44.540"
        },
        {
            "availableRam": 7158044,
            "totalRam": 8039920,
            "cpuPerformance": 0.75,
            "capturedAt": "2023-09-22T13:54:52.886"
        },
        {
            "availableRam": 7154060,
            "totalRam": 8039920,
            "cpuPerformance": 0.25,
            "capturedAt": "2023-09-22T14:00:01.316"
        },
        {
            "availableRam": 7150628,
            "totalRam": 8039920,
            "cpuPerformance": 0.25,
            "capturedAt": "2023-09-22T14:05:33.354"
        },
        {
            "availableRam": 7149304,
            "totalRam": 8039920,
            "cpuPerformance": 0.75,
            "capturedAt": "2023-09-22T14:10:41.441"
        },
        {
            "availableRam": 7145940,
            "totalRam": 8039920,
            "cpuPerformance": 0.25,
            "capturedAt": "2023-09-22T14:15:49.496"
        },
        {
            "availableRam": 7141932,
            "totalRam": 8039920,
            "cpuPerformance": 0.76,
            "capturedAt": "2023-09-22T14:20:57.633"
        },
        {
            "availableRam": 7138296,
            "totalRam": 8039920,
            "cpuPerformance": 0.0,
            "capturedAt": "2023-09-22T14:26:05.706"
        }
    ],
    "discStats": [
        {
            "discMounts": [
                {
                    "fileSystem": "tmpfs",
                    "used": "0",
                    "use": "0%",
                    "available": "68M",
                    "size": "68M"
                },
                {
                    "fileSystem": "tmpfs",
                    "used": "0",
                    "use": "0%",
                    "available": "4.2G",
                    "size": "4.2G"
                },
                {
                    "fileSystem": "shm",
                    "used": "0",
                    "use": "0%",
                    "available": "68M",
                    "size": "68M"
                },
                {
                    "fileSystem": "/dev/vda1",
                    "used": "51G",
                    "use": "86%",
                    "available": "8.9G",
                    "size": "63G"
                },
                {
                    "fileSystem": "overlay",
                    "used": "51G",
                    "use": "86%",
                    "available": "8.9G",
                    "size": "63G"
                }
            ],
            "capturedAt": "2023-09-15"
        },
        {
            "discMounts": [
                {
                    "fileSystem": "tmpfs",
                    "used": "0",
                    "use": "0%",
                    "available": "68M",
                    "size": "68M"
                },
                {
                    "fileSystem": "tmpfs",
                    "used": "0",
                    "use": "0%",
                    "available": "4.2G",
                    "size": "4.2G"
                },
                {
                    "fileSystem": "shm",
                    "used": "0",
                    "use": "0%",
                    "available": "68M",
                    "size": "68M"
                },
                {
                    "fileSystem": "/dev/vda1",
                    "used": "51G",
                    "use": "86%",
                    "available": "8.9G",
                    "size": "63G"
                },
                {
                    "fileSystem": "overlay",
                    "used": "51G",
                    "use": "86%",
                    "available": "8.9G",
                    "size": "63G"
                }
            ],
            "capturedAt": "2023-09-16"
        },
        {
            "discMounts": [
                {
                    "fileSystem": "tmpfs",
                    "used": "0",
                    "use": "0%",
                    "available": "68M",
                    "size": "68M"
                },
                {
                    "fileSystem": "tmpfs",
                    "used": "0",
                    "use": "0%",
                    "available": "4.2G",
                    "size": "4.2G"
                },
                {
                    "fileSystem": "shm",
                    "used": "0",
                    "use": "0%",
                    "available": "68M",
                    "size": "68M"
                },
                {
                    "fileSystem": "/dev/vda1",
                    "used": "51G",
                    "use": "86%",
                    "available": "8.9G",
                    "size": "63G"
                },
                {
                    "fileSystem": "overlay",
                    "used": "51G",
                    "use": "86%",
                    "available": "8.9G",
                    "size": "63G"
                }
            ],
            "capturedAt": "2023-09-22"
        }
    ]
};

const Charts = () => {
    const { id } = useParams();

    const [columnVisibilityModel, setColumnVisibilityModel] = useState({
        id: false,
    });
    const [isCpu, setCpu] = useState(true);
    const [isRam, setRam] = useState(false);
    const [isDisk, setDisk] = useState(false);
    const [isIO, setIO] = useState(false);
    const [isSwap, setSwap] = useState(false);
    const [isLoad, setLoad] = useState(false);
    const [isSecCheck, setSecCheck] = useState(false);
    const [isConsole, setConsole] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const [server, setServer] = useState(SERVER_DATA);
    const [disc, setDisc] = useState(Disk_rows);
    const [io, setio] = useState(IO_rows);
    const [ramPoints, setRAMPoints] = useState(RAM_data);
    const [cpuPoints, setCPUPoints] = useState(CPU_data);
    const [loadPoints, setLoadPoints] = useState(Load_data);
    const [swapPoints, setSwapPoints] = useState(Swap_data);
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const [consoleData, setConsoleData] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']);
    const [securityCheckdata, SetSecurityCheckData] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']);

    const [command, setCommand] = useState("free -m");

    const onInit = async () => {
        try {
            setLoading(() => true);
            const today = getTodaysDate();
            const oneMonthBefore = getOneMonth(today);
            const serverData = await getServer(id, `${oneMonthBefore}T00:00`, `${today}T00:00`);
            setServer(() => (serverData));
            setDisc(() => {
                try {
                    return serverData["discStats"][serverData["discStats"].length - 1].discMounts.map(stst => { stst["id"] = stst["fileSystem"]; return stst; });
                } catch (e) {
                    return [];
                }
            });

            const { ramReturn, cpuReturn, loadReturn, swapReturn } = getRAMCPUPoints(serverData);
            setCPUPoints(() => cpuReturn);
            setRAMPoints(() => ramReturn);
            // const ioData = await runSecuryCheck(id);
            const allIOStats = serverData["ioStats"];
            if (allIOStats[allIOStats.length - 1])
                setio(() => allIOStats[allIOStats.length - 1]["ioDatas"].map(io => {
                    io["id"] = io["device"];
                    return io;
                }));
            else
                setio(() => IO_rows);
            setLoadPoints(() => loadReturn);
            setSwapPoints(() => swapReturn);
            console.log("serverData: ", swapReturn);
        } catch (e) {
            console.log("error: ", e);
        } finally {
            setLoading(() => false);
        }
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const runSecurityCheck = async () => {
        swal("Running!", "Wait for check to complete!", "success");
        const data = await runSecuryCheck(id);
        console.log("data: ", data);
        SetSecurityCheckData(() => data);
    }

    const runConsoleCommand = async () => {
        const data = await executeCommand(id, command);
        setConsoleData(() => data);
    }

    useEffect(() => {
        onInit();
        setLoad(false);
        setIO(false);
        setSwap(false);
        setSecCheck(false)
        setCpu(true);
        setDisk(false);
        setRam(false);
        setConsole(false);
    }, [])

    return (
        <>{isLoading ? <Loading /> : <div className="chart-back">
            <Grid
                container
                direction="row"
                justifyContent="center"
            >
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginTop: "3rem" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item ><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    {"" + server["maxCPUUsed"]}
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    CPU Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                        <Grid item><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    {"" + server["maxRAMUsed"]}
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    RAM Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                        <Grid item><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    {"" + server["maxDisc"]}
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    DISK Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                        <Grid item><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    {server.isActive ? "Active" : "Stopped"}
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    Is Active and Running
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: 5 }}
                    >
                        <Grid item sm={10} md={10} lg={10}>

                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item lg={2} md={2} sm={10}>

                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="space-around"
                                    >

                                        <Grid item><button className={`${isCpu ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setCpu(true);
                                                setDisk(false);
                                                setRam(false);
                                                setLoad(false);
                                                setIO(false);
                                                setSwap(false);
                                                setSecCheck(false);
                                                setConsole(false);
                                            }}
                                        >CPU</button></Grid>
                                        <Grid item><button className={`${isDisk ? "selected" : "list_items"}`} onClick={() => {
                                            setCpu(false);
                                            setDisk(true);
                                            setRam(false);
                                            setLoad(false);
                                            setIO(false);
                                            setSwap(false);
                                            setSecCheck(false);
                                            setConsole(false);
                                        }}>DISK</button></Grid>
                                        <Grid item><button className={`${isRam ? "selected" : "list_items"}`} onClick={() => {
                                            setCpu(false);
                                            setDisk(false);
                                            setRam(true);
                                            setLoad(false);
                                            setIO(false);
                                            setSwap(false);
                                            setSecCheck(false);
                                            setConsole(false);
                                        }}>RAM</button>
                                        </Grid>
                                        <Grid item><button className={`${isIO ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setLoad(false);
                                                setIO(true);
                                                setSwap(false);
                                                setSecCheck(false);
                                                setCpu(false);
                                                setDisk(false);
                                                setRam(false);
                                                setConsole(false);
                                            }}
                                        >I/O</button></Grid>
                                        <Grid item><button className={`${isLoad ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setLoad(true);
                                                setIO(false);
                                                setSwap(false);
                                                setSecCheck(false);
                                                setCpu(false);
                                                setDisk(false);
                                                setRam(false);
                                                setConsole(false);
                                            }}
                                        >LOAD</button></Grid>
                                        <Grid item><button className={`${isSwap ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setLoad(false);
                                                setIO(false);
                                                setSwap(true);
                                                setSecCheck(false);
                                                setCpu(false);
                                                setDisk(false);
                                                setRam(false);
                                                setConsole(false);
                                            }}
                                        >SWAP MEMORY</button></Grid>
                                        <Grid item><button className={`${isSecCheck ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setLoad(false);
                                                setIO(false);
                                                setSwap(false);
                                                setSecCheck(true);
                                                setCpu(false);
                                                setDisk(false);
                                                setRam(false);
                                                setConsole(false);
                                                runSecurityCheck();
                                            }}
                                        >SECURITY CHECK</button></Grid>
                                        <Grid item><button className={`${isConsole ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setLoad(false);
                                                setIO(false);
                                                setSwap(false);
                                                setSecCheck(false);
                                                setCpu(false);
                                                setDisk(false);
                                                setRam(false);
                                                setConsole(true);
                                            }}
                                        >CONSOLE</button></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={9} md={9} sm={10}>

                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="center"
                                    >

                                        <div className='filter_container'>
                                            <Button variant="contained" onClick={handleClickOpen} sx={{ background: "#3185FC" }} endIcon={<FilterAltIcon />}>Filter</Button>
                                            <FilterDialog
                                                selectedValue={selectedValue}
                                                open={open}
                                                onClose={handleClose}
                                            />
                                        </div>
                                    </Grid>
                                    {isCpu ? <Chart data={cpuPoints} name="cpu" color="#3185FC" /> : <></>}
                                    {isDisk ? <Box sx={{ height: 600, width: '100%', boxShadow: 1, marginTop: 3 }}>
                                        <DataGrid
                                            sx={{ color: "#fff" }}
                                            rows={disc}
                                            columns={Disk_columns}
                                            columnVisibilityModel={columnVisibilityModel}
                                            initialState={{
                                                pagination: {
                                                    paginationModel: {
                                                        pageSize: 10,
                                                    },
                                                },
                                            }}
                                            pageSizeOptions={[5]}

                                            disableRowSelectionOnClick
                                        />
                                    </Box> : <></>}
                                    {isRam ? <Chart data={ramPoints} name="ram" color="#3185FC" /> : <></>}
                                    {isLoad ? <Chart data={loadPoints} name="load" color="#3185FC" /> : <></>}
                                    {isSwap ? <Chart data={swapPoints} name="swap" color="#3185FC" /> : <></>}
                                    {isIO ? <Box sx={{ height: 600, width: '100%', boxShadow: 1, marginTop: 3 }}>
                                        <DataGrid
                                            sx={{ color: "#fff" }}
                                            rows={io}
                                            columns={IO_columns}
                                            columnVisibilityModel={columnVisibilityModel}
                                            initialState={{
                                                pagination: {
                                                    paginationModel: {
                                                        pageSize: 10,
                                                    },
                                                },
                                            }}
                                            pageSizeOptions={[5]}

                                            disableRowSelectionOnClick
                                        />
                                    </Box> : <></>}
                                    {isConsole ? <Box sx={{ height: 600, width: '100%', boxShadow: 1, marginTop: 5, background: "grey" }}>


                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Grid item md={11} lg={11} sm={12}>
                                                <TextField label="Command" onChange={(e) => { setCommand(e.target.value) }} fullWidth />
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Grid item md={11} lg={11} sm={12}>
                                                <div className='console_output'>
                                                    <ListToParagraphs items={consoleData} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Grid item md={11} lg={11} sm={12}>
                                                <div className='console_btn'><Button variant="contained" onClick={() => runConsoleCommand()} >Execute</Button></div>

                                            </Grid>
                                        </Grid>
                                    </Box> : <></>}
                                    {isSecCheck ? <Box sx={{ height: 600, width: '100%', boxShadow: 1, marginTop: 5, background: "grey" }}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Grid item md={11} lg={11} sm={12}>
                                                <div className='console_output'>
                                                    <ListToParagraphs items={securityCheckdata} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Box> : <></>}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Grid item><button className="nav-btn">Back</button></Grid>
                <Grid item><button className="nav-btn">Next</button></Grid>
            </Grid>
        </div>}
        </>

    )
}

export default Charts