let systemData = [{
    id: 'physicalSystem',
    title: 'Physical System',
    annotation: 'System',
    toolTip: 'Identify a Person',
    type: 'Person'
}, {
    id: 'physicalSystem1',
    title: 'Physical System',
    annotation: 'System',
    toolTip :'Identify a Person',
    type: 'PersonNoFrame'
}, {
    id: 's[n]',
    title: 'S[n]',
    annotation: 'Sn',
    toolTip: 'Identify a Person',
    type: 'Person'
}, {
    id: 's[n]1',
    title: 'S[n]',
    annotation: 'Sn',
    toolTip: 'Identify a Person',
    type: 'PersonNoFrame'
}, {
    id: 'x[n]',
    title: 'x[n]',
    annotation: 'Xn',
    toolTip: 'Identify a Person',
    type: 'Person'
}, {
    id: 'x[n]1',
    title: 'x[n]',
    annotation: 'Xn',
    toolTip: 'Identify a Person',
    type: 'PersonNoData'
}, {
    id: 'physicalSystem',
    title: 'Physical System',
    annotation: 'System',
    toolTip: 'Identify a Person'
}, {
    id: 's',
    title: 'S',
    annotation: 'S',
    toolTip: 'Identify a Person'
}, {
    id: 'S',
    title: 'S',
    annotation: 'S',
    toolTip: 'Identify a Person',
    type: 'DottedOverlap'
}, {
    id: 'groupPhysicalSystem',
    title: 'Group Physical System',
    annotation: 'Change Shape',
    toolTip: 'Identify Group of Person',
    type: 'PersonGroup' 
}, {
    id: 'groupPhysicalSystem1',
    title: 'Group Physical System',
    annotation: 'Systems',
    toolTip: 'Identify Group of Person',
    type: 'Overlap'
}, {
    id: 'groupPhysicalSyste2',
    title: 'Group Physical System',
    annotation: 'Change shape',
    toolTip: 'Identify Group of Person',
    type: 'DottedOverlap'
}, {
    id: 's[n]2',
    title: 'S[n]',
    annotation: 'Sn',
    toolTip: 'Represents The Physical System',
}, {
    id: 's[n]3',
    title: 'S[n]',
    annotation: 'Sn',
    toolTip: 'Represents The Physical System',
    type: 'Text'
}, {
    id: 'group',
    title: 'Group',
    annotation: 'Group',
    toolTip: 'Use to Group or Add Entities',
    type: 'Vertical'
}, {
    id: 'continuity',
    title: 'Continuity',
    toolTip: 'Show Continuity of Entity',
    type: 'Contuinity'
}, {
    id: 'equation',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation',
}];

function getSystem() {
    return systemData.map(data => drawShape(data));
}