let instrumentData = [{
    id: 'instrument',
    title: 'Instrument',
    annotation: 'Instrument',
    toolTip: 'Identify an Instrument'
}, {
    id: 'method',
    title: 'Method',
    annotation: 'Method',
    toolTip: 'Identify a Method'
}, {
    id: 'instrumentDerivative',
    title: 'Instrument Derivative',
    annotation: 'Instrument Derrivative',
    toolTip: 'Identify Derrivative of Method'
}, {
    id: 'derrivative',
    title: 'Derrivative',
    annotation: 'Derrivative',
    toolTip: 'Identify a Derivative'
}, {
    id: 'naturalElement',
    title: 'Natural Element',
    annotation: 'Natural Element',
    toolTip: 'Identify a Natural Element'
}, {
    id: 'inputElement',
    title: 'Input Element',
    annotation: 'Input Element',
    toolTip: 'Identify an Input Element'
}, {
    id: 'exchangeableElement',
    title: 'Exchangeable Element',
    annotation: 'Exchangeable Element',
    toolTip: 'Identify an Exchangeable Element'
}, {
    id: 'instrumentDerivativeFunction',
    title: 'Instrument Derivative Function',
    annotation: 'Instrument Derivative Function',
    toolTip: 'Identify Derivative Function of Instrument'
}, {
    id: 'methodDerivativeFunction',
    title: 'Method Derivative Function',
    annotation: 'Method Derivative Function',
    toolTip: 'Identify Derivative Funciton of Method'
}, {
    id: 'methodFunction',
    title: 'Method Function',
    annotation: 'Method Function',
    toolTip: 'Identify Function of Method'
}, {
    id: 'instrumentFunction',
    title: 'Instrument Function',
    annotation: 'Instrument Function',
    toolTip: 'Identify Instrument Function'
}, {
    id: 'instrumentServiceFunction',
    title: 'Instrument Service Function',
    annotation: 'Instrument Service Function',
    toolTip: 'Identify Instrument Service Function'
}, {
    id: 'serviceFunciton',
    title: 'Service Function',
    annotation: 'Service Function',
    toolTip: 'Identify Service Function'
}, {
    id: 'methodExecutedFunction',
    title: 'Method Executed Funciton',
    annotation: 'Method Executed Function',
    toolTip: 'Identify Method Executed Function'
}, {
    id: 'functionToInstrument',
    title: 'Function To Instrument',
    annotation: 'Function To Instrument',
    toolTip: 'Identify Function to Instrument'
}, {
    id: 'functionToMethod',
    title: 'Function To Method',
    annotation: 'Function To Method',
    toolTip: 'Identify Function to Method'
}, {
    id: 'ne',
    title: 'NE',
    annotation: 'NE',
    toolTip: 'Identify Natural Element'
}, {
    id: 'ie',
    title: 'IE',
    annotation: 'IE',
    toolTip: 'Identify Input Element'
}, {
    id: 'dl/dT',
    title: 'dl/dT',
    annotation: 'dl/dT',
    toolTip: 'Identify Instrument Derivative'
}, {
    id: 'naturalElement',
    title: 'Natural Element',
    annotation: 'New Shape please',
    toolTip: 'Identify an Input Element',
    type: 'Natural'
}, {
    id: 'inputElements',
    title: 'Input Elements',
    annotation: 'Input Elements',
    toolTip: 'Identify Group Exchange Elements',
    type: 'Overlap'
}, {
    id: 'exchangeElements',
    title: 'Exchange Elements',
    annotation: 'Exchange Elements',
    toolTip: 'Identify Group Exchange Elements',
    type: 'Overlap'
}, {
    id: 'equation3',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation'
}];

function getInstrument() {
    return instrumentData.map(data => drawShape(data));
}