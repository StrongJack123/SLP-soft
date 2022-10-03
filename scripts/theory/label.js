let theoryLabel = [{
    id: 'label',
    title: 'Label',
    annotation: {
        type: 'Beizer',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'
}, {
    id: 'label1',
    title: 'Label',
    annotation: {
        type: 'Beizer',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label2',
    title: 'Label',
    annotation: {
        type: 'Beizer',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label3',
    title: 'Label',
    annotation: {
        type: 'Beizer',
        shape: {
            target: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label4',
    title: 'Label',
    annotation: {
        type: 'Beizer',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label5',
    title: 'Label',
    annotation: {
        type: 'Beizer',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'expandTo',
    title: 'Expand To',
    annotation: {
        type: 'Beizer',
        shape: {
            target: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'expandTo1',
    title: 'Expand To',
    annotation: {
        type: 'Beizer',
        shape: {
            target: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'allocate',
    title: 'Allocate',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Allocate Theorem in Theory',
    type: 'Arrow'
}, {
    id: 'allocate1',
    title: 'Allocate',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Allocate Theorem in Theory',
    type: 'Arrow'
}, {
    id: 'label',
    title: 'Label',
    annotation: {
        orientation: 'Left'
    },
    toolTip: 'Symbol Identification Label',
    type: 'Label'
}, {
    id: 'label',
    title: 'Label',
    annotation: {
        orientation: 'Left'
    },
    toolTip: 'Symbol Identification Label',
    type: 'Label'
}, {
    id: 'directionLeft',
    title: 'DirectionLeft',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Identify Left Direction',
    type: 'Arrow'
}, {
    id: 'directionRight',
    title: 'Direction Right',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Identify Right Direction',
    type: 'Arrow'
}, {
    id: 'leftCurlBrace',
    title: 'Left Curl Brace',
    annotation: {
        content: [{
            content: 'Text',
            offset: {
                x: 0, y: 0.5
            },
            margin: {
                right: 15
            }
        }],
        orientation: 'left'
    },
    toolTip: 'Use to Group Theorem',
    type: 'Curly'
}, {
    id: 'leftCurlBrace',
    title: 'Left Curl Brace',
    annotation: {
        content: [{
            content: 'Text',
            offset: {
                x: 0, y: 0.5
            },
            margin: {
                right: 15
            }
        }],
        orientation: 'left'
    },
    toolTip: 'Use to Group Theorem',
    type: 'Curly'
}, {
    id: 'rightCurlBraces',
    title: 'Right Curl Braces',
    annotation: {
        content: [{
            content: 'Text',
            offset: {
                x: 1, y: 0.5
            },
            margin: {
                left: 15
            }
        }],
        orientation: 'right'
    },
    type: 'Curly',
    toolTip: 'Use to Group Theorem',
}, {
    id: '#',
    title: '#',
    annotation: '#1',
    toolTip: 'Use for Identification',
    type: 'Text'
}, {
    id: 'node',
    title: 'Node',
    annotation: {
        content: [{
            content: '1'
        }],
        radius: 15,
        fill: 'White'
    },
    toolTip: 'Using for Identification',
    type: 'Circle'
}, {
    id: 'nodeTable',
    title: 'Node Table',
    annotation: {
        content: ['Node Number', 'Information', '1', 'Hello', '2', 'Hello2', '3', 'Nigita'],
        columnNo: 4
    },
    toolTip: 'Represents a Table of Node',
    type: 'Table'
}, {
    id: 'separationLine',
    title: 'Separation Line',
    annotation: {
        length: 400,
        style: {
            strokeDashArray: '10 5'
        }
    },
    toolTip: 'Use to Show Separation',
    type: 'Line'
}, {
    id: 'pushUp',
    title: 'Push Up',
    annotation: {
        orientation: 'Right',
    },
    toolTip: 'Selected to Apply',
    type: 'PushUp'
}, {
    id: 'pushUp1',
    title: 'Push Up',
    annotation: {
        orientation: 'Left',
    },
    toolTip: 'Selected to Apply',
    type: 'PushUp'
}, {
    id: 'up',
    title: 'Up',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'up',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Up',
    type: 'Arrow'
}, {
    id: 'down',
    title: 'Down',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'down',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Down',
    type: 'Arrow'
}, {
    id: 'up1',
    title: 'Up',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'up',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Up',
    type: 'Arrow'
}, {
    id: 'down1',
    title: 'Down',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'down',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Down',
    type: 'Arrow'
}, {
    id: 'equaitonLabel',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation'
}, {
    id: 'continuityLabel',
    title: 'Continuity',
    toolTip: 'Denote a Continuity',
    type: 'Continuity'
}, {
    id: 'characteristic',
    title: 'Characteristic',
    annotation: 'Theory of Characteristic',
    toolTip: 'Characteristics Theory'
}, {
    id: 'constantCharactersitic',
    title: 'Constant Characteristic',
    annotation: 'Physical System Constant Characteristic',
    toolTip: 'Physical System Constant Characteristic'
}];

function getTheoryLabel() {
    return theoryLabel.map(data => drawShape(data));
}