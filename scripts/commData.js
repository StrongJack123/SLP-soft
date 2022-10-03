// This file contains all the data for nodes to draw the shape

// The get functions maps the data to the shapes

//#region analysis
let analysisData = [{
    id: 'principle',
    title: 'Principle',
    annotation: 'Principle',
    menuId: 'principle',
    toolTip: 'Represent Actual Principle'
}, {
    id: 'parentPrinciple',
    title: 'Parent Principle',
    annotation: 'Principle',
    menuId: 'principle',
    toolTip: 'Represent Actual Principle'
}, {
    id: 'referencerect',
    title: 'Reference',
    annotation: 'Reference',
    menuId: 'reference',
    toolTip: 'Represent an Actual Reference'
}, {
    id: 'sentenceAnalysis',
    title: 'Sentence Analysis',
    annotation: 'Sentence Analysis',
    menuId: 'sentenceAnalysis',
    toolTip: 'Represent Actual Principle'
}, {
    id: 'analysis',
    title: 'Analysis',
    annotation: 'Analysis',
    menuId: 'sentenceAnalysis',
    toolTip: 'Represent Actual Analysis'
}, {
    id: 'feedback',
    title: 'Feedback',
    annotation: 'Feedback',
    menuId: 'feedback',
    toolTip: 'Represent a Feedback'
}, {
    id: 'operatingPrinciple',
    title: 'Operating Principle',
    annotation: 'Principle',
    menuId: 'operatingPrinciple',
    toolTip: 'Represent Actual Principle'
}, {
    id: 'error',
    title: 'Error',
    annotation: 'Error',
    menuId: 'error',
    toolTip: 'Represent an Actual Error'
}, {
    id: 'compensator',
    title: 'Compensator',
    annotation: 'Compensator',
    menuId: 'compensator',
    toolTip: 'Represent an Actual Compensator'
}, {
    id: 'problem',
    title: 'Problem',
    annotation: 'Problem',
    menuId: 'problem',
    toolTip: 'Represent an Actual Problem'
}, {
    id: 'problemStatement',
    title: 'Problem Statement',
    annotation: 'Problem Statement',
    menuId: 'problemStatement',
    toolTip: 'Problem Statement as Entity'
}, {
    id: 'principle1',
    title: 'Main Set of Principles',
    annotation: 'Principle',
    menuId: 'mainSetofPrinciple',
    toolTip: 'Represent The Main Set of Principles'
}, {
    id: 'principle2',
    title: 'Sub Set of Principles',
    annotation: 'Principle',
    menuId: 'subSetofPrinciple',
    toolTip: 'Principle a Subset of Principles'
}, {
    id: 'analysisWindow',
    title: 'Analysis Window',
    annotation: 'Analysis Window',
    menuId: 'analysisWindow',
    toolTip: 'Represents an Actual Analysis'
}, {
    id: 'edfDiamond',
    title: 'ECF',
    annotation: 'ECF',
    toolTip: 'The Error Correction Function',
    menuId: 'empty',
    type: 'ECF'
}, {
    id: 'ecfRect',
    title: 'ECF',
    annotation: 'ECF',
    menuId: 'ecf',
    toolTip: 'Enable Error Correction',
}, {
    id: 'problemDevelopment',
    title: 'Problem Development',
    annotation: {
        content: [{
            content: 'Problem Name Development',
            offset: {
                x: 0.5, y: 1
            },
            margin: {
                top: 30
            }
        }],
        radius: 150,
        fill: 'White'
    },
    toolTip: 'Problem Development From Error',
    menuId: 'problemDevelopment',
    type: 'Circle'
}, {
    id: 'principleAspect',
    title: 'Principle Aspect',
    annotation: 'Principle Aspect',
    menuId: 'principleAspect',
    toolTip: 'Identify Aspect of a Principle'
}, {
    id: 'redcrossanalysis',
    title: 'Red Cross',
    toolTip: 'Use to Cross Out Entity',
    menuId: 'empty',
    type: 'redcross'
}, {
    id: 'solutionanalysis',
    title: 'Solution',
    annotation: 'Analysis',
    menuId: 'solution',
    toolTip: 'Represent an Actual Solution'
}, {
    id: 'group4',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Use to Group or Add Entities',
}, {
    id: 'continuity4',
    title: 'Continuity',
    annotation: {
        strokeWidth: 1,
        strokeDashArray: '10 5'
    },
    menuId: 'empty',
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity'
}, {
    id: 'analyses',
    title: 'Analyses',
    annotation: 'Analyses',
    menuId: 'sentenceAnalysis',
    toolTip: 'Represents a Group of Analysis',
    type: 'Overlap'
}, {
    id: 'errors',
    title: 'Errors',
    annotation: 'Errors',
    menuId: 'error',
    toolTip: 'Represent a Group of Error',
    type: 'Overlap'
}, {
    id: 'problems',
    title: 'Problems',
    annotation: 'Problems',
    menuId: 'problem',
    toolTip: 'Represents a Group of Problem',
    type: 'Overlap'
}, {
    id: 'feedbacks',
    title: 'Feedbacks',
    annotation: 'Feedbacks',
    menuId: 'feedback',
    toolTip: 'Represents a Group of Feedback',
    type: 'Overlap'
}, {
    id: 'compensators',
    title: 'Compensators',
    annotation: 'Compenstors',
    menuId: 'compensator',
    toolTip: 'Represent a Group of Feedback',
    type: 'Overlap'
}, {
    id: 'solutionsanalysis',
    title: 'Solutions',
    annotation: 'Solutions',
    menuId: 'solution',
    toolTip: 'Represent a Group of Solutions',
    type: 'Overlap'
}];

