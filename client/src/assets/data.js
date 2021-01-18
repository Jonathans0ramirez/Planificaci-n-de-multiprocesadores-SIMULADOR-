import start from '../assets/start.svg';
import eraser from '../assets/eraser.svg';

export const menuParagraphs = [
    "Integración gráfica del simulador rudimentario de multi-CPU scheduling, multi.py.",
    "El objetivo de los dos simuladores desarrolados es mostrar el comportamiento de las caché y las tareas según el comportamiento del Single-Queue Multiprocessor Scheduling (SQMS).",
    "Para ejecutar cada simulación, se tienen dos posibilidades. La primera es dejar que el sistema cree algunas tareas con caracterísiticas aleatorias (predeterminado, sin especificar nada); También existe la posibilidad de manipular estas tareas generadas. La segunda es especificando características claves para que el simulador actúe con más precisión."
];

export const menuIconButtons = [
    {
        src: start,
        text: "Iniciar"
    },
    {
        src: eraser,
        text: "Reiniciar"
    }
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
        label: "Control Total", //TODAS LAS OPCIONES
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