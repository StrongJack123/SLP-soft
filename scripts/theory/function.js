let theoryFunctions = [{
    id: 'functionSystem',
    title: 'Functional System',
    annotation: {
        radius: 200,
        fill: 'White'
    },
    toolTip: 'Represents Life',
    type: 'Circle'
}, {
    id: 'life',
    title: 'Life',
    annotation: ['Existing Function Area', 'Added Function Area'],
    toolTip: 'Represent The Functional System',
    type: 'LifeShape'
}, {
    id: 'functionalSystem1',
    title: 'Functional System',
    annotation: {
        content: [{
            content: 'Functional System'
        }],
        style: {
            strokeWidth: 3
        },
        height: 600,
        width: 300
    },
    toolTip: 'Represents Life'
}, {
    id: 'lifeBox',
    title: 'Life',
    annotation: ['Existing Functions', 'Added Functions'],
    toolTip: 'Represent The Functional System',
    type: 'LifeBox'
}, {
    id: 'existingFunction',
    title: 'Existing Function',
    annotation: 'Existing Function',
    toolTip: 'Identify An Existing Funciton',
}, {
    id: 'addedFunction',
    title: 'Added Function',
    annotation: 'Added Function',
    toolTip: 'Identify An Added Function',
}, {
    id: 'h(t)',
    title: 'h(t)',
    annotation: 'h(t)',
    toolTip: 'Identidy an Existing Function',
}, {
    id: 'u(t)',
    title: 'u(t)',
    annotation: 'u(t)',
    toolTip: 'Identify an Added Function',
}, {
    id: 'existingFunction1',
    title: 'Existing Function',
    annotation: 'Existing Function',
    toolTip: 'Identify An Existing Function',
    type: 'Ellipse'
}, {
    id: 'addedFunction1',
    title: 'Added Function',
    annotation: 'Added Function',
    toolTip: 'Identify An Added Function',
    type: 'Ellipse'
}, {
    id: 'existingFunction2',
    title: 'Existing Function',
    annotation: 'Existing Function',
    toolTip: 'Identify An Existing Function',
    type: 'Circle'
}, {
    id: 'addedFunction2',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'Added Function'
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Identify an Added Function',
    type: 'Circle'
}, {
    id: 'existingFunction3',
    title: 'Existing Function',
    annotation: {
        content: [{
            content: 'h(x)'
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Identify An Existing Function',
    type: 'Circle'
}, {
    id: 'addedFunction3',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'u(x)'
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Identify An Added Function',
    type: 'Circle'
}, {
    id: 'addedFunction4',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'function'
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Multi Inputs Added Function',
    type: 'Circle'
}, {
    id: 'addedFunction5',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'u(x)',
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Multi Input Added Function',
    type: 'Circle'
}, {
    id: 'externalFunction',
    title: 'External Function',
    annotation: 'External Function',
    toolTip: 'Identify An External Function'
}, {
    id: 'stopFunction',
    title: 'Stop Function',
    annotation: 'Stop Function',
    toolTip: 'Identify a Stop Function'
}, {
    id: 'functionContainer',
    title: 'Function Container',
    annotation: {
        height: 200,
        width: 100,
    },
    toolTip: 'Identify A Function Container'
}, {
    id: 'eFunction',
    title: 'eFunction',
    annotation: 'eFunction',
    toolTip: 'Identify An Existing Function',
    type: 'Text'
}, {
    id: 'aFunction',
    title: 'aFunction',
    annotation: 'aFunction',
    toolTip: 'Identify An Added Function',
    type: 'Text'
}, {
    id: 'h(t)',
    title: 'h(t)',
    annotation: 'h(t)',
    toolTip: 'Identify an Existing Function',
    type: 'text'
}, {
    id: 'u(t)',
    title: 'u(t)',
    annotation: 'u(t)',
    toolTip: 'Identify an Added Function',
    type: 'text'
}, {
    id: 'life1',
    title: 'Life',
    annotation: {
        radius: 70,
        content: [{
            content: 'Life'
        }],
        fill: 'White'
    },
    toolTip: 'Life as a Function of Time',
    type: 'Circle'
}, {
    id: 'life2',
    title: 'Life',
    annotation: 'Life',
    toolTip: 'Life as a Function',
    type: 'Text'
}, {
    id: 'L(t)',
    title: 'L(t)',
    annotation: {
        content: [{
            content: 'L(t)'
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Life as a Function of Time',
    type: 'Circle'
}, {
    id: 'L(t)1',
    title: 'L(t)',
    annotation: 'L(t)',
    toolTip: 'Life as a Function of Time',
    type: 'Text'
}, {
    id: 'groupFunction',
    title: 'Group',
    annotation: 'Group',
    toolTip: 'Use to Group or Add Entities',
    type: 'Vertical'
}, {
    id: 'continuityFunction',
    title: 'Continuity',
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity',
}, {
    id: 'equationFunction',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation'
}];

function getTheoryFunction() {
    return theoryFunctions.map(data => drawShape(data));
}