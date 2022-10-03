let fundamentalData = [{
    id: 'fundamentalTheory',
    title: 'Fundamental Theory',
    annotation: 'Fundamental Theory',
    toolTip: 'Identify The Fundamental of Theory'
}, {
    id: 'fundamentalCommunication',
    title: 'Fundamental Commmunication',
    annotation: 'Fundamental Communication',
    toolTip: 'Identify The Fundamental of Communication Theory'
}, {
    id: 'fundamentalInformationTheory',
    title: 'Fundamental Information Theory',
    annotation: 'Fundamental Information Theory',
    toolTip: 'Identify The Fundamental of Information Theory'
}, {
    id: 'fundamentalInstrumentationTheory',
    title: 'Fundamental Instrumentation Theory',
    annotation: 'Fundamental Instrumentation Theory',
    toolTip: 'Identify The Fundamental of Instrumentation Theory'
}, {
    id: 'fundamentalEducation',
    title: 'Fundamental Education Theory',
    annotation: 'Fundamental Education Theory',
    toolTip: 'Identify The Fundamental of Education Theory'
}, {
    id: 'fundamentalPower',
    title: 'Fundamental Power Theorem',
    annotation: 'Fundamental Power Theorem',
    toolTip: 'Identify The Fundamental of The Power Theorem'
}, {
    id: 'fundamentalMarketingTheory',
    title: 'Fundamental Marketing Theory',
    annotation: 'Fundamental Marketing Theory',
    toolTip: 'Identify The Fundamanetal of Theory of Marketing',
}, {
    id: 'fundamentalExchangeSystemTheory',
    title: 'Fundamental Exchange System Theory',
    annotation: 'Fundamental Exchange System Theory',
    toolTip: 'Identify The Fundamental of Exchange System Theory',
}, {
    id: 'fundamentalGammingTheory',
    title: 'Fundamental Gamming Theory',
    annotation: 'Fundamental Gamming Theory',
    toolTip: 'Identify The Fundamental of The Gamming Theory'
}, {
    id: 'fundamentalWorkTheory',
    title: 'Fundamental Work Theory',
    annotation: 'Fundamental Work Theory',
    toolTip: 'Identify The Fundamental of Work Theory',
}, {
    id: 'fundamentalReproductionTheory',
    title: 'Fundamental Reproduction Theory',
    annotation: 'Fundamental Reproduction Theory',
    toolTip: 'Identify The Fundamental Reporoduction Theory',
}, {
    id: 'fundamentalUtilizationTheory',
    title: 'Fundamental Reproduction Theory',
    annotation: 'Fundamental Reproduction Theory',
    toolTip: 'Identify The Fundamental of The Reproduction Theory'
}, {
    id: 'fundamentalPresentedTheory',
    title: 'Fundamental Presented Theory',
    annotation: 'Fundamental Presented Theory',
    toolTip: 'Identify The Fundamental of a Presented Theory'
}, {
    id: 'fundamentalInterpretedTheory',
    title: 'Fundamental Interpreted Theory',
    annotation: 'Fundamental Interpreted Theory',
    toolTip: 'Identify The Fundamental of a Interpreted Theory'
}, {
    id: 'fundamentalTheory1',
    title: 'Fundamental Theory',
    annotation: 'fT',
    toolTip: 'Identify The Fundamental Theory'
}, {
    id: 'fundamentalCommunicationTheory1',
    title: 'Fundamental Communication Theory',
    annotation: 'fKT',
    toolTip: 'Identify The Fundamental of Communication Theory'
}, {
    id: 'fundamentalUtilizationTheory',
    title: 'Fundamental Utilization Theory',
    annotation: 'fUT',
    toolTip: 'Identify The Fundamental of Our Utilization Theory'
}, {
    id: 'group2',
    title: 'Group',
    annotation: 'Group',
    toolTip: 'Use to Group or Add Entities',
    type: 'Vertical'
}, {
    id: 'linkednodefundamental',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
} ,{
    id: 'equation2',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation',
}];

function getFundamental() {
    return fundamentalData.map(data => drawShape(data));
}