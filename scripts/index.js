// Getting all comm nodes
let persons = getCommPerson();
let communication = getCommunication();
let application = getCommApplication();
let commLink = getCommLink();
let analysis = getCommAnalysis();
let commSignal = getCommSignal();
let area = getCommAreAndLocation();
let others = getCommOthers();
let commlabel = getCommLabel();
let quickComm = getQuickComm();

let system = getThoerySystem();
let thoery = getTheory();
let fundamental = getThoeryFundamental();
let interface = getTheoryInterface();
let theorySignal = getTheorySignal();
let instrument = getTheoryInstrument();
let functions = getTheoryFunction();
let stability = getTheoryStability();
let thoerylabel = getTheoryLabel();
let quickTheory = getQuickTheory();
let allShapes = [].concat(persons).concat(communication).concat(application).concat(commLink).
    concat(analysis).concat(commSignal).concat(area).concat(others).concat(commlabel).concat(system).
    concat(thoery).concat(fundamental).concat(interface).concat(theorySignal).concat(instrument).concat(functions).
    concat(stability).concat(thoerylabel);

allShapes = everyShape;

var text = JSON.stringify(allShapes);

// var a = document.createElement("a");
// var file = new Blob([text], {type: 'text/plain'});
// a.href = URL.createObjectURL(file);
// a.download = 'my.json';
// a.click();

// Initializing symbol palette
var commPalette = new ej.diagrams.SymbolPalette({
    expandMode: 'Single',
    palettes : [
        {id: 'quickshapes', expanded:false, symbols: quickComm, title: 'Quick Entities'},
        {id: 'person', expanded:true, symbols: persons, title:'Person'},
        {id: 'Communication', expanded:false, symbols: communication, title: 'Communication'},
        {id: 'Application', expanded: false, symbols: application, title: 'Application'},
        {id: 'CommmunicationLink', expanded: false, symbols: commLink, title: 'Communication Link'},
        {id: 'Analysis', expanded: false, symbols: analysis, title: 'Analysis'},
        {id: 'CommunicationSignal', expanded: false, symbols: commSignal, title: 'Communication Signal'},
        {id: 'AreaandLocation', expanded: false, symbols: area, title: 'Area and Location'},
        {id: 'OtherCommunicationElement', expanded: false, symbols: others, title: 'Other Communication Element'},
        {id: 'CommLabelPalette', expanded: false, symbols: commlabel, title: 'Label'},
    ],
    symbolHeight: 75, symbolWidth: 275,
    width: '100%', height: '100%',
    enableSearch: true,
    // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
    getSymbolInfo: (symbol) => {
        return { 
            fit: true,
            tooltip: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].toolTip : symbol.id,
            description: {
                overflow: 'Wrap',
                text: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].title : symbol.id,
                wrap: 'WrapWithOverflow'
            }
        };
    }
});

var theoryPalette = new ej.diagrams.SymbolPalette({
    expandMode: 'Single',
    palettes : [
        {id: 'quickshapestheory', expanded:false, symbols: quickTheory, title: 'Quick Entities'},
        {id: 'system', expanded:true, symbols: system, title:'System'},
        {id: 'theory', expanded:false, symbols: thoery, title:'Theory'},
        {id: 'fundamental', expanded:false, symbols: fundamental, title:'Fundamental'},
        {id: 'interface', expanded:false, symbols: interface, title:'Interface'},
        {id: 'signal', expanded:false, symbols: theorySignal, title:'Signal'},
        {id: 'instrument', expanded:false, symbols: instrument, title:'Instrument'},
        {id: 'functionpallete', expanded:false, symbols: functions, title:'Function'},
        {id: 'stability', expanded:false, symbols: stability, title:'Stability'},
        {id: 'label', expanded:false, symbols: thoerylabel, title:'Label'}
    ],
    symbolHeight: 75, symbolWidth: 300,
    width: '100%', height: '100%',
    enableSearch: true,
    // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
    getSymbolInfo: (symbol) => {
        return { 
            fit: true,
            tooltip: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].toolTip : symbol.id,
            description: {
                overflow: 'Wrap',
                text: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].title : symbol.id,
                wrap: 'WrapWithOverflow'
            }
        };
    }
});
// Appending symbol palette
commPalette.appendTo('#symbol-palette-comm');
theoryPalette.appendTo('#symbol-palette-theory');