//#endregion
function getCommAnalysis() {
    return analysisData.map(item => drawShape(item));
}
//#region application
let applicationRects = [{
    id: 'application',
    title: 'Application',
    annotation: 'Application',
    menuId: 'application',
    toolTip: 'Represents an Actual Application'
}, {
    id: 'a',
    title: 'A',
    annotation: 'A',
    menuId: 'application',
    toolTip: 'Represents an Actual Application'
}, {
    id: 'communicationFunction',
    title: 'Communication Function',
    annotation: 'Communication Function',
    menuId: 'commFunction',
    toolTip: 'Function of Our Communication'
}, {
    id: 'f(x)',
    title: 'f(x)',
    annotation: 'f(x)',
    menuId: 'f(x)',
    toolTip: 'Function of Our Communication'
}, {
    id: 'f()',
    title: 'f()',
    annotation: 'f()',
    menuId: 'f(x)',
    toolTip: 'Function of Our Communication'
}, {
    id: 'communicationResult',
    title: 'Communication Result',
    annotation: 'Communication Result',
    menuId: 'commResult',
    toolTip: 'Result of an Application'
}, {
    id: 'whatWeDo',
    title: 'What We Do',
    annotation: 'draw New Shape',
    toolTip: 'Represent Things That We Do',
    menuId: 'entity',
    type: 'DualBox'
}, {
    id: 'whatWeDo1',
    title: 'What We Do',
    annotation: ['Communication', 'Application', 'What We Do'],
    menuId: 'entity',
    toolTip: 'What We Do as Entity',
    type: 'WhatWeDo'
}, {
    id: 'action',
    title: 'Action',
    annotation: 'Action',
    menuId: 'action',
    toolTip: 'An Action That We Take'
}, {
    id: 'reason',
    title: 'Reason',
    annotation: 'Reason',
    menuId: 'reason',
    toolTip: 'Reason For an Action'
}, {
    id: 'work1234',
    title: 'Work',
    annotation: 'Work',
    menuId: 'work',
    toolTip: 'Work That we Do'
}, {
    id: 'application1',
    title: 'Application',
    annotation: 'application',
    toolTip: 'Represent Application',
    type: 'Text'
}, {
    id: 'a1',
    title: 'A',
    annotation: 'A',
    toolTip: 'Represent Application',
    menuId: 'empty',
    type: 'Text'
}, {
    id: 'communicationFunction1',
    title: 'Communication Function',
    annotation: 'communication function',
    toolTip: 'Represent Communication Function',
    menuId: 'empty',
    type: 'Text'

}, {
    id: 'f(x)1',
    title: 'f(x)',
    annotation: 'f(x)',
    toolTip: 'Represent Communication Function',
    menuId: 'empty',
    type: 'Text'
}, {
    id: 'commAppMixture',
    title: 'Comm App Mixture',
    annotation: {
        fill: 'white',
        radius: 35,
        content: [{
            content: 'Comm & App Mixture'
        }],
        ports: rectPorts
    },
    menuId: 'empty',
    toolTip: 'Communication Application Mixture',
    type: 'Circle'
}, {
    id: 'commAppMixture1',
    title: 'Comm App Mixture',
    annotation: {
        fill: 'white',
        radius: 40,
        content: [{
            content: 'x'
        }],
        ports: rectPorts
    },
    menuId: 'empty',
    toolTip: 'Communication Application Mixture',
    type: 'Circle'
}, {
    id: 'commAppMixture2',
    title: 'Comm App Mixture',
    annotation: {
        content: 'Communication Application Mixture',
        height: 120,
        width: 80
    },
    menuId: 'commMix',
    toolTip: 'Multi Inputs Comm & App Mixture',
}, {
    id: 'emptycontainer',
    title: 'Empty Container',
    toolTip: 'A Container to Add Part to',
    menuId: 'emptyContainer',
    type: 'emptycontainer'
}, {
    id: 'work',
    title: 'Work',
    annotation: {
        fill: 'white',
        radius: 40,
        content: [{
            content: 'Work'
        }],
        ports: rectPorts
    },
    menuId: 'workinput',
    toolTip: 'People Work Together',
    type: 'Circle'
}, {
    id: 'subFunction',
    title: 'Sub Function',
    annotation: 'Sub Communication Function',
    menuId: 'subFunction',
    toolTip: 'Function Inside Function',
    type: 'Sub'
}, {
    id: 'subApplication',
    title: 'Sub Application',
    annotation: 'Sub Application',
    menuId: 'subApplication',
    toolTip: 'Application Inside Application',
    type: 'Sub'
}, {
    id: 'subResult',
    title: 'Sub Result',
    annotation: 'Sub Result',
    menuId: 'subResult',
    toolTip: 'Result Inside Result',
    type: 'Sub'
}, {
    id: 'groupFunction',
    title: 'Group Function',
    annotation: 'Group Communication Function',
    menuId: 'groupFunction',
    toolTip: 'Group Communication Function',
    type: 'Group'
}, {
    id: 'groupApplication',
    title: 'Group Application',
    annotation: 'Group Application',
    menuId: 'groupApplication',
    toolTip: 'Denote Group of Application',
    type: 'Group'
}, {
    id: 'groupResult',
    title: 'Group Result',
    annotation: 'Group Communication Result',
    menuId: 'groupResult',
    toolTip: 'Group Communication Result',
    type: 'Group'
}, {
    id: 'group1',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Use to Group or Add Entities',
}, {
    id: 'continuityApplication',
    title: 'Continuity',
    annotation: {
        strokeWidth: 1,
        strokeDashArray: '10 5'
    },
    menuId: 'empty',
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity'
}];

