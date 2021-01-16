export const menuParagraphs = [
    "Simulador rudimentario de multi-CPU scheduling. Este simulador tiene una serie de funciones con las que jugar.",
    "El objetivo de... es mostrar detalladamente los indicadores de la caché y las tareas realizadas, basadas en parametros customizables.",
    "Para ejecutar una simulación, necesita programar algunos trabajos. Hay dos maneras de hacer esto. La primera es dejar que el sistema cree algunos trabajos con características aleatorias para usted (esto es lo predeterminado, es decir, si no especifica nada, obtiene esto); También existen algunos controles para controlar (algo) la naturaleza de los trabajos generados aleatoriamente, que se describen más adelante. El segundo es especificar una lista de trabajos para que el sistema programe con precisión; esto también se describe con más detalle a continuación."
];

export const menuIconButtons = [
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
        text: "Iniciar"
    },
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
        text: "Reiniciar"
    },
    // {
    //     src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
    //     text: "Product Doc"
    // }
];

export const simulatorModes = [
    {
        label: "Caché Trace", //NIVEL DE UTILIZACIÓN DE LA CACHÉ. TIEMPO 
        value: "Cache"
    },
    {
        label: "Tareas Trace", //COLA DE ESPERA DE LAS TAREAS, TIEMPO, CPU ASIGNADA
        value: "Jobs"
    },
    {
        label: "Personalizado", //TODAS LAS OPCIONES
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