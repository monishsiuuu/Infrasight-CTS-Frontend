export const CPU_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        cpu: 80,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        cpu: 100,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        cpu: 70,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        cpu: 10,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        cpu: 20,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        cpu: 40,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        cpu: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        cpu: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        cpu: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        cpu: 100,
    },
];
export const Disk_columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    {
        field: 'fileSystem',
        headerName: 'File System',
        width: 150,
        flex:1,
        type:'text',
        // align: "center",
        // colSpan: 2,
        // editable: true,
    },
    {
        field: 'size',
        headerName: 'Size',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center",
        // editable: true,
    },
    {
        field: 'used',
        headerName: 'Used',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center"
        // editable: true,
    },
    {
        field: 'available',
        headerName: 'Avail',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center"
        // editable: true,
    },
    {
        field: 'use',
        headerName: 'Use %',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center",
        // editable: true,
    },
    // {
    //     field: 'used',
    //     headerName: 'Used',
    //     type: 'number',
    //     width: 200,
    //     editable: true,
    // },

    {
        field: 'mountedOn',
        headerName: 'Mounted On',
        width: 150,
        // align: "center",
        type: 'text',
        // colSpan: 2,
        flex: 1,
        // editable: true,
    },

];

export const Disk_rows = [
    { id: 1, filesystem: 'Project1', size: 10, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 2, filesystem: 'Project2', size: 20, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 3, filesystem: 'Project3', size: 30, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 4, filesystem: 'Project4', size: 40, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 5, filesystem: 'Project5', size: 50, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 6, filesystem: 'Project6', size: 60, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 7, filesystem: 'Project7', size: 70, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 8, filesystem: 'Project8', size: 80, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 9, filesystem: 'Project9', size: 90, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },

];
export const DISK_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        disk: 25,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        disk: 45,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        disk: 33,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        disk: 50,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        disk: 75,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        disk: 20,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        disk: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        disk: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        disk: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        disk: 100,
    },
];

export const RAM_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        ram: 25,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        ram: 45,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        ram: 33,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        ram: 50,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        ram: 75,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        ram: 20,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        ram: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        ram: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        ram: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        ram: 70,
    },
];
export const Load_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        load: 25,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        load: 45,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        load: 33,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        load: 50,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        load: 75,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        load: 20,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        load: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        load: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        load: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        load: 70,
    },
];
export const Swap_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        swap: 25,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        swap: 45,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        swap: 33,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        swap: 50,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        swap: 75,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        swap: 20,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        swap: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        swap: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        swap: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        swap: 70,
    },
];

export const IO_columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    {
        field: 'device',
        headerName: 'File System',
        width: 150,
        flex: 1,
        type:'text',
        // align: "center",
        // colSpan: 2,
        // editable: true,
    },
    {
        field: 'transferPerSecond',
        headerName: 'Transfer per second',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center",
        // editable: true,
    },
    {
        field: 'readPerSecond',
        headerName: 'Read per sec',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center"
        // editable: true,
    },
    {
        field: 'writePerSecond',
        headerName: 'Write per sec',
        type: 'number',
        width: 100,
        flex: 1,
        // align: "center"
        // editable: true,
    },
    {
        field: 'averageRead',
        headerName: 'Average Read',
        width: 150,
        // align: "center",
        type: 'number',
        // colSpan: 2,
        flex: 1,
        // editable: true,
    },
    {
        field: 'averageWrite',
        headerName: 'Average Write',
        width: 150,
        // align: "center",
        type: 'number',
        // colSpan: 2,
        flex: 1,
        // editable: true,
    },
];
export const IO_rows = [
    { id: 1, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 2, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 3, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 4, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 5, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 6, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 7, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 8, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 9, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
    { id: 10, device: 'Scanner', tps: 10, mB_reads: 35, mB_wrtns: 28, mB_read: 20, mB_wrtn: 30 },
];
const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Ubuntu Server' },
        position,
    },
    {
        id: '2',
        data: { label: 'LegalChain' },
        position,
    },
    {
        id: '3',
        data: { label: 'ConnectVerse' },
        position,
    },
    {
        id: '4',
        data: { label: 'InfraSight' },
        position,
    },
    {
        id: '5',
        data: { label: 'Innovatree' },
        position,
    },
];

export const initialEdges = [
    { id: 'e12', source: '1', target: '2', type: edgeType, animated: true },
    { id: 'e13', source: '1', target: '3', type: edgeType, animated: true },
    { id: 'e14', source: '1', target: '4', type: edgeType, animated: true },
    { id: 'e15', source: '1', target: '5', type: edgeType, animated: true },
];
