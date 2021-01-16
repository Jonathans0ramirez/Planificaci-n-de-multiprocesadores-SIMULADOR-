export const menuParagraphs = [
    "Welcome to multi.py, a rudimentary multi-CPU scheduling simulator. This simulator has a number of features to play with, so pay attention! Or don't, because you are lazy that way. But when that exam rolls around...",
    "To run a simulation, you need some jobs to schedule. There are two ways to do this. The first is to let the system create some jobs with random characteristics for you (this is the default, i.e., if you specify nothing, you get this); there are also some controls to control (somewhat) the nature of randomly-generated jobs, described further below. The second is to specify a list of jobs for the system to schedule precisely; this is also described in more detail below."
];

export const menuIconButtons = [
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
        text: "Start"
    },
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
        text: "Clear"
    },
    // {
    //     src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
    //     text: "Product Doc"
    // }
];

export const simulatorModes = [
    {
        label: "Caché", //NIVEL DE UTILIZACIÓN DE LA CACHÉ. TIEMPO 
        value: "Cache"
    },
    {
        label: "Tareas", //COLA DE ESPERA DE LAS TAREAS, TIEMPO, CPU ASIGNADA
        value: "Jobs"
    },
    {
        label: "Free For All", //COLA DE ESPERA DE LAS TAREAS, TIEMPO, CPU ASIGNADA
        value: "FFA"
    }
];

export const params = {
    Cache: [
        {
            label: "JOB_NUM",
            value: "-j",
            needValue: true
        },
        {
            label: "MAX_WSET",
            value: "-W",
            needValue: true
        },
        {
            label: "NUM_CPUS'S",
            value: "-n",
            needValue: true
        },
        {
            label: "CACHE_SIZE",
            value: "-M",
            needValue: true
        }
    ],
    Jobs: [
        {
            label: "JOB_NUM",
            value: "-j",
            needValue: true
        },
        {
            label: "MAX_WSET",
            value: "-W",
            needValue: true
        },
        {
            label: "NUM_CPUS'S",
            value: "-n",
            needValue: true
        },
        {
            label: "CACHE_SIZE",
            value: "-M",
            needValue: true
        }
    ],
    FFA: [
        {
            label: "HELP",
            value: "-h",
            needValue: false
        },
        {
            label: "SEED",
            value: "-s",
            needValue: true
        },
        {
            label: "JOB_NUM",
            value: "-j",
            needValue: true
        },
        {
            label: "MAX_RUN",
            value: "-R",
            needValue: true
        },
        {
            label: "MAX_WSET",
            value: "-W",
            needValue: true
        },
        {
            label: "JOB_LIST",
            value: "-L",
            needValue: true
        },
        {
            label: "per_cpu_queues",
            value: "-p",
            needValue: true
        },
        {
            label: "AFFINITY",
            value: "-A",
            needValue: true
        },
        {
            label: "NUM_CPUS'S",
            value: "-n",
            needValue: true
        },
        {
            label: "TIME_SLICE",
            value: "-q",
            needValue: true
        },
        {
            label: "PEEK_INTERVAL",
            value: "-P",
            needValue: true
        },
        {
            label: "WARMUP_TIME",
            value: "-w",
            needValue: true
        },
        {
            label: "WARM_RATE",
            value: "-r",
            needValue: true
        },
        {
            label: "CACHE_SIZE",
            value: "-M",
            needValue: true
        },
        {
            label: "rand_order",
            value: "-o",
            needValue: false
        },
        {
            label: "trace",
            value: "-t",
            needValue: false
        },
        {
            label: "trace_time_left",
            value: "-T",
            needValue: false
        },
        {
            label: "trace_cache",
            value: "-C",
            needValue: false
        },
        {
            label: "trace_sched",
            value: "-S",
            needValue: false
        },
        {
            label: "compute",
            value: "-c",
            needValue: false
        }
    ]
};