// Function to switch palettes
function switchToTheory() {
    if (currentDomain === 1) {
        return;
    }
    currentDomain = 1;
    let commPalette = document.getElementById('symbol-palette-comm');
    let commModel = document.getElementById('comm-model-list');
    let theoryPalette = document.getElementById('symbol-palette-theory');
    let theoryModel = document.getElementById('theory-model-list');
    commPalette.style.display = 'none';
    commModel.style.display = 'none';
    theoryPalette.style.display = 'block';
    theoryModel.style.display = 'block';
    let commButton = document.getElementById('Ribbon_toCommunicationDomain');
    commButton.disabled = false;
    commButton.firstElementChild.classList.remove('disabled-button');

    let theoryButton = document.getElementById('Ribbon_toTheoryDomain');
    theoryButton.disabled = true;
    theoryButton.firstElementChild.classList.add('disabled-button');

    openTheoryTab();
}

function switchToComm() {

    if (currentDomain === 0) {
        return;
    }
    currentDomain = 0;
    let commPalette = document.getElementById('symbol-palette-comm');
    let commModel = document.getElementById('comm-model-list');
    let theoryPalette = document.getElementById('symbol-palette-theory');
    let theoryModel = document.getElementById('theory-model-list');
    commPalette.style.display = 'block';
    commModel.style.display = 'block';
    theoryPalette.style.display = 'none';
    theoryModel.style.display = 'none';
    let commButton = document.getElementById('Ribbon_toCommunicationDomain');
    commButton.disabled = true;
    commButton.firstElementChild.classList.add('disabled-button');

    let theoryButton = document.getElementById('Ribbon_toTheoryDomain');
    theoryButton.disabled = false;
    theoryButton.firstElementChild.classList.remove('disabled-button');
    openCommTab();
}


//diagram nam o day, bat dau cau truc o day
// Initializing and appending diagram
var diagram = new ej.diagrams.Diagram({
    width: '2000px', height: '2000px',
    rulerSettings: {
        showRulers: true,
        showRulers: true,
        horizontalRuler: { interval: 10, segmentWidth: 100, thickness: 20, tickAlignment: "RightOrBottom" },
        verticalRuler: { interval: 10, segmentWidth: 100, thickness: 20, tickAlignment: "RightOrBottom"}
    },
    bridgeDirection: 'Left',
    contextMenuSettings: {
        show: true,
        items: [{
            id: 'edit',
            text: 'Edit1'
        }],
        showCustomMenuOnly: true,
    },
    contextMenuOpen: function (args) {
        onOpenContextMenu(args);
    },
  getNodeDefaults: function (node) {
    var obj = {};
    if (!obj.children) {
      obj.constraints =
        ej.diagrams.NodeConstraints.Default |
        ej.diagrams.NodeConstraints.AllowDrop;
    }
    return obj;
  },
	drop:drop,
    created: function(args) {
        getModelData();
        openModelPage('main-project-model-comm');
      }
});
diagram.appendTo('#diagram');


