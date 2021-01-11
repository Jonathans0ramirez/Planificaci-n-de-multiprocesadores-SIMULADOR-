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
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
        text: "Product Doc"
    }
];

export const simulatorModes = [
    {
        label: "First Simulator",
        value: "First"
    },
    {
        label: "Second Simulator",
        value: "Second"
    }
];

export const sights = {
    First: [
        {
            label: 'Ayuda',
            value: '-h'
        },
        {
            label: '',
            value: 'M'
        },
        {
            label: '',
            value: 'P'
        },
        {
            label: '',
            value: 'L'
        }
    ],
    Second: []
};