//#endregion
function getCommApplication() {
    return applicationRects.map(shape => drawShape(shape));
}
//#region area and location
let areaData = [{
    id: 'locationOfOperation',
    title: 'Location of Operation',
    annotation: 'Location',
    menuId: 'location',
    toolTip: 'Identify Operation Location',
}, {
    id: 'siteOfOperationRect',
    title: 'Site of Operation',
    annotation: 'Site',
    menuId: 'location',
    toolTip: 'Identify Operation Site'
}, {
    id: 'mainArea',
    title: 'Main Area',
    annotation: {
        content: [{
            content: 'Main Area',
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 20 }
        }],
        ports: [],
        style: {
            strokeWidth: 4
        },
        height: 200,
        width: 800
    },
    menuId: 'location',
    toolTip: 'Identify The Main Area',
}, {
    id: 'siteOfOperation',
    title: 'Site of Operation',
    annotation: 'Site',
    toolTip: 'Identify a Site',
    menuId: 'location',
    type: 'House'
}, {
    id: 'workingareaAL',
    title: 'Working Area',
    annotation: {
        fill: 'none',
        radius: 75,
        content: [{
            content: 'Working Area'
        }]
    },
    menuId: 'location',
    toolTip: 'Identify a Working Area',
    type: 'Circle'
}, {
    id: 'locationAL',
    title: 'Location',
    annotation: {
        fill: 'none',
        radius: 30,
        content: [{
            content: 'Locaiton'
        }]
    },
    menuId: 'location',
    toolTip: 'Identify a Location',
    type: 'Circle'
}, {
    id: 'mobilityAL',
    title: 'Mobility',
    toolTip: 'Movement of a Person',
    menuId: 'empty',
    type: 'mobility'
}];
//#endregion
function getCommAreAndLocation() {
    return areaData.map(data => drawShape(data));
}
//#region person
var personPort1 = [
    {
        id: 'LeftCenter',
        offset: {
            x: 0, y: 0.5
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'LeftTop',
        offset: {
            x: 0, y: 0.25
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'LeftBottom',
        offset: {
            x: 0, y: 0.75
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'Bottom',
        offset: {
            x: 0.5, y: 1
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'RightCenter',
        offset: {
            x: 1, y: 0.5
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'RightTop',
        offset: {
            x: 1, y: 0.25
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'RightBottom',
        offset: {
            x: 1, y: 0.75
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'Top',
        offset: {
            x: 0.5, y: 0
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    }
];

var personPort2 = [
    {
        id: 'LeftCenter',
        offset: {
            x: 0, y: 0.5
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'LeftTop',
        offset: {
            x: 0, y: 0.25
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'LeftBottom',
        offset: {
            x: 0, y: 0.75
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'Bottom',
        offset: {
            x: 0.5, y: 1
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'RightCenter',
        offset: {
            x: 1, y: 0.5
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'RightTop',
        offset: {
            x: 1, y: 0.25
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'RightBottom',
        offset: {
            x: 1, y: 0.75
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    },

    {
        id: 'Top',
        offset: {
            x: 0.5, y: 0
        },
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'X',
        width: 4,
        height: 4
    }
];
var personData = [{
    id: 'person',
    title: 'Person',
    annotation: ['Person Name', 'No Title'],
    toolTip: 'A Person Without Title',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'employee',
    title: 'Employeee',
    annotation: ['Person Name', 'Employee'],
    toolTip: 'A Person as Employee',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'manager',
    title: 'Manager',
    annotation: ['Person Name','Manager'],
    toolTip: 'A Person as Manager',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'teamLead',
    title: 'Team Lead',
    annotation: ['Person Name','Team Lead'],
    toolTip: 'A Person as Team Lead',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'customer',
    title: 'Customer',
    annotation: ['Person Name', 'Customer'],
    toolTip: 'A Person as Customer',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'client',
    title: 'Client',
    annotation: ['Person Name', 'Client'],
    toolTip: 'A Person as Client',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'contractor',
    title: 'Contractor',
    annotation: ['Person Name','Conractor'],
    toolTip: 'A Person as Contractor',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'salePerson',
    title: 'Sale Person',
    annotation: ['Person Name', 'Sale Rep'],
    toolTip: 'A Person as Sale Rep',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'servicePerson',
    title: 'Service Person',
    annotation: ['Person Name', 'Service Rep'],
    toolTip: 'A Person as Service Rep',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'supportPerson',
    title: 'Support Person',
    annotation: ['Person Name', 'Support Rep'],
    toolTip: 'A Person as Service Rep',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'testPerson',
    title: 'Test Person',
    annotation: ['Person Name', 'Test Person'],
    toolTip: 'A Person Who Conducts Test',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'inspector',
    title: 'Inspector',
    annotation: ['Person Name', 'Inspector'],
    toolTip: 'A Person as Inspector',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'agent',
    title: 'Agent',
    annotation: ['Person Name', 'Agent'],
    toolTip: 'A Person as Agent',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'user',
    title: 'User',
    annotation: ['Person Name','User'],
    toolTip: 'A person as a User',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'other',
    title: 'Other',
    annotation: ['Person Name', 'Other Title'],
    toolTip: 'Other Person Not Listed',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'personNoframe',
    title: 'Person',
    annotation: ['Person Name', 'No Title'],
    toolTip: 'Sketched Without Frame',
    menuId: 'personShapes',
    type: 'PersonNoFrame'
}, {
    id: 'personWithNumber',
    title: 'P[n]',
    annotation: ['Pn'],
    toolTip: 'Denote Person With Number',
    menuId: 'personShapes',
    type: 'PersonNoFrame'
}, {
    id: 'PersonWithNumberAndFrame123',
    title: 'x[n]',
    annotation: ['Xn'],
    toolTip: 'Denote Person With Number',
    menuId: 'personShapes',
    type: 'Person'
}, {
    id: 'groupOfPeople',
    title: 'Group of People',
    annotation: 'Group Name',
    toolTip: 'Represents a Group of People',
    menuId: 'groupPeople',
    type: 'PersonGroup'
}, {
    id: 'communicationHolder',
    title: 'Comunication Holder',
    annotation: 'Communication Holder',
    menuId: 'communicationHolder',
    toolTip: 'Hold Person Communication'
}, {
    id: 'externalCommunicationHolder',
    title: 'External Communication Holder',
    annotation: 'External Communication Holder',
    menuId: 'communicationHolder',
    toolTip: 'Hold Person Communication'
}, {
    id: 'communicationMixturePerson1',
    title: 'Communication Mixture',
    annotation: {
        content: [{
            content: 'Comm Mix'
        }],
        ports: [{
            id: 'top-port',
            offset: {x: 0.5, y: 0},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right-port',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'bottom-port',
            offset: {x: 0.5, y: 1},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 50,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Two Input Communication',
}, {
    id: 'communicationMixturePerson2',
    title: 'Communication Mixture',
    annotation: {
        content: [{
            content: 'Comm Mix'
        }],
        ports: [{
            id: 'top-port',
            offset: {x: 0.5, y: 0},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right-port',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'bottom-port',
            offset: {x: 0.5, y: 1},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 50,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Multi Input Communication'
}, {
    id: 'personAspect',
    title: 'Person Aspect',
    annotation: 'Person Aspect',
    menuId: 'personAspect',
    toolTip: 'Identify Aspect of a Person'
}, {
    id: 'groupPreson1',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Use to Group or Add Entities'
}, {
    id: 'commHolderGroup',
    title: 'Comm Holder Group',
    annotation: 'Communication Holder',
    toolTip: 'Group of Communication Holder',
    menuId: 'communicationHolder',
    type: 'Overlap'
}, {
    id: 'externalCommHolderGroup',
    title: 'External Comm Holder Group',
    annotation: 'External Communication Holder',
    toolTip: 'Group of External Communication Holder',
    menuId: 'communicationHolder',
    type: 'Overlap'
}, {
    id: 'coverPerson',
    title: 'Cover',
    toolTip: 'Use to Cover a Person',
    menuId: 'cover',
    type: 'cover'
}, {
    id: 'mobilityPerson',
    title: 'Mobility',
    toolTip: 'Movement of a Person',
    menuId: 'personShapes',
    type: 'mobility'
},  {
    id: 'continuityPerson',
    title: 'Continuity',
    annotation: {
        strokeWidth: 0,
        strokeDashArray: '',
        fill: 'transparent',
        ports: []
    },
    toolTip: 'Show Continuity of Entity',
    menuId: 'empty',
    type: 'Continuity'
}];
//#endregion
function getCommPerson() {
    return personData.map(shape => drawShape(shape));
}
//#region comm link
let commLinkData = [{
    id: 'communicationLink',
    title: 'Communication Link',
    annotation: {
        content: [{
            content: 'Communicate',
            alignment: 'Before',
            margin: {
                top: 2, bottom: 2, left: 2, right: 2
            }
        }],
        shape: {
            target: 'Arrow'
        },
        style: {
            fill: 'black',
            strokeColor: 'black',
            strokeWidth: 1,
        }
    },
    menuId: 'edit',
    toolTip: 'Right Communication Flow',
    type: 'Arrow'
}, {
    id: 'communicationLinkLeft',
    title: 'Communication Link',
    annotation: {
        content: [{
            content: 'Communicate',
            alignment: 'After',
            margin: {
                top: 2, bottom: 2, left: 2, right: 2
            }
        }],

        shape: {
            source: 'Arrow'
        },

        style: {
            fill: 'black',
            strokeColor: 'black',
            strokeWidth: 1,
        }
    },
    menuId: 'edit',
    toolTip: 'Left Communication Flow',
    type: 'Arrow'
}, {
    id: 'bidirectionalCommunicationLink',
    title: 'Bidirectional Communication Link',
    annotation: {
        content: [{
            content: 'Communicate',
            alignment: 'Before',
            margin: {
                top: 2, bottom: 2, left: 2, right: 2
            }
        }],

        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },

        style: {
            fill: 'black',
            strokeColor: 'black',
            strokeWidth: 1,
        }
    },
    menuId: 'edit',
    toolTip: 'Left & RIght Communication Flow',
    type: 'Arrow'
}, {
    id: 'rightCommunicationLink',
    title: 'Right Communication Link',
    annotation: {
        content: 'Information'
    },
    menuId: 'edit',
    toolTip: 'Communication Link With Information',
    type: 'WideArrow'
}, {
    id: 'leftCommunicationLink',
    title: 'Left Communication Link',
    annotation: {
        content: 'Information',
        direction: 'left'
    },
    menuId: 'edit',
    toolTip: 'Communication Link With Information',
    type: 'WideArrow'
}, {
    id: 'biDirectionalArrow',
    title: 'Bidirectional Arrow',
    annotation: 'Information',
    menuId: 'edit',
    toolTip: 'Communication Link With Information',
    type: 'BiWideArrow'
}, {
    id: 'communicationLink1',
    title: 'Communication Link',
    annotation: 'Information',
    menuId: 'edit',
    toolTip: 'Communication Link With Information',
    type: 'CylinderArrow'
}];
//#endregion
function getCommLink() {
    return commLinkData.map(data => drawShape(data));
}
//#region comm Label
let commLabelData = [{
    id: 'informationlabel',
    title: 'Information Label',
    annotation: {
        type: 'Bezier',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Label',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Show More Entity Info',
    type: 'Arrow'
}, {
    id: 'communication12',
    title: 'Communication',
    annotation: {
        type: 'Bezier',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Communicate',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Communication Work Related',
    type: 'Arrow'
}, {
    id: 'toDO',
    title: 'To Do',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'To Do',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Use With Other Entity',
    type: 'Arrow'
}, {
    id: 'pointTo',
    title: 'Point To',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Point To',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Word Point To Entity',
    type: 'Arrow'
}, {
    id: 'giveRiseTo',
    title: 'Give Rise To',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Give Rise To',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Give Rise to Entity',
    type: 'Arrow'
}, {
    id: 'errorToProblem',
    title: 'Error to Problem',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Give Rise To',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Comm Error Rise to Problem',
    type: 'Arrow'
}, {
    id: 'relatedTo',
    title: 'Related To',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Related To',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Related to Entity',
    type: 'Arrow'
}, {
    id: 'by',
    title: 'By',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'By',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Related to Entity By Entity',
    type: 'Arrow'
}, {
    id: 'depend',
    title: 'Depend',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Depend',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Depend on Entity',
    type: 'Arrow'
}, {
    id: 'agree',
    title: 'Agree',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Agree',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Agree With Entity',
    type: 'Arrow'
}, {
    id: 'match',
    title: 'Match',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Match',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Match With Entity',
    type: 'Arrow'
}, {
    id: 'have',
    title: 'Have',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Have',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Have Entity',
    type: 'Arrow'
}, {
    id: 'Interact',
    title: 'Interact',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Have',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Interact Entity',
    type: 'Arrow'
}, {
    id: 'Use',
    title: 'Use',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Use',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Use Entity',
    type: 'Arrow',
}, {
    id: 'compare',
    title: 'Compare',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Compare',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Compare Entity',
    type: 'Arrow'
}, {
    id: 'attach',
    title: 'Attach',
    annotation: {
        type: 'Straight',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'Attach',
            alignment: 'Before'
        }]
    },
    menuId: 'edit',
    toolTip: 'Entity Attach to Entity',
    type: 'Arrow'
}, {
    id: 'curlBracesLeft1',
    title: 'Curl Braces',
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
    },
    menuId: 'edit',
    toolTip: 'Left Braces',
    type: 'Curly'
}, {
    id: 'curlBracesRight2',
    title: 'Curl Braces',
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
    },
    menuId: 'edit',
    type: 'CurlyClose',
    toolTip: 'Right Braces',
}];

//#endregion
function getCommLabel() {
    return commLabelData.map(data => drawShape(data));
}
//#region commSignal
let commSignalData = [{
    id: 'greenCommSignal',
    title: 'Green Comm Signal',
    annotation: {
        fill: 'LimeGreen',
        radius: 12.5,
        isPoint: true
    },
    menuId: 'edit',
    toolTip: 'Represents a Comm Without Error',
    type: 'Circle'
}, {
    id: 'redCommSignal',
    title: 'Red Comm Signal',
    annotation: {
        fill: 'Red',
        radius: 12.5,
        isPoint: true
    },
    menuId: 'edit',
    toolTip: 'Represents a Comm With Error',
    type: 'Circle'
}, {
    id: 'blueCommSignal',
    title: 'Blue Comm Signal',
    annotation: {
        fill: 'Blue',
        radius: 12.5,
        isPoint: true
    },
    menuId: 'edit',
    toolTip: 'Represents a Comm as Feedback',
    type: 'Circle'
}, {
    id: 'greenSignalPath',
    title: 'Green Signal Path',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        style: {
            fill: 'LimeGreen',
            strokeColor: 'LimeGreen',
            strokeWidth: 1
        }
    },
    menuId: 'edit',
    toolTip: 'Show Green Communication Flow',
    type: 'Arrow'
}, {
    id: 'redSignalPath',
    title: 'Red Signal Path',
    annotation: {
        shape: {
            target: 'Arrow'
        },

        style: {
            fill: 'Red',
            strokeColor: 'Red',
            strokeWidth: 1,
        }
    },
    menuId: 'edit',
    toolTip: 'Show Red Communication Flow',
    type: 'Arrow'
}, {
    id: 'blueSignalPath',
    title: 'Blue Signal Path',
    annotation: {
        shape: {
            target: 'Arrow'
        },

        style: {
            fill: 'Blue',
            strokeColor: 'Blue',
            strokeWidth: 1
        }
    },
    menuId: 'edit',
    toolTip: 'Show Blue Communication Flow',
    type: 'Arrow'
}];

//#endregion
function getCommSignal() {
    return commSignalData.map(data => drawShape(data));
}
//#region communication
var communicationData = [{
    id: 'communicationEntity',
    title: 'Communication Entity',
    annotation: 'Communication',
    menuId: 'communication',
    toolTip: 'Represents a Communication'
}, {
    id: 'commText',
    title: 'Communication',
    annotation: 'Communication',
    menuId: 'communication',
    toolTip: 'Represents a Communication',
    type: 'Text'
},{
    id: 'x',
    title: 'x',
    annotation: 'x',
    menuId: 'communication',
    toolTip: 'Represent a Communication'
}, {
    id: 'word',
    title: 'Word',
    annotation: 'Word',
    menuId: 'word',
    toolTip: 'Represents an Actual Word'
}, {
    id: 'sentence',
    title: 'Sentence',
    annotation: 'Sentence',
    menuId: 'sentence',
    toolTip: 'Represents an Actual Sentence'
}, {
    id: 'paragraph',
    title: 'Paragraph',
    annotation: 'Paragraph',
    menuId: 'paragraph',
    toolTip: 'Represents an Actual Pragraph'
}, {
    id: 'communicationElement',
    title: 'Communication Element',
    annotation: 'Communication Element',
    menuId: 'communicationElement',
    toolTip: 'Represent a Communication Element'
}, {
    id: 'communicationProcess',
    title: 'Communication Process',
    annotation: 'Communication Process',
    menuId: 'commMix',
    toolTip: 'Represents a Process of Communication'
},
{
    id: 'information',
    title: 'Information',
    annotation: 'Information',
    menuId: 'information',
    toolTip: 'Respresents an actual Information'
}, {
    id: 'entity',
    title: 'Entity',
    annotation: 'Entity',
    menuId: 'entity',
    toolTip: 'Represents an Actual Entity'
}, {
    id: 'question',
    title: 'Question',
    annotation: 'Question',
    menuId: 'question',
    toolTip: 'Represent an Actual Question'
}, {
    id: 'answer',
    title: 'Answer',
    annotation: 'Answer',
    menuId: 'answer',
    toolTip: 'Represents an Actual Sentence'
}, {
    id: 'unkownEntity',
    title: 'Unknown Entity',
    annotation: 'Unknown Entity',
    menuId: 'entity',
    toolTip: 'Represents an Unkown Entity'
}, {
    id: 'blankEntity',
    title: 'Blank Entitiy',
    annotation: '?',
    menuId: 'entity',
    toolTip: 'Existed Whether or Not'
}, {
    id: 'function',
    title: 'Function',
    annotation: 'Function',
    menuId: 'function',
    toolTip: 'Entity as Function'
}, {
    id: 'aspect',
    title: 'Aspect',
    annotation: 'Aspect',
    menuId: 'aspect',
    toolTip: 'Entity as Aspect'
}, {
    id: 'test',
    title: 'Test',
    annotation: 'Test',
    menuId: 'test',
    toolTip: 'Entity as Test'
}, {
    id: 'functionStatus',
    title: 'Function Status',
    annotation: 'Function Status',
    menuId: 'functionstatus',
    toolTip: 'Entity as Function Status'
}, {
    id: 'entityUsage',
    title: 'Entity Usage',
    annotation: 'Entity Usage',
    menuId: 'functionstatus',
    toolTip: 'Entity as Entity Usage'
}, {
    id: 'picture',
    title: 'Picture',
    annotation: 'Picture',
    menuId: 'picture',
    toolTip: 'Represents an actual Picture'
}, {
    id: 'video',
    title: 'Video',
    annotation: 'Video',
    menuId: 'video',
    toolTip: 'Represents an Actual Video'
}, {
    id: 'audio',
    title: 'Audio',
    annotation: 'Audio',
    menuId: 'audio',
    toolTip: 'Represents an actual Audio'
}, {
    id: 'dictionary',
    title: 'Dictionary',
    annotation: {
        radius: 50,
        fill: 'none',
        content: [{
            offset: {x: 0.5, y: 1},
            margin: {top: 8},
            content: 'Dictonary'
        }]
    },
    menuId: 'dictionary',
    toolTip: 'Represent a Dictionary of Words',
    type: 'Circle'
}, {
    id: 'wordCommunication',
    title: 'Word',
    annotation: {
        fill: 'none',
        radius: 25,
        content: [{
            content: 'Word'
        }],
    },
    menuId: 'wordCircle',
    toolTip: 'Represent a Word',
    type: 'Circle'
}, {
    id: 'collection',
    title: 'Collection',
    annotation: {
        radius: 50,
        fill: 'none',
        content: [{
            offset: {x: 0.5, y: 1},
            margin: {top: 8},
            content: 'Collection'
        }]
    },
    menuId: 'collection',
    toolTip: 'Represent a Collection of Entity',
    type: 'Circle'
}, {
    id: 'entityCommunication',
    title: 'Entity',
    annotation: {
        fill: 'none',
        radius: 25,
        content: [{
            content: 'Entity'
        }],
    },
    menuId: 'entitycircle',
    toolTip: 'Represents an Entity',
    type: 'Circle'
}, {
    id: 'x1',
    title: 'x',
    annotation: 'x',
    toolTip: 'Represents Communication',
    menuId: 'communication',
    type: 'Text'
}, {
    id: 'relationship123',
    title: 'Relationship',
    annotation: {
        content: [{
            content: 'Relates'
        }],
        fill: 'white',
        radius: 35,
        ports: rectPorts
    },
    menuId: 'empty',
    toolTip: 'Use to Show a Relationship',
    type: 'Circle'
}, {
    id: 'comparision',
    title: 'Comparision',
    annotation: {
        content: [{
            content: 'Compare'
        }],
        fill: 'white',
        radius: 35,
        ports: rectPorts
    },
    menuId: 'empty',
    toolTip: 'Use to Show a Comparision',
    type: 'Circle'
}, {
    id: 'communicationMixtureCommuincation1',
    title: 'Communication Mixture',
    annotation: {
        content: [{
            content: 'Comm Mix'
        }],
        ports: [{
            id: 'top-port',
            offset: {x: 0.5, y: 0},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right-port',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'bottom-port',
            offset: {x: 0.5, y: 1},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 50,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Two Input Communication'
}, {
    id: 'communicationMixtureCommunication2',
    title: 'Communication Mixture',
    annotation: {
        content: [{
            content: 'Comm Mix'
        }],
        ports: [{
            id: 'top-port',
            offset: {x: 0.5, y: 0},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right-port',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'bottom-port',
            offset: {x: 0.5, y: 1},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 50,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Multi Input Communication'
}, {
    id: 'groupCommunication',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Use to Group or Add Entities'
}, {
    id: 'continuityComm',
    title: 'Continuity',
    annotation: {
        strokeWidth: '1',
        strokeDashArray: '10 5'
    },
    menuId: 'empty',
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity'
}, {
    id: 'entities',
    title: 'Entities',
    annotation: 'Entities',
    toolTip: 'Represents a Group of Entity',
    menuId: 'entity',
    type: 'Overlap'
}, {
    id: 'communicatonElements',
    title: 'Communication Elements',
    annotation: 'Communication Elements',
    menuId: 'communication',
    toolTip: 'A Group of Communication Element',
    type: 'Overlap'
}, {
    id: 'questions',
    title: 'Questions',
    annotation: 'Questions',
    toolTip: 'Represents a Group of Question',
    menuId: 'question',
    type: 'Overlap'
}, {
    id: 'answers',
    title: 'Answers',
    annotation: 'Answers',
    toolTip: 'Represents a Group of Answer',
    menuId: 'answer',
    type: 'Overlap'
}];
//#endregion
function getCommunication() {
    return communicationData.map(shape => drawShape(shape));
}
//#region Other Elements
let otherData = [{
    id: 'separationLineComm',
    title: 'Separation Line',
    annotation: {
        length: 400,
        style: {
            strokeDashArray: '10 5'
        }
    },
    menuId: 'edit',
    toolTip: 'Use to Show Separation',
    type: 'VerticalLine'
}, {
    id: 'time',
    title: 'Time',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Time',
            alignment: 'Before'
        }],
    },
    menuId: 'edit',
    toolTip: 'Identify a Time',
    type: 'Arrow'
}, {
    id: 'progress',
    title: 'Progress',
    annotation: {
        content: [{ content: '% Completed' }],
        height: 20,
        width: 400
    },
    menuId: 'edit',
    nodes: [],
    toolTip: 'Use to Show Progress',
}, {
    id: 'timeLine',
    title: 'Time Line',
    annotation: {
        content: [{
            content: 'Time',
            offset: { x: 1, y: 0.5 },
            margin: { left: 20 }
        }],
        length: 600,
        style: { strokeDashArray: '' }
    },
    menuId: 'edit',
    toolTip: 'Use For Graph or Chart',
    type: 'HorizontalLine'
}, {
    id: 'dateLine',
    title: 'Date Line',
    annotation: {
        content: [{
            content: 'Date',
            offset: { x: 0, y: 1 },
            margin: { top: 20, left: 10 }
        }],
        length: 600,
        style: { strokeDashArray: '' }
    },
    menuId: 'edit',
    toolTip: 'Insert a Date Line',
    type: 'VerticalLine'
}, {
    id: 'principleLineOthers',
    title: 'PrincipleLine',
    annotation: {
        length: 600,
        ports: [{
            id: 'Center',
            offset: {
                x: 0.5, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'Left',
            offset: {
                x: 0, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'Right',
            offset: {
                x: 1, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        style: {}
    },
    menuId: 'edit',
    toolTip: 'Principle of Operation Line',
    type: 'HorizontalLine'
}, {
    id: 'note',
    title: 'Note',
    annotation: 'My Note',
    toolTip: 'Represent a Note',
    menuId: 'edit',
    type: 'Note'
}, {
    id: 'nodeOthers',
    title: 'Node',
    annotation: {
        content: [{
            content: '1'
        }],
        radius: 15,
        fill: 'White'
    },
    menuId: 'edit',
    toolTip: 'Represent a Node',
    type: 'Circle'
}, {
    id: 'callOut',
    title: 'Callout',
    annotation: 'My Text',
    menuId: 'edit',
    toolTip: 'Represent a Callout',
    type: 'Callout'
}, {
    id: 'nodeTableComm',
    title: 'Node Table',
    annotation: {
        content: ['Node Number', 'Information', '1', ''],
        columnNo: 2
    },
    menuId: 'edit',
    toolTip: 'Represents a Table of Node',
    type: 'Table'
}, {
    id: 'statement',
    title: 'Statement',
    annotation: 'Statement',
    toolTip: 'Identify a Statement',
    menuId: 'edit',
    type: 'Text'
}, {
    id: 'numberIdentification',
    title: 'Number Identification',
    annotation: '#1',
    toolTip: 'Use to Identify Entity',
    menuId: 'edit',
    type: 'Text'
}, {
    id: 'entityInclusionLineHorizontal',
    title: 'Entity Inclusion Line Horizontal',
    annotation: {
        length: 600,
        ports: [{
            id: 'Center',
            offset: {
                x: 0.5, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'Left',
            offset: {
                x: 0, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'Right',
            offset: {
                x: 1, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        style: {}
    },
    toolTip: 'Entity has Entities',
    menuId: 'edit',
    type: 'HorizontalLine'
}, {
    id: 'entityInclusionLineVertical',
    title: 'Entity Inclusion Line Vertical',
    annotation: {
        length: 600,
        ports: [{
            id: 'Center',
            offset: {
                x: 0.5, y: 0.5
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'Top',
            offset: {
                x: 0.5, y: 0
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'Right',
            offset: {
                x: 0.5, y: 1
            },
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        style: {}
    },
    menuId: 'edit',
    toolTip: 'Entity has Entities',
    type: 'VerticalLine'
}, {
    id: 'changeofApplication',
    title: 'Change of Application',
    annotation: {
        content: ['Communication', '', 'Application Value', '', 'Communication Function', ''],
        columnNo: 3
    },
    menuId: 'edit',
    toolTip: 'Communication change Application Tablulated Form',
    type: 'Table'
}, {
    id: 'changeofApplication1',
    title: 'Change of Application',
    annotation: [{
        content: 'Communication',
        offset: { x: 0.5, y: 1},
        margin: {top: 10}
    }, {
        content: 'Application',
        offset: {x: 0, y:0.5},
        margin: {right: 10}
    }],
    menuId: 'edit',
    toolTip: 'Communication Change Application Graphical Form',
    type: 'Graph'
}, {
    id: 'graphLine',
    title: 'Graph Line',
    annotation: {
        type: 'Straight',
        shape: {}
    },
    menuId: 'edit',
    toolTip: 'Use to Draw Graph',
    type: 'Arrow'
}, {
    id: 'graphPoint',
    title: 'Graph Point',
    annotation: {
        fill: 'black',
        radius: 5,
        isPoint: true
    },
    menuId: 'edit',
    toolTip: 'Use to Draw Graph',
    type: 'Circle'
}, {
    id: 'graphLineAndPoint',
    title: 'Graph Line and Point',
    annotation: {
        fill: 'black',
        shape: {
            target: 'Circle'
        }
    },
    menuId: 'edit',
    toolTip: 'Use to Draw Graph',
    type: 'Arrow'
}, {
    id: 'xAxis',
    title: 'X-Axis',
    annotation: {
        length: 600,
        content: [{
            content: 'X-Axis',
            offset: {x: 0.5, y: 1},
            margin: {top: 15}
        }],
        style: {}
    },
    menuId: 'edit',
    toolTip: 'Use to Graph',
    type: 'HorizontalLine'
}, {
    id: 'yAxis',
    title: 'Y-Axis',
    annotation: {
        length: 600,
        content: [{
            content: 'X-Axis',
            offset: {x: 0, y: 0.5},
            margin: {right: 15}
        }],
        style: {}
    },
    menuId: 'edit',
    toolTip: 'Use to Graph',
    type: 'VerticalLine'
}];

//#endregion

function getCommOthers() {
    return otherData.map(data => drawShape(data));
}

//#region Quick Elements
let quickElementsComm = [{
    // person with frame
    id: 'quickperson',
    title: 'Person',
    annotation: ['Person Name', 'No Title'],
    toolTip: 'A Person Without Title',
    menuId: 'personShapes',
    type: 'Person'
}, {
    // person without frame
    id: 'quickperson1',
    title: 'Person',
    annotation: ['Person Name', 'No Title'],
    toolTip: 'A Person Without Title',
    menuId: 'personShapes',
    type: 'PersonNoFrame'
}, {
    // Communication Entity
    id: 'quickcommunicationEntity',
    title: 'Communication Entity',
    annotation: 'Communication',
    menuId: 'communication',
    toolTip: 'Represents a Communication'
}, {
    id: 'quickCommtext',
    title: 'Communication',
    annotation: 'Communication',
    menuId: 'communication',
    toolTip: 'Represents a Communication',
    type: 'Text'
}, {
    id: 'quickApplication',
    title: 'Application',
    annotation: 'Application',
    menuId: 'application',
    toolTip: 'Represent an Actual Application'
}, {
    id: 'quickcommunicationFunction',
    title: 'Communication Function',
    annotation: 'Communication Function',
    menuId: 'commFunction',
    toolTip: 'Function of Out Communication'
}, {
    id: 'quickCommunicationResult',
    title: 'Communication Result',
    annotation: 'Communication Result',
    menuId: 'commResult',
    toolTip: 'Result of an Application'
}, {
    id: 'quickcommunicationFunction1',
    title: 'Communication Function',
    annotation: 'Communication Function',
    menuId: 'empty',
    toolTip: 'Represent Commnunication Function',
    type: 'text'
}, {
    id: 'quickCommAppMixture',
    title: 'Communication App Mixture',
    annotation: {
        fill: 'white',
        radius: 35,
        content: [{
            content: 'Comm & App Mixture'
        }],
        ports: rectPorts
    },
    menuId: 'empty',
    toolTip: 'Communication Application Mixture',
    type: 'Circle'
}, {
    id: 'quickcommAppMixture1',
    title: 'Commmunication App Mixture',
    annotation: {
        fill: 'white',
        radius: 35,
        content: [{
            content: 'x'
        }],
        ports: rectPorts
    },
    menuId: 'empty',
    toolTip: 'Communication Application Mixture',
    type: 'Circle'
}, {
    id: 'quickCommAppMixture2',
    title: 'Communciation App Mixture',
    annotation: {
        content: [{
            content: 'Comm App Mixture'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    menuId: 'commMix',
    toolTip: 'Multi Inputs Comm & App',

}];
//#endregion

function getQuickComm() {
    return quickElementsComm.map(data => drawShape(data));
}