function drop(args) {
    var node = args.element;
    var parentNode = args.target;
    setTimeout(() => {
      if (diagram.nodes.length > 1) {
        if (!node.children && node.id !== parentNode.id) {
          if (args.target.parentId) 
          {
            var group = diagram.getObject(args.target.parentId);
            diagram.addChildToGroup(group, node);
            let newNode = diagram.getObject(
              diagram.nodes[diagram.nodes.length - 1].id
            );
            let childNode = diagram.getObject(
              group.children[group.children.length - 2]
            );
            
            let firstChild = diagram.getObject(group.children[0]);
            newNode.offsetX = childNode.offsetX + 500;
            newNode.offsetY = childNode.offsetY;
            diagram.dataBind();
            firstChild.width = group.width;
            firstChild.offsetX = group.offsetX;
            firstChild.offsetY = group.offsetY;
            diagram.dataBind();
            diagram.refresh();
          } else {
            console.log(diagram.nodes.length);
            diagram.selectAll();
            console.log(diagram.nodes.length);
            diagram.group();
            console.log(diagram.nodes.length);
            let newNode = diagram.getObject(
              diagram.nodes[diagram.nodes.length - 1].id
            );
            let secondChild = diagram.getObject(newNode.children[1]);
            let firstChild = diagram.getObject(newNode.children[0]);
            console.log(firstChild);

            secondChild.offsetX = firstChild.offsetX - firstChild.width / 2 + secondChild.width / 2+ 10;
            secondChild.offsetY = firstChild.offsetY - firstChild.height / 2+ secondChild.height / 2 + 10;
            console.log(secondChild);
            if (newNode.children && newNode.children.length > 1) {
              newNode.style.strokeColor = 'black';
              newNode.style.strokeWidth = 1;
            }
          }
        }
      }
    }, 0);
  }

//#region code for canvas to svg tranformation
let canvasSymbols = document.querySelectorAll('.e-symbol-draggable > canvas');
for (let i = 0; i < canvasSymbols.length; i++) {

    // Get Canvas
    let parent = canvasSymbols[i].parentElement;
    let cWidth = canvasSymbols[i].width;
    let cHeight = canvasSymbols[i].height;
    let ctx = canvasSymbols[i].getContext('2d');
    let cData = ctx.getImageData(6 * cWidth / 14, 0 , 8 * cWidth / 14, cHeight - 55);
    ctx.clearRect(0, 0, cWidth, cHeight);
    canvasSymbols[i].setAttribute('height', cHeight - 55);
    canvasSymbols[i].setAttribute('width', 2 * cWidth / 14);
    ctx.putImageData(cData, 0, 0);

    // Insert title
    let title = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    title.setAttribute('x', '0');
    title.setAttribute('y', '0');
    title.style.fontWeight = 'Bold';
    title.innerHTML = getTitleById(canvasSymbols[i].id);

    // Initializing the SVG element
    let svgAttributes = document.querySelector('.e-symbol-draggable svg').attributes;
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (let j = 0; j < svgAttributes.length; j++) {
        svgElement.setAttribute(svgAttributes[j].name, svgAttributes[j].value);
    }
    svgElement.setAttribute('id', canvasSymbols[i].id);
    let groupElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let nativeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nativeGroup.setAttribute('transform', 'translate(0,0) scale(1,1)');

    // Initializing Text Element for symbol
    let textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    let textAttributes = document.querySelector('.e-symbol-draggable text').attributes;
    for (let j = 0; j < textAttributes.length; j++) {
        textElement.setAttribute(textAttributes[j].name, textAttributes[j].value);
    }
    textElement.appendChild(title);
    groupElement.appendChild(textElement);
    let shapeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('height', cHeight -55);
    rect.setAttribute('width', 2 * cWidth / 14);
    rect.setAttribute('vector-effect', 'non-scaling-stroke');
    rect.setAttribute('fill', 'transparent');
    rect.setAttribute('stroke-width', '0');
    shapeGroup.appendChild(rect);
    let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    canvas.setAttribute('height', cHeight -55);
    canvas.setAttribute('width', cHeight - 55);
    canvas.setAttribute('vector-effect', 'non-scaling-stroke');
    parent.removeChild(canvasSymbols[i]);
    canvas.appendChild(canvasSymbols[i]);
    shapeGroup.appendChild(canvas);
    nativeGroup.appendChild(shapeGroup);
    groupElement.appendChild(nativeGroup);
    svgElement.appendChild(groupElement);
    parent.appendChild(svgElement);
}

function getTitleById(id) {
    let shape = allShapes.find(x => x.id === id);
    if (shape !== undefined) {
        return shape.addInfo[0].title;
    }
    else {
        return '';
    }
}
//#endregion

