let theoryData = [{
    id: 'theory',
    title: 'Theory',
    annotation: 'Theory',
    toolTip: 'Identify a Theory'
}, {
    id: 'theorem',
    title: 'Theorem',
    annotation: 'Theorem',
    toolTip: 'Identify a Theorem'
}, {
    id: 'communicationTheory',
    title: 'Communication Theory',
    annotation: 'Communication Theory',
    toolTip: 'Identify The Communication Theory'
}, {
    id: 'informationTheory',
    title: 'Information Theory',
    annotation: 'Information Theory',
    toolTip: 'Identify a Information Theory'
}, {
    id: 'instrumentationTheory',
    title: 'Instrumentation Theory',
    annotation: 'Instrumentation Theory',
    toolTip: 'Identify the Instrumentation Theory'
}, {
    id: 'educationTheory',
    title: 'Education Theory',
    annotation: 'Education Theory',
    toolTip: 'Identify The Education Theory'
}, {
    id: 'powerTheorem',
    title: 'Power Theorem',
    annotation: 'Power Theorem',
    toolTip: 'Identify The Power Theorem'
}, {
    id: 'marketingTheory',
    title: 'Marketing Theory',
    annotation: 'Marketing Theory',
    toolTip: 'Identify The Marketing Theory',
}, {
    id: 'exchangeSystemTheory',
    title: 'Exchange System Theory',
    annotation: 'Exchange System Theory',
    toolTip: 'Identify The Exchange System Theory'
}, {
    id: 'gammingTheory',
    title: 'Gamming Theory',
    annotation: 'Gamming Theory',
    toolTip: 'Identify Gamming Theory'
}, {
    id: 'workTheorem',
    title: 'Work Theorem',
    annotation: 'Work Theorem',
    toolTip: 'Identify The Work Theorem'
}, {
    id: 'reproductionTheory',
    title: 'Reproduction Theory',
    annotation: 'Reproduction Theory',
    toolTip: 'Identify The Reproduction Theory'
}, {
    id: 'utilizationTheory',
    title: 'Utilization Theory',
    annotation: 'Utilizatin Theory',
    toolTip: 'Identify Our Utilization Theory'
}, {
    id: 't',
    title: 'T',
    annotation: 'T',
    toolTip: 'Identify a Theory'
}, {
    id: 'theorem#',
    title: 'Theorem #',
    annotation: 'Theorem #',
    toolTip: 'Identify a Theorem'
}, {
    id: 'th[n]',
    title: 'Th[n]',
    annotation: 'Thn',
    toolTip: 'Identify a Theorem'
}, {
    id: 'communicationTheory1',
    title: 'Communication Theory',
    annotation: 'Kt',
    toolTip: 'Identify The Communication Theory'
}, {
    id: 'uT',
    title: 'Ut',
    annotation: 'Ut',
    toolTip: 'Identify Our Utilization Theory'
}, {
    id: 'interpretationFunction',
    title: 'Interpretation Function',
    annotation: 'Interpret',
    toolTip: 'Identify The Interpretation Function'
}, {
    id: 'applyTheory',
    title: 'Apply Theory',
    annotation: 'Apply',
    toolTip: 'Theory Application Function'
}, {
    id: 'applyTheory1',
    title: 'Apply Theory',
    annotation: 'Tr{ }',
    toolTip: 'Theory Application Function'
}, {
    id: 'presentedTheory',
    title: 'Presented Theory',
    annotation: 'Presented Theory',
    toolTip: 'Identify a Presented Theory'
}, {
    id: 'interpretedTheory',
    title: 'Interpreted Theory',
    annotation: 'Interpreted Theory',
    toolTip: 'Identify an Interpreted Thoery'
}, {
    id: 'presentedTheory1',
    title: 'Presented Theory',
    annotation: "A'",
    toolTip: 'Identify a Presented Theory'
}, {
    id: 'interpretedTheory1',
    title: 'Interpreted Theory',
    annotation: 'A',
    toolTip: 'Identify an Intepreted Thoery'
}, {
    id: 'reference',
    title: 'Reference',
    annotation: 'Need new Shape',
    toolTip: 'Identify The Given Reference',
    type: 'CircleCollection'
}, {
    id: 'reference1',
    title: 'Reference',
    annotation: 'Need new Shape',
    toolTip: 'Identify The Given Reference',
    type: 'CircleCollection'
}, {
    id: 'group1',
    title: 'Group',
    annotation: 'Group',
    toolTip: 'Use to Group or Add Entities',
    type: 'Vertical'
}, {
    id: 'continuity1',
    title: 'Continuity',
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity'
}, {
    id: 'equation1',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation'
}];

function getTheory() {
    return theoryData.map(data => drawShape(data));
}