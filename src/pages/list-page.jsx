import React, { useEffect, useState } from 'react'
import Box from '../components/box'
import Loading from '../components/loading'
import { useNavigate } from 'react-router-dom';
import { getServerByOneMonth, getUsersServer } from '../services/api.service';

const INITIAL_SERVERS = [
    {
        "name": "Ubuntu-Server",
        "description": "This is an ubuntu containmer running in Docker.",
        "ramCPU": [
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            }
        ],
        "discStats": []
    },
];

const ListPage = () => {
    const navigate = useNavigate();
    // const { user } = useContext(MyContext);


    const [isLoading, setLoading] = useState(false);
    const [servers, setServers] = useState(INITIAL_SERVERS);

    const onInit = async () => {
        try {
            setLoading(() => true);
            const serversData = await getUsersServer();
            setServers((prev) => [...serversData]);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(() => false);
        }
    }

    useEffect(() => {
        onInit();
    }, []);

    return (
        <div>
            {
                isLoading ? <Loading />
                    :
                    <div className='listpage'>
                        {
                            servers.map(server => (
                                <Box id={server["id"]} name={server["name"]} cpu={server["maxCPUUsed"]} ram={server["maxRAMUsed"]} disk={server["maxDisc"]} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default ListPage