//#region code for symbol arrangement
var symbolPalleteSymbols = document.querySelectorAll('.e-symbol-draggable > svg');
for (let i = 0; i < symbolPalleteSymbols.length; i++) {
    let titleText = symbolPalleteSymbols[i].querySelector(':scope > g > text');
    let toolTip = symbolPalleteSymbols[i].parentElement.getAttribute('title');
    let native_element = symbolPalleteSymbols[i].querySelector(':scope > g > g');

    // Resizing the elements to fit
    let sizeRect = native_element.querySelector('rect');
    let x = parseInt(sizeRect.getAttribute('width'));
    let y = parseInt(sizeRect.getAttribute('height'));
    let ratio = x / y;
    let _x, _y;

    if (x >= y) {
        _x = 55;
        _y = 55 / ratio;
    }

    else {
        _y = 55;
        _x = 55 * ratio;
    }

    let sx = _x / x;
    let sy = _y / y;

    let tx = -sx * 2 + 2;
    let ty = -sy * 2 + 5;

    let transform = native_element.getAttribute('transform');
    let arr = transform.split(' ');
    transform = '';
    for (let j = 0; j < arr.length; j++) {
        if ( !arr[j].includes('translate') && !arr[j].includes('scale')) {
            transform += arr[j] + ' ';
        }
    }
    transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
    native_element.setAttribute('transform', transform);

    // Translating Text
    let textSpan = titleText.querySelector('tspan');
    let text = textSpan.innerHTML;
    let foreignElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignElement.setAttribute('x', '70');
    foreignElement.setAttribute('y', '5');
    foreignElement.setAttribute('height', '26px');
    foreignElement.setAttribute('width', '200px');

    let titleDiv = document.createElement('div');
    titleDiv.style.height = '26px';
    titleDiv.style.width = '200px';
    titleDiv.style.fontSize = '12px';
    titleDiv.style.fontWeight = 'bold';
    titleDiv.style.lineHeight = '13px';
    titleDiv.innerHTML = text;
    foreignElement.appendChild(titleDiv);

    let toolTipElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    toolTipElement.setAttribute('x', '70');
    toolTipElement.setAttribute('y', '35');
    toolTipElement.setAttribute('width', '200px')
    toolTipElement.setAttribute('height', '40px')
    let toolTipDiv = document.createElement('div');
    toolTipDiv.style.height = '40px';
    toolTipDiv.style.width = '200px';
    toolTipDiv.style.fontSize = '12px';
    toolTipDiv.style.lineHeight = '13px';
    toolTipDiv.innerHTML = toolTip;
    toolTipElement.appendChild(toolTipDiv);
    titleText.parentElement.appendChild(foreignElement);
    titleText.parentElement.appendChild(toolTipElement);
    titleText.remove();
}

// Symbol text display
let allText = document.querySelectorAll('#left-section .symbol-text-container');
for (let i = 0; i < allText.length; i++) {
    allText[i].setAttribute('visibility', 'visible');
}
//#endregion

//#region code for dragbar
let isLeftDrag = false;
let isRightDrag = false;

function setCursor(cursor) {
    document.getElementById('left-section').style.cursor = cursor;
    document.getElementById('right-section').style.cursor = cursor;
    document.getElementById('middle-section').style.cursor = cursor;
}

let vcheck=0;

function Check() {


vcheck=1;

}

function Check1(){


vcheck=2;

}

function startLeftDrag() {
    isLeftDrag = true;
	vcheck=1;

}

function startRightDrag() {
    isRightDrag = true;
	vcheck=1;
}

function onDrag(e) {
    if (isRightDrag || isLeftDrag) {
        setCursor('ew-resize');
        let container = document.getElementById('container');
        let leftSection = document.getElementById('left-section');
        let rightSection = document.getElementById('right-section');

        let leftWidth = isLeftDrag ? e.clientX : leftSection.offsetWidth;
        let rightWidth = isRightDrag ? container.clientWidth - e.clientX : rightSection.offsetWidth;
        let cols = [
            leftWidth,
            5,
            container.clientWidth - 10 - leftWidth - rightWidth - 4,
            5,
            rightWidth
        ];
        let colDef = cols.map(c => c + "px").join(" ");
        container.style.gridTemplateColumns = colDef;

        e.preventDefault();
    }

	
}

