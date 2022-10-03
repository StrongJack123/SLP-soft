let theoryInterface = [{
    id: 'rightInterface',
    title: 'Right Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface To The Right',
    type: 'Arrow'
}, {
    id: 'leftInterface',
    title: 'Left Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'After'
        }],
        shape: {
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface To The Left',
    type: 'Arrow'
}, {
    id: 'upInterface',
    title: 'Up Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],

        shape: {
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface To The Top',
    type: 'Arrow'
}, {
    id: 'downInterface',
    title: 'Down Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],

        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface Down',
    type: 'Arrow'
}, {
    id: 'dependencyInterface',
    title: 'Dependency Interface',
    annotation: {
        content: [{
            content: 'Depend',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Dependency Interface',
    type: 'Arrow'
}, {
    id: 'giveRiseInterface',
    title: 'Give Rise Interface',
    annotation: {
        content: [{
            content: 'Give Rise To',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Give Rise Interface',
    type: 'Arrow'
}, {
    id: 'pointToInterface',
    title: 'Point to Interface',
    annotation: {
        content: [{
            content: 'Point To',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Point to Interface',
    type: 'Arrow'
}, {
    id: 'apply',
    title: 'Apply',
    annotation: {
        content: [{
            content: 'Apply',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        }
    },
    toolTip: 'Apply Interface',
    type: 'Arrow'
}, {
    id: 'execute',
    title: 'Execute',
    annotation: {
        content: [{
            content: 'Execute',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Execute Interface',
    type: 'Arrow'
}, {
    id: 'contributeTo',
    title: 'Contribute To',
    annotation: {
        content: [{
            content: 'contribute to',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use to Show Contribution Interface',
    type: 'Arrow'
}, {
    id: 'associate',
    title: 'Associate',
    annotation: {
        content: [{
            content: 'associate',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'System Associates with Theory',
    type: 'Arrow'
}, {
    id: 'enable',
    title: 'Enable',
    annotation: {
        content: [{
            content: 'Enable',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use For Enable Relationship',
    type: 'Arrow'
}, {
    id: 'related',
    title: 'Related',
    annotation: {
        content: [{
            content: 'Related',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'System Related To Theory',
    type: 'Arrow'
}, {
    id: 'derrive',
    title: 'Derrive',
    annotation: {
        content: [{
            content: 'Derrive',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Instrument Derive From Theory',
    type: 'Arrow'
}, {
    id: 'leftRightInteraction',
    title: 'Left-Right Interaction',
    annotation: {
        content: [{
            content: 'Interact',
            alignment: 'Before'
        }],
        type: 'Beizer',
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use For System Interaction',
    type: 'Arrow'
}, {
    id: 'rightLeftInteraction',
    title: 'Right-Left Interaction',
    annotation: {
        content: [{
            content: 'Interact',
            alignment: 'Before'
        }],
        type: 'Beizer',
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use For System Interaction',
    type: 'Arrow'
}, {
    id: 'related',
    title: 'Related',
    annotation: {
        content: 'Related',
        radius: 25,
        fill: 'White'
    },
    toolTip: 'Use For Related Entities',
    type: 'Circle'
}, {
    id: 'similarity',
    title: 'Similarity',
    annotation: {
        content: 'Similarity',
        radius: 25,
        fill: 'White'
    },
    toolTip: 'Use For Similariry Entities',
    type: 'Circle'
}, {
    id: 'relationship',
    title: 'Relationship',
    annotation: {
        content: 'alpha',
        radius: 25,
        fill: 'White'
    },
    toolTip: 'Use For Related Entities',
    type: 'Circle'
}, {
    id: 'realtionshipBiArrow',
    title: 'Relationship',
    toolTip: 'Left And Right Relationship',
    type: 'BiWideArrow'
}, {
    id: 'realtionshipRightArrow',
    title: 'Relationship',
    annotation: {
        orientation: 'Right'
    },
    toolTip: 'Left to Right Relationship',
    type: 'WideArrow'
}, {
    id: 'realtionshipLeftArrow',
    title: 'Relationship',
    annotation: {
        orientation: 'Left'
    },
    toolTip: 'Right to Left Relationship',
    type: 'WideArrow'
}, {
    id: 'euqationInterface',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation',
}];

function getInterface() {
    return theoryInterface.map(data => drawShape(data));
}