import axios from "axios";
import jwt_decode from "jwt-decode";


const BASEURL = "http://localhost:8081";
const LOGINURL = `${BASEURL}/auth/login`;
const PRESENTATIONURL = `${BASEURL}/graphql`;
const CONSOLEURL = `${BASEURL}/console`;
const SECURYCHECKURL = `${BASEURL}/console/scan`;
const ADDSERVERURL = `${BASEURL}/server`;
const SERVERPROVIDEACCESS = `${BASEURL}/access/provide/access`;
const SERVERREVOKEACCESS = `${BASEURL}/access/revoke/access`;
const ADDTASKURL = `${BASEURL}/task`;

export const login = async (loginData) => {
    try {
        // console.log(loginData);
        const { status, headers } = await axios.post(LOGINURL, loginData);
        if (status == 200) {
            const { authorization } = headers;
            const { sub } = jwt_decode(authorization);
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("userId", sub);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const isLoggedIn = () => {
    console.log(localStorage.getItem("isAuthenticated"));
    return localStorage.getItem("isAuthenticated");
}

export const logout = () => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("userId", "");
}

export const addServer = async (serverData) => {
    try {
        // console.log(serverData);
        const { status, body } = await axios.post(ADDSERVERURL, serverData);
        if(status == 200) {
            return body;
        }
    } catch (e) {
        console.log(e);
        return e.message;
    } 
}

export const getUsersServer = async () => {
    const to = getTodaysDate();
    const from = getOneMonth(to);
    const userId = localStorage.getItem("userId");
    try {
        const query = `query {
            userServers(userId: "${userId}", from: "${from}", to: "${to}") {
                id
                name
                ramCPU {
                    availableRam,
                    totalRam,
                    cpuPerformance,
                },
                discStats {
                    discMounts {
                        use,
                    },
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        let returnServers = [];
        for (let server of data["data"]["userServers"]) {
            returnServers.push(getMaxFromServer(server));
        }
        console.log(returnServers);
        return returnServers;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getServerByOneMonth = async () => {
    const to = getTodaysDate();
    const from = getOneMonth(to);
    try {
        const query = `query {
            servers(limit: 100, page: 0, from: "${from}", to: "${to}") {
                id,
                name,
                description,
                ramCPU {
                    availableRam,
                    totalRam,
                    cpuPerformance,
                },
                discStats {
                    discMounts {
                        use,
                    },
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        let returnServers = [];
        for (let server of data["data"]["servers"]) {
            returnServers.push(getMaxFromServer(server));
        }
        return returnServers;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getServersList = async () => {
    try {
        const query = `query {
            servers(limit: 100, page: 0) {
                id,
                name,
                description,
                ramCPU {
                    availableRam,
                    cpuPerformance
                },
                discStats {
                    discMounts {
                        available,
                    }
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        return data["data"]["servers"];
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getServer = async (id, from, to) => {
    let query = `query {
        server(id: "${id}", from: "${from}", to: "${to}") {
            id
            name,
            description,
            host,
            isActive,
            ramCPU {
                availableRam,
                totalRam,
                cpuPerformance,
                capturedAt
                serverLoad
                freeSwap
                totalSwap
            },
            discStats {
                discMounts {
                    fileSystem,
                    used,
                    use,
                    available,
                    size,
                    mountedOn
                }
                capturedAt
            }
            ioStats {
                ioDatas {
                    device
                    transferPerSecond
                    readPerSecond
                    writePerSecond
                    averageRead
                    averageWrite
                }
                capturedAt
            }
        }
    }`;
    if (from != null && to != null)
        query = `query {
            server(id: "${id}", from: "${from}", to: "${to}") {
                id
                name,
                description,
                host,
                isActive,
                ramCPU {
                    availableRam,
                    totalRam,
                    cpuPerformance,
                    capturedAt
                    freeSwap
                    totalSwap
                    serverLoad
                },
                discStats {
                    discMounts {
                        fileSystem,
                        used,
                        use,
                        available,
                        size,
                        mountedOn
                    }
                    capturedAt
                }
                ioStats {
                    ioDatas {
                        device
                        transferPerSecond
                        readPerSecond
                        writePerSecond
                        averageRead
                        averageWrite
                    }
                    capturedAt
                }
            }
        }`;
    try {
        const { data } = await axios.post(PRESENTATIONURL, { query });
        return getMaxFromServer(data["data"]["server"]);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getOneMonth = (currentDate) => {
    try {
        const inputDateObj = new Date(currentDate);
        inputDateObj.setMonth(inputDateObj.getMonth() - 1);
        const result = inputDateObj.toISOString().slice(0, 10);
        return result;
    } catch (error) {
        return "Invalid date format. Please use yyyy-MM-dd.";
    }
}

export const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate() + 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const getMaxFromServer = (server) => {
    server["maxRAMUsed"] = 0;
    server["maxCPUUsed"] = 0;
    server["maxDisc"] = 0;
    for (let ramCPU of server["ramCPU"]) {
        try {
            const totalRam = ramCPU["totalRam"];
            const availableRam = ramCPU["availableRam"];
            const usedRam = totalRam - availableRam;
            const usePercentage = Math.round((usedRam / totalRam) * 100);
            if (server["maxRAMUsed"] < usePercentage)
                server["maxRAMUsed"] = usePercentage;
            const cpuPerformance = ramCPU["cpuPerformance"];
            if (server["maxCPUUsed"] < cpuPerformance)
                server["maxCPUUsed"] = cpuPerformance;
        } catch (e) {
            console.log(e);
        }
    }
    for (let discStat of server["discStats"]) {
        try {
            for (let discMount of discStat["discMounts"]) {
                const use = discMount["use"].split("%")[0];
                if (server["maxDisc"] < use)
                    server["maxDisc"] = use;
            }
        } catch (e) {
            console.log(e);
        }
    }
    return server;
}

export const getRAMCPUPoints = (server) => {
    const rams = server["ramCPU"];
    let ramReturn = [];
    let cpuReturn = [];
    let loadReturn = [];
    let swapReturn = [];
    for (let ramCPU of rams) {
        const totalRam = ramCPU["totalRam"];
        const availableRam = ramCPU["availableRam"];
        const usedRam = totalRam - availableRam;
        const ramUsePercentage = Math.round((usedRam / totalRam) * 100);
        const cpuUse = ramCPU["cpuPerformance"];
        const date = ramCPU["capturedAt"];
        const totalSwap = ramCPU["totalSwap"];
        const freeSwap = ramCPU["freeSwap"];
        const usedSwap = totalSwap - freeSwap;
        const swapUsePercentage = Math.round((usedSwap / totalSwap) * 100);
        const ram = {
            name: date,
            ram: ramUsePercentage,
        }
        ramReturn.push(ram);
        const cpu = {
            name: date,
            cpu: cpuUse,
        }
        cpuReturn.push(cpu);
        const load = {
            name: date,
            load: ramCPU["serverLoad"]
        }
        loadReturn.push(load);
        const swapData = {
            name: date,
            swap: swapUsePercentage
        }
        swapReturn.push(swapData);
    }
    return { ramReturn, cpuReturn, loadReturn, swapReturn };
}

export const runSecuryCheck = async (id) => {
    const { data, status } = await axios.get(`${SECURYCHECKURL}/${id}`);
    if (status == 200) {
        const { datas } = data;
        console.log("datas: ", datas);
        return datas;
    }
}

export const executeCommand = async (serverId, command) => {
    try {
        const body = {
            serverId,
            command
        }
        const { status, data } = await axios.post(CONSOLEURL, body);
        if (status == 200) {
            const { datas } = data;
            return datas;
        } else {
            return [];
        }
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const getServerProject = async (id) => {
    try {
        const to = getTodaysDate();
        const from = getOneMonth(to);
        const query = `query {
                server(id: "${id}", from: "${from}T00:00", to: "${to}T00:00") {
                id
                name
                isActive
                projects {
                    id
                    programmingLanguage
                    framework
                    ramCpuStats {
                        cpuPerformance
                        ramPerformance
                        capturedAt
                    }
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        return data["data"]["server"];
    } catch (e) {
        console.log(e);
        return {};
    }
}

export const getServerDetails = async (id) => {
    try {
        const to = getTodaysDate();
        const from = getOneMonth(to);
        const query = `query {
                server(id: "${id}", from: "${from}T00:00", to: "${to}T00:00") {
                id
                name
                description
                isActive
                serverUpTime
                tasks {
                    id
                    tittle
                }
                serverUsers {
                    id
                    companyEmail
                }
                projects {
                    id
                    programmingLanguage
                    framework
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        return data["data"]["server"];
    } catch (e) {
        console.log(e);
        return {};
    }
}

export const getAllUserName = async () => {
    try {
        const query = `query {
                users {
                id
                companyEmail
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        return data["data"]["users"];
    } catch (e) {
        console.log(e);
        return {};
    }
}

export const provideAccessToServer = async (serverId, userId) => {
    try {
        const ownerId = localStorage.getItem("userId");
        const { status, data } = await axios.get(`${SERVERPROVIDEACCESS}/${serverId}/${ownerId}/${userId}`);
        if (status == 200) {
            return data["message"];
        }
    } catch (e) {
        console.log(e);
        return e.message;
    }
}

export const revokeAccessToSerevr = async (serverId, userId) => {
    try {
        const ownerId = localStorage.getItem("userId");
        const { status, data } = await axios.get(`${SERVERREVOKEACCESS}/${serverId}/${ownerId}/${userId}`);
        if (status == 200) {
            return data["message"];
        }
    } catch (e) {
        console.log(e);
        return e.message;
    }
}

export const addScheduledTask = async (body) => {
    try {
        const { status, data } = await axios.post(ADDTASKURL, body);
        if (status == 200) {
            return data["message"];
        } else {
            return data["error"];
        }
    } catch (e) {
        console.log(e);
        return e.message;
    }
}

export const getProjectStats = async (id) => {
    try {
        const query = `query {
                project(uniqueId: "${id}") {
                    id
                    programmingLanguage
                    framework
                    ramCpuStats {
                        cpuPerformance
                        ramPerformance
                        capturedAt
                    }
                }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        let returnCPU = [];
        let returnRAM = [];
        for(const cpuram of data["data"]["project"]["ramCpuStats"]) {
            const cpuStat = {
                name: cpuram["capturedAt"],
                cpu: cpuram["cpuPerformance"],
            }
            returnCPU.push(cpuStat);
            const ramStat = {
                name: cpuram["capturedAt"],
                ram: cpuram["ramPerformance"],
            }
            returnRAM.push(ramStat);
        }
        return { returnCPU, returnRAM };
    } catch (e) {
        console.log(e);
    }
}