function endDrag11() {

    isLeftDrag = false;
    isRightDrag = false;
    setCursor('auto');

if (vcheck === 2){
if (diagram.selectedItems.nodes.length){
	if (diagram.selectedItems.nodes[0].properties.addInfo[0].menuId === "groupPeople") {
	GroupOfPeopleDialog();

	//document.getElementById('diagram').ej2_instances[0].clearSelection();

	}


	if (diagram.selectedItems.nodes[0].properties.addInfo[0].menuId === "empty") {
	ContinuitySizeDialog();
	//document.getElementById('diagram').ej2_instances[0].isLoading = true;
	//document.getElementById('diagram').ej2_instances[0].clearSelection();
	//document.getElementById('diagram').ej2_instances[0].isLoading = false;
	}

}

if (diagram.selectedItems.connectors.length){

//luon luon su dung cai nay de truy cap object
//let dt= diagram.selectedItems.connectors[0].properties.annotations[0];
//let dtt= diagram.selectedItems.connectors[0];
//alert(dt);

//luon luon su dung cai nay de truy cap object
//alert(Object.entries(dtt));

				//let diagramData= JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
				
				//let counti=0;

				//for(let i=0; i<=diagramData.connectors.length-1; i++){
    				//if(diagram.selectedItems.connectors[0].properties.id===diagramData.connectors[i].id){
				//if(diagram.selectedItems.connectors[0].properties.constraints===diagramData.connectors[i].constraints){
				//counti=i;
				//}
				//}
				//}  //alert(diagramData);

//let cnsx = diagramData.connectors[counti].sourcePoint.x;
//let cnsy = diagramData.connectors[counti].sourcePoint.y;
//let cntx = diagramData.connectors[counti].targetPoint.x;
//let cnty = diagramData.connectors[counti].targetPoint.y;
//alert(cnsx);
//alert(cnsy);
//alert(cntx);
//alert(cnty);
//diagramData.connectors[counti].sourcePoint = {x:cntx,y:cnty};
//diagramData.connectors[counti].targetPoint = {x:cnsx,y:cnsy};

//alert(Object.entries(dll));
//alert(dll);


				//let diagramElement = document.getElementById('diagram').ej2_instances[0];
				//diagramElement.clear();
				//if (diagramData === '') {
				//	diagramData = JSON.parse(diagramElement.saveDiagram());
    				//}
    				//diagramElement.isLoading = true;
    				//diagramElement.loadDiagram(JSON.stringify(diagramData));
    				//diagramElement.clearSelection();
    				//diagramElement.isLoading = false;

//lay tham so x:
let xst = diagram.selectedItems.connectors[0].properties.annotations[0].content;
//alert(xst);

	if((xst=="Interact")||(xst=="Use")||(xst=="Compare")||(xst=="Have")||(xst=="Attach")||(xst=="Point To")||(xst=="Give Rise To")||(xst=="Depend")||(xst=="Related To")||(xst=="By")||(xst=="Agree")||(xst=="Match")){

	LabelDialog(xst);
	}




}



vcheck=1;
}

if (diagram.selectedItems.nodes.length){
let vtx = diagram.selectedItems.nodes[0].offsetX;
let vty = diagram.selectedItems.nodes[0].offsetY;
let mnc= diagram.selectedItems.nodes[0].properties.addInfo[0].menuId;
let diagramData=JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
//alert("hihi");
				let counti=0;

				for(let i=0; i<=diagramData.nodes.length-1; i++){
    				if(diagram.selectedItems.nodes[0].properties.id===diagramData.nodes[i].id){
				if(diagram.selectedItems.nodes[0].properties.constraints===diagramData.nodes[i].constraints){
				counti=i;
				}
				}
				}

				//diagramData.nodes[counti].constraints=ej.diagrams.NodeConstraints.AllowDrop;

				let vcw=0;		
				let vch=0;
				let ofx=0;
				let ofy=0;
				let croj=[];


				let diagramElement;
				//alert(counti);

				for(let i=0; i<=diagramData.nodes.length-1; i++){
    				
				 vcw=diagramData.nodes[i].width;
				 vch=diagramData.nodes[i].height;
				 ofx=diagramData.nodes[i].offsetX;
				 ofy=diagramData.nodes[i].offsetY;
				//alert("hihi");


				if((ofx-vcw/2 < vtx) && (vtx < ofx+vcw/2) && (ofy-vch/2 < vty) && (vty < ofy+vch/2) && ((ofx!=vtx)||(ofy!=vty))) {

				if (hople(diagramData.nodes[i].addInfo[0].menuId,mnc)==1){
				if(typeof(diagramData.nodes[i].children)=="undefined"){
				//diagramData.nodes[counti].constraints=ej.diagrams.NodeConstraints.AllowDrop;

				diagramData.nodes[counti].width=100;
				diagramData.nodes[counti].height=100;
				diagramData.nodes[counti].offsetX=0;
				diagramData.nodes[counti].offsetY=0;

				//diagramData.nodes[counti].marginTop=10;
				//diagramData.nodes[counti].marginLeft=10;
				//diagramData.nodes[counti].style.fill="#6BA5D7";
			



				let croj=[];
				croj.push(diagramData.nodes[counti].id);

				//diagramData.nodes[i].width=400;
				//diagramData.nodes[i].height=150;
				

				//var group = diagram.getObject(diagramData.nodes[i].parentId);
        			//diagram.addChildToGroup(group, diagramData.nodes[counti]);

				diagramData.nodes[i].children=croj;


				
				}
				else {
				//alert(diagramData.nodes[i].children.length);
				
				//diagramData.nodes[counti].constraints =
        				//ej.diagrams.NodeConstraints.Default |
        				//ej.diagrams.NodeConstraints.AllowDrop;

				diagramData.nodes[counti].width=50;
				diagramData.nodes[counti].height=50;
				diagramData.nodes[counti].offsetX=-30+diagramData.nodes[counti].width*diagramData.nodes[i].children.length;
				diagramData.nodes[counti].offsetY=0;



				//diagramData.nodes[counti].marginTop=10;
				//diagramData.nodes[counti].marginLeft=10;

			
		

				//diagramData.nodes[i].width=diagramData.nodes[counti].width*(diagramData.nodes[i].children.length+2);
				//diagramData.nodes[i].height=150;



      				diagramData.nodes[i].constraints =
        				ej.diagrams.NodeConstraints.Default |
        				ej.diagrams.NodeConstraints.AllowDrop;

				//var group = diagram.getObject(diagramData.nodes[i].parentId);
        			//diagram.addChildToGroup(group, diagramData.nodes[counti]);

				diagramData.nodes[i].children.push(diagramData.nodes[counti].id);


				}

    diagramElement= document.getElementById('diagram').ej2_instances[0];
    diagramElement.clear();
    if (diagramData === '') {
        diagramData = JSON.parse(diagramElement.saveDiagram());
    }
    diagramElement.isLoading = true;
    diagramElement.loadDiagram(JSON.stringify(diagramData));
    diagramElement.clearSelection();
    diagramElement.isLoading = false;
			


				}
				
				}

				}




}


//alert(document.getElementById('diagram').ej2_instances[0].saveDiagram());


}

