let theorySignals = [{
    id: 'greenSignal',
    title: 'Green Signal',
    annotation: {
        radius: 10,
        fill: 'LimeGreen'
    },
    toolTip: 'Denote Positive Flow',
    type: 'Circle'
}, {
    id: 'redSignal',
    title: 'Red Signal',
    annotation: {
        radius: 10,
        fill: 'Red'
    }
}, {
    id: 'greenSignalPath',
    title: 'Green Signal Path',
    annotation: {
        style: {
            fill: 'Green'
        },
        shape: {
            target: 'Arrow'
        }
    },
    toolTip: 'Denote Positive Flow Direction',
    type: 'Arrow'
}, {
    id: 'redSignalPath',
    title: 'Red Signal Path',
    annotation: {
        style: {
            fill: 'Red',
        },
        shape: {
            target: 'Arrow'
        }
    },
    toolTip: 'Denote Negative Flow Direction',
    type: 'Arrow'
}];

function getTheorySignal() {
    return theorySignals.map(data => drawShape(data));
}