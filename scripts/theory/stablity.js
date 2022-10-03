let theoryStability = [{
    id: 'basis',
    title: 'Basis',
    annotation: {
        content: [{
            content: 'k',
            offset: {x: 0, y: 0.5},
            margin: {right: 10}
        }],
        length: 400,
        style: {strokeDashArray: '10 5'},
        orientation: 'Horizontal'
    },
    toolTip: 'Identify Our Basis',
    type: 'Line'
}, {
    id: 'basis1',
    title: 'Basis',
    annotation: 'k',
    toolTip: 'Identify Out Basis',
    type: 'Basis'
}, {
    id: 'stabilityLine',
    title: 'Stability Line',
    annotation: {
        style: {strokeDashArray: '10 5'},
        orientation: 'Horizontal',
        length: 400
    },
    toolTip: 'Identify Our Stablility Line',
    type: 'Line'
}, {
    id: 'stabilityLine1',
    title: 'Stability Line',
    annotation: {
        orientation: 'Horizontal',
        length: 600
    },
    toolTip: 'Stability Line With Connector',
    type: 'Line'
}, {
    id: 'k',
    title: 'k',
    annotation: {
        length: 70,
        width: 70,
        content : [{
            content: 'k'
        }]
    },
    toolTip: 'Identify Our Basis',
    type: 'Line'
}, {
    id: 'k1',
    title: 'k',
    annotation: 'k',
    toolTip: 'Identify Out Stability',
    type: 'Text'
}, {
    id: 'destination',
    title: 'Destination',
    annotation: 'k',
    toolTip: 'Identify Our Destination',
    type: 'Location1'
}, {
    id: 'direction',
    title: 'Direction',
    toolTip: 'Identify Our Direction',
    type: 'Direction'
}, {
    id: 'roadMark',
    title: 'Road Mark',
    annotation: {
        content: [{
            content:'Mark #',
            offset: {x: 0.5, y: 1}
        }],
        length: 150,
    },
    toolTip: 'Identify Specific Location',
    type: 'Line'
}, {
    id: 'distance',
    title: 'Distance',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'distance',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Specific Distance',
    type: 'Arrow'
}, {
    id: 'theoryScale',
    title: 'Theory Scale',
    toolTip: 'Identify The Theory Scale Distance',
    type: 'Theory Scale'
}, {
    id: 'scaleMark',
    title: 'Scale Mark',
    annotation: {
        content: [{
            content: '#',
            offset: {x: 0.5, y: 1},
            margin: {top: 5}
        }],
        length: 50
    },
    toolTip: 'Use to Put Mark On Scale'
}, {
    id: 'upHill',
    title: 'Uphill',
    annotation: {
        type: 'Beizer',
        style: {}
    },
    toolTip: 'Identify The Uphill Path',
    type: 'Arrow'
}, {
    id: 'downHill',
    title: 'Downhill',
    annotation: {
        type: 'Beizer',
        style: {}
    },
    toolTip: 'Identify The Downhill Path',
    type: 'Arrow'
}, {
    id: 'timeMark',
    title: 'Time Mark',
    annotation: {
        length: 150,
        content: [{
            content: 'time #',
            offset: {x: 0.5, y: 1}
        }]
    },
    toolTip: 'Identify a Time Mark',
    type: 'Line'
}, {
    id: 'progressTime',
    title: 'Progress Time',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'progress Time',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Progress Time',
    type: 'Arrow'
}, {
    id: 'declineTime',
    title: 'Decline Time',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'decline time',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Decline Time',
    type: 'Arrow'
}, {
    id: 'lostLine',
    title: 'Lost Line',
    annotation: {
        orientation: 'Horizontal',
        length: 400,
        style: {strokeDashArray: '10 5'},
        content: [{
            content: 'Lost #',
            offset: {x: 1, y: 0.5},
            margin: {left: 10}
        }]
    },
    toolTip: 'Identify Point of Lost',
    type: 'Line'
}, {
    id: 'gainLine',
    title: 'Gain Line',
    annotation: {
        orientation: 'Horizontal',
        length: 400,
        style: {strokeDashArray: '10 5'},
        content: [{
            content: 'Gain #',
            offset: {x: 1, y: 0.5},
            margin: {left: 10}
        }]
    },
    toolTip: 'Identify Point of Gain',
    type: 'Line'
}, {
    id: 'lost',
    title: 'Lost',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow',
        },
        content: [{
            content: 'Lost',
            alignment: 'After'
        }]
    },
    toolTip: 'Identify Specific Lost',
    type: 'Arrow'
}, {
    id: 'Gain',
    title: 'Gain',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Gain',
            alignment: 'After'
        }]
    },
    toolTip: 'Identify Specific Gain',
    type: 'Arrow'
}, {
    id: 'stabilityPoint',
    title: 'Stability Point',
    annotation: {
        radius: 10,
        fill: 'black'
    },
    toolTip: 'Identify a Point Of Stability',
    type: 'Circle'
}, {
    id: 'functionExecution',
    title: 'Function Execution',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Circle'
        },
        style: {}
    },
    toolTip: 'Function Execute At Specific Time',
    type: 'Arrow'
}, {
    id: 'domainLeft',
    title: 'Domain Left',
    annotation: {
        orientation: 'Left',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain To The Left',
    type: 'Domain'
}, {
    id: 'domainRight',
    title: 'Domain Right',
    annotation: {
        orientation: 'Right',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain To The Right',
    type: 'Domain'
}, {
    id: 'domainTop',
    title: 'Domain Top',
    annotation: {
        orientation: 'Top',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain Above',
    type: 'Domain'
}, {
    id: 'domainBottom',
    title: 'Domain Bottom',
    annotation: {
        orientation: 'Bottom',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain Bottom',
    type: 'Domain'
}, {
    id: 'graphAxis',
    title: 'Graph Axis',
    annotation: ['Label Name', 'Label Name'],
    toolTip: 'Use for Data Representation',
    type: 'Graph'
}, {
    id: 'philosophy',
    title: 'Philosophy',
    annotation: 'Philosophy',
    toolTip: 'Identify Philosophy',
    type: 'Ellipse'
}, {
    id: 'changeOfPhilosophy',
    title: 'Change Of Philosophy',
    annotation: {
        content: [{content: 'Δx'}],
        radius: 70,
        fill: 'White',
    },
    toolTip: 'Represent Change Of Philosophy',
    type: 'Circle'
}, {
    id: 'changeOfPhilosophy1',
    title: 'Change Of Philosophy',
    annotation: {
        content: [{content: 'ΔPh'}],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Represent Change Of Philosophy',
    type: 'Circle'
}, {
    id: 'philosophy1',
    title: 'Philosophy',
    annotation: {
        content: [{content: 'yn'}],
        radius: 30,
        fill: 'White'
    },
    toolTip: 'Identify Philosophy',
    type: 'Circle'
}, {
    id: 'philosophy2',
    title: 'Philosophy',
    annotation: {
        content: [{content: 'Phn'}],
        radius: 30,
        fill: 'White'
    },
    toolTip: 'Identify Philosophy',
    type: 'Circle'
}, {
    id: 'deltaPhilosophy',
    title: 'Delta Philosophy',
    annotation: {
        content: [{content: 'Delta Philosophy'}],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Identify Change of Philosophy',
    type: 'Circle'
}, {
    id: 'inheritArrow',
    title: 'Inherit Arrow',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'Inherited',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Show Inherited Philosophy',
    type: 'Arrow'
}, {
    id: 'passThroughArrow',
    title: 'Pass Through Arrow',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'Pass Through',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Show Pass Through Philosophy',
    type: 'Arrow'
}, {
    id: 'directionArrow',
    title: 'Direction Arrow',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Show A Direction',
    type: 'Arrow'
}, {
    id: 'deltaT',
    title: 'Delta T',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Δt'
        }],
        style: {}
    },
    toolTip: 'Change Of Time',
    type: 'Arrow'
}, {
    id: 'deltaL',
    title: 'Delta L',
    annotation: {
        shape: { target: 'Arrow', source: 'Arrow'},
        content: [{
            content: 'ΔL'
        }],
        style: {}
    },
    toolTip: 'Change of Loss',
    type: 'Arrow'
}, {
    id: 'deltaG',
    title: 'Delta G',
    annotation: {
        shape: {target: 'Arrow', source: 'Arrow'},
        content: [{
            content: 'ΔG',
        }],
        style: {}
    },
    toolTip: 'Change of Gain',
    type: 'Arrow'
}, {
    id: 'initialTime',
    title: 'Initial Time',
    annotation: {
        content: [{
            content: 'time 0',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Identify Initial Time',
    type: 'Line'
}, {
    id: 'firstTime',
    title: 'First Time',
    annotation: {
        content: [{
            content: 'time 1',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Identify The First Time',
    type: 'Line'
}, {
    id: 'secondTime',
    title: 'Second Time',
    annotation: {
        content: [{
            content: 'time 2',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Identify The Second Time',
    type: 'Line' 
}, {
    id: 'thirdTime',
    title: 'Third Time',
    annotation: {
        content: [{
            content: 'time 3',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Identify The Third Time',
    type: 'Line'
}, {
    id: 'fourthTime',
    title: 'Fourth Time',
    annotation: {
        content: [{
            content: 'time 4',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Identify The Fourth Time',
    type: 'Line'
}, {
    id: 'timePrime',
    title: 'Time Prime',
    annotation: {
        content: [{
            content: 'time prime',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Time Prime',
    type: 'Line'
}, {
    id: 't[0]',
    title: 't[0]',
    annotation: {
        content: [{
            content: 't0',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote An Initial Time',
    type: 'Line'
}, {
    id: 't[1]',
    title: 't[1]',
    annotation: {
        content: [{
            content: 't1',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The First Time',
    type: 'Line'
}, {
    id: 't[2]',
    title: 't[2]',
    annotation: {
        content: [{
            content: 't2',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Second Time',
    type: 'Line'
}, {
    id: 't[3]',
    title: 't[3]',
    annotation: {
        content: [{
            content: 't3',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Third Time',
    type: 'Line'
}, {
    id: 't[4]',
    title: 't[4]',
    annotation: {
        content: [{
            content: 't4',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Fourth Time',
    type: 'Line'
}, {
    id: "t'",
    title: "t'",
    annotation: {
        content: [{
            content: 't4',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Time Prime',
    type: 'Line'
}, {
    id: 'generationTime',
    content: 'Generation Time',
    annotation: {
        content: [{
            content: 'generation time',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Our Generation Time',
    type: 'Arrow'
}, {
    id: 'qTime',
    content: 'Q Time',
    annotation: {
        content: [{
            content: 'Q time',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Our Generation Time',
    type: 'Arrow'
}, {
    id: 'Q',
    content: 'Q',
    annotation: {
        content: [{
            content: 'Q',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow',
            source: 'Arrow',
        },
        style: {}
    },
    toolTip: 'Identify Our Generation Time',
    type: 'Arrow'
}, {
    id: 'continuity',
    title: 'Continuity',
    toolTip: 'Show Continuity Of Entity',
    type: 'Continuity'
}, {
    id: 'euqation',
    title: 'Equation',
    anotation: '√x',
    toolTip: 'Use to Add Equation',
}];

function getStabilityTheory() {
    return theoryStability.map(data => drawShape(data));
}