function endDrag11() {



    isLeftDrag = false;
    isRightDrag = false;
    setCursor('auto');
    if (vcheck === 2)
    {
        alert("aaaaa");
        if (diagram.selectedItems.nodes.length)
        {
            if (diagram.selectedItems.nodes[0].properties.addInfo[0].menuId === "groupPeople") {
            GroupOfPeopleDialog();

            //document.getElementById('diagram').ej2_instances[0].clearSelection();

            }


            if (diagram.selectedItems.nodes[0].properties.addInfo[0].menuId === "empty") {
            ContinuitySizeDialog();
            //document.getElementById('diagram').ej2_instances[0].isLoading = true;
            //document.getElementById('diagram').ej2_instances[0].clearSelection();
            //document.getElementById('diagram').ej2_instances[0].isLoading = false;
            }

        }

        if (diagram.selectedItems.connectors.length)
        {
            //luon luon su dung cai nay de truy cap object
            //let dt= diagram.selectedItems.connectors[0].properties.annotations[0];
            //let dtt= diagram.selectedItems.connectors[0];
            //alert(dt);

            //luon luon su dung cai nay de truy cap object
            //alert(Object.entries(dtt));

                            //let diagramData= JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
                            
                            //let counti=0;

                            //for(let i=0; i<=diagramData.connectors.length-1; i++){
                                //if(diagram.selectedItems.connectors[0].properties.id===diagramData.connectors[i].id){
                            //if(diagram.selectedItems.connectors[0].properties.constraints===diagramData.connectors[i].constraints){
                            //counti=i;
                            //}
                            //}
                            //}  //alert(diagramData);

            //let cnsx = diagramData.connectors[counti].sourcePoint.x;
            //let cnsy = diagramData.connectors[counti].sourcePoint.y;
            //let cntx = diagramData.connectors[counti].targetPoint.x;
            //let cnty = diagramData.connectors[counti].targetPoint.y;
            //alert(cnsx);
            //alert(cnsy);
            //alert(cntx);
            //alert(cnty);
            //diagramData.connectors[counti].sourcePoint = {x:cntx,y:cnty};
            //diagramData.connectors[counti].targetPoint = {x:cnsx,y:cnsy};

            //alert(Object.entries(dll));
            //alert(dll);


                            //let diagramElement = document.getElementById('diagram').ej2_instances[0];
                            //diagramElement.clear();
                            //if (diagramData === '') {
                            //	diagramData = JSON.parse(diagramElement.saveDiagram());
                                //}
                                //diagramElement.isLoading = true;
                                //diagramElement.loadDiagram(JSON.stringify(diagramData));
                                //diagramElement.clearSelection();
                                //diagramElement.isLoading = false;

            //lay tham so x:
            let xst = diagram.selectedItems.connectors[0].properties.annotations[0].content;
            //alert(xst);

            if((xst=="Interact")||(xst=="Use")||(xst=="Compare")||(xst=="Have")||(xst=="Attach")||(xst=="Point To")||
            (xst=="Give Rise To")||(xst=="Depend")||(xst=="Related To")||(xst=="By")||(xst=="Agree")||(xst=="Match"))
            {
                LabelDialog(xst);
            }
        }

        vcheck=1;
    }

    // l­u ý: d©y lµ phÇn ®Ó ®­a node con vµo node cha
    if (diagram.selectedItems.nodes.length)
    {
        let vtx = diagram.selectedItems.nodes[0].offsetX;
        let vty = diagram.selectedItems.nodes[0].offsetY;
        let mnc= diagram.selectedItems.nodes[0].properties.addInfo[0].menuId;
        let diagramData=JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
        let counti=0;
        for(let i=0; i<=diagramData.nodes.length-1; i++){
            if(diagram.selectedItems.nodes[0].properties.id===diagramData.nodes[i].id)
            {
                if(diagram.selectedItems.nodes[0].properties.constraints===diagramData.nodes[i].constraints){
                    counti=i;
                }
            }
        }
        //diagramData.nodes[counti].constraints=ej.diagrams.NodeConstraints.AllowDrop;
        let vcw=0;		
        let vch=0;
        let ofx=0;
        let ofy=0;
        let croj=[];
        let diagramElement;
        //alert(counti);
        for(let i=0; i<=diagramData.nodes.length-1; i++)
        {
            
            vcw=diagramData.nodes[i].width;
            vch=diagramData.nodes[i].height;
            ofx=diagramData.nodes[i].offsetX;
            ofy=diagramData.nodes[i].offsetY;
            //alert("hihi");
            if((ofx-vcw/2 < vtx) && (vtx < ofx+vcw/2) && (ofy-vch/2 < vty) && (vty < ofy+vch/2) && ((ofx!=vtx)||(ofy!=vty))) 
            {

                if (hople(diagramData.nodes[i].addInfo[0].menuId,mnc)==1)
                {
                    if(typeof(diagramData.nodes[i].children)=="undefined")
                    {
                        //diagramData.nodes[counti].constraints=ej.diagrams.NodeConstraints.AllowDrop;

                        diagramData.nodes[counti].width=100;
                        diagramData.nodes[counti].height=100;
                        diagramData.nodes[counti].offsetX=0;
                        diagramData.nodes[counti].offsetY=0;

                        //diagramData.nodes[counti].marginTop=10;
                        //diagramData.nodes[counti].marginLeft=10;
                        //diagramData.nodes[counti].style.fill="#6BA5D7";
                        //let croj=[];
                        //croj.push(diagramData.nodes[counti].id);

                        //diagramData.nodes[i].width=400;
                        //diagramData.nodes[i].height=150;
                        var group = diagram.getObject(diagramData.nodes[i].parentId);
                            diagram.addChildToGroup(group, diagramData.nodes[counti]);

                        //diagramData.nodes[i].children=croj;
                    }
                    else 
                    {
                    //alert(diagramData.nodes[i].children.length);
                    
                    //diagramData.nodes[counti].constraints =
                            //ej.diagrams.NodeConstraints.Default |
                            //ej.diagrams.NodeConstraints.AllowDrop;

                    diagramData.nodes[counti].width=50;
                    diagramData.nodes[counti].height=50;
                    diagramData.nodes[counti].offsetX=-30+diagramData.nodes[counti].width*diagramData.nodes[i].children.length;
                    diagramData.nodes[counti].offsetY=0;



                    //diagramData.nodes[counti].marginTop=10;
                    //diagramData.nodes[counti].marginLeft=10;

                


                    //diagramData.nodes[i].width=diagramData.nodes[counti].width*(diagramData.nodes[i].children.length+2);
                    //diagramData.nodes[i].height=150;
                    diagramData.nodes[i].constraints =
                        ej.diagrams.NodeConstraints.Default |
                        ej.diagrams.NodeConstraints.AllowDrop;

                    var group = diagram.getObject(diagramData.nodes[i].parentId);
                        diagram.addChildToGroup(group, diagramData.nodes[counti]);
                    //diagramData.nodes[i].children.push(diagramData.nodes[counti].id);
                    }

                    diagramElement= document.getElementById('diagram').ej2_instances[0];
                    diagramElement.clear();
                    if (diagramData === '') {
                        diagramData = JSON.parse(diagramElement.saveDiagram());
                    }
                    diagramElement.isLoading = true;
                    diagramElement.loadDiagram(JSON.stringify(diagramData));
                    diagramElement.clearSelection();
                    diagramElement.isLoading = false;
                            


                }
                    
            }

        }
    }
    //alert(document.getElementById('diagram').ej2_instances[0].saveDiagram());
}






function resetColumn() {
    let container = document.getElementById('container');
    container.style.gridTemplateColumns = '1fr 5px 4fr 5px 1fr';
}
//#endregion


function hople(x,y){
let Asd=0;
if((x=="personAspect") && (y=="personAspect")){
Asd=1;
}
if((x=="communication") && ((y=="communication")||(y=="word")||(y=="sentence")||(y=="paragraph")||(y=="communicationElement")||(y=="question")||(y=="answer")||(y=="picture")||(y=="video")||(y=="audio"))){
Asd=1;
}
if((x=="word") && (y=="word")){
Asd=1;
}

if((x=="sentence") && ((y=="word")||(y=="sentence")||(y=="communicationElement")||(y=="principle")||(y=="subSetofPrinciple")||(y=="mainSetofPrinciple")||(y=="principleAspect"))){
Asd=1;
}


if((x=="paragraph") && ((y=="word")||(y=="sentence")||(y=="paragraph")||(y=="communicationElement")||(y=="principle")||(y=="subSetofPrinciple")||(y=="mainSetofPrinciple")||(y=="principleAspect"))){
Asd=1;
}



return Asd;
}
