var rectPorts = [{
    id: 'LeftMiddle',
    offset: {
        x: 0, y: 0.5
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'X',
    width: 4,
    height: 4
}, {
    id: 'TopCenter',
    offset: {
        x: 0.5, y: 0
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'X',
    width: 4,
    height: 4,
}, {
    id: 'RightMidlle',
    offset: {
        x: 1, y: 0.5
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'X',
    width: 4,
    height: 4
}, {
    id: 'BottomCenter',
    offset: {
        x: 0.5, y: 1
    },
    visibility: ej.diagrams.PortVisibility.Visible,
    shape: 'X',
    width: 4,
    height: 4
}]
function drawShape({ id, title, annotation, toolTip, type, menuId }) {
    let node;
    if (type === 'Ellipse') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect height="40" width="120" stroke-width="0" fill="transparent" />
                    <ellipse vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 120 / 2}" width="${120*0.75}" height="${40}" visibility="hidden">
                        <div style="height: ${40}px" class="flex-container">
                            <div width="${120 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                </g>`
            },
            annotations: [{
                content: annotation
            }],
            style: {
                fill: 'white',
                fontSize: 10
            },
            ports: rectPorts,
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 40,
            width: 120
        };
    }

    else if (type === 'Continuity') {
        let strokeWidth = (annotation.strokeWidth !== undefined) ? annotation.strokeWidth : 1;
        let strokeDashArray = (annotation.strokeDashArray !== undefined) ? annotation.strokeDashArray : '';
        // let fill = (annotation.fill !== undefined) ? annotation.fill : 'White';
        let ports = (annotation.ports !== undefined) ? annotation.ports : rectPorts;
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2, 2)">
                    <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="${strokeWidth}" stroke-dasharray = "${strokeDashArray}" />
                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>
                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>
                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>
                    </g>`
            },
            style: {
                fill: 'none',
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: ports,
            width: 210,
            height: 100,
        };
    }

    else if (type === 'Group') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
                    <rect width="90" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect x="90" height="50" width="10" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 100 / 2}" width="${100*0.75}" height="${50}" visibility="hidden">
                        <div style="height: ${50}px" class="flex-container">
                            <div width="${100 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                </g>`
            },
            annotations: [{
                content: annotation,
                
            }],
            style: {
                fill: 'none',
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 100,
            width: 210
        };
    }

    else if (type === 'Sub') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
                    <rect width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect y="40" height="10" width="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 100 / 2}" y="-5" width="${100*0.75}" height="${50}" visibility="hidden">
                        <div style="height: ${50}px" class="flex-container">
                            <div width="${100 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                </g>`
            },
            annotations: [{
                content: annotation
            }],
            style: {
                fill: 'none',
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 100,
            width: 210
        };
    }

    else if (type === 'Overlap') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>
                    <rect width="90" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect x="10" y="10" height="40" width="90"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 100 / 2}" width="${100*0.75}" height="${50}" visibility="hidden">
                        <div style="height: ${50}px" class="flex-container">
                            <div width="${100 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                    </g>`
            },
            annotations: [{
                offset: {x: 0.55, y:0.5},
                content: annotation
            }],
            style: {
                fill: 'none',
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 100,
            width: 210
        };
    }

    else if (type === 'Text') {
        node = {
            id,
            shape: {
                type: 'Native',
                content: `<g>
                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>
                    <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
                    <div style="height: ${30}px" class="flex-container">
                        <div width="${100}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                    </foreignObject>     
                </g>`
            },
            addInfo: [{
                title,
                toolTip
            }],
            annotations: [{
                content: annotation,
                style: {
                    bold: true,
                    fontSize: 15,
                    italic: true
                }
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 30,
            width: 100
        };
    }

    else if (type === 'Person') {
        let label = [{
            content: annotation[0],
            offset: {x: 0.5, y: 1},
            margin: {
                top: 15
            },
            style: {
                textWrapping: 'NoWrap'
            }
        }];
        if (annotation.length === 2) {
            label.push({
                content: annotation[1],
                offset: {x: 0.5, y: 1},
                margin: {
                    top: 30
                },
                style: {
                    textWrapping: 'NoWrap'
                }
            });
        }

        node = {
            id,
            addInfo: [{
                title,
                toolTip,
            }],
            shape: {
                type: 'Native',
                content: '<g  transform="translate(2, 2)">' +
                    '<rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/>'+
                    '<circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" />' +
                    '<ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
                    '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/>' +
                    '</g>'
            },
            height: 65,
            width: 35.556,
            annotations: label,
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: personPort1
        };
    }

    else if (type === 'PersonNoFrame') {
        let label = [{
            content: annotation[0],
            offset: {x: 0.5, y: 1},
            margin: {
                top: 15
            },
            style: {
                textWrapping: 'NoWrap'
            }
        }];
        if (annotation.length === 2) {
            label.push({
                content: annotation[1],
                offset: {x: 0.5, y: 1},
                margin: {
                    top: 30
                },
                style: {
                    textWrapping: 'NoWrap'
                }
            });
        }
        
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: '<g  transform="translate(2, 2)">' +
                    '<rect height="25" width="10" fill="transparent" stroke-width="0"/>'+
                    '<circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="transparent" stroke="black" stroke-width="1" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="3.0" cy="3.5" r="1" fill="black" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="7.0" cy="3.5" r="1" fill="black" />' +
                    '<ellipse vector-effect="non-scaling-stroke" cx="5.0" cy="8.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
                    '<path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 5 10 L 5 15 L 0 25 M 5 15 L 10 25 M 0 12.5 L 10 12.5"/>'+
                    '</g>'
            },
            height: 70,
            width: 35.556,
            annotations: label,
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: personPort2
        }
    }

    else if (type === 'PersonGroup') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: '<g  transform="translate(2, 2)">' +
                    '<rect vector-effect="non-scaling-stroke" height="27" width="36" stroke="black" fill="transparent" stroke-width="1"/>'+
                    '<circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1" fill="black" />' +
                    '<ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
                    '<path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/>'+
                    '<circle vector-effect="non-scaling-stroke" cx="18" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="16.0" cy="4.5" r="1" fill="black" />' +
                    '<circle vector-effect="non-scaling-stroke" cx="20.0" cy="4.5" r="1" fill="black" />' +
                    '<ellipse vector-effect="non-scaling-stroke" cx="18.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
                    '<path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 18 11 L 18 16 L 13 26 M 18 16 L 23 26 M 13 13.5 L 23 13.5"/>'+
                    '<circle vector-effect="non-scaling-stroke" fill="black" cx="27" cy="13.5" r="1"/>'+
                    '<circle vector-effect="non-scaling-stroke" fill="black" cx="30" cy="13.5" r="1"/>'+
                    '<circle vector-effect="non-scaling-stroke" fill="black" cx="33" cy="13.5" r="1"/>'+
                    '</g>',
            },
            annotations: [
                {
                    content: annotation,
                    verticalAlignment: 'Bottom',
                    offset: { x: 0.5, y: 1 },
                    margin: {
                        top: 20
                    }
                }
            ],
            height: 140,
            width: 200,
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts
        }
    }

    else if (type === 'WhatWeDo') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect vector-effect="non-scaling-stroke" width="575" height="150" stroke="black" fill="transparent" stroke-width="1" />
                    <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <foreignObject class="symbol-text-container" x="${0.11 * 575}" width="${100}" height="${150}" visibility="hidden">
                        <div style="height: ${150}px" class="flex-container">
                            <div width="${100}" class="symbol-text-element">
                                ${annotation[0]}
                            </div>
                        </div>
                    </foreignObject>
                    <rect x="350" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <foreignObject class="symbol-text-container" x="${0.65 * 575}" width="${100}" height="${150}" visibility="hidden">
                        <div style="height: ${150}px" class="flex-container">
                            <div width="${100}" class="symbol-text-element">
                                ${annotation[1]}
                            </div>
                        </div>
                    </foreignObject>
                </g>`
            },
            annotations: [{
                content: annotation[0],
                offset: {x: 0.22, y: 0.5}
            }, {
                content: annotation[1],
                offset: {x: 0.78, y:0.5}
            }, {
                content: annotation[2],
                offset: {x: 0.9, y: 0},
                margin: {bottom: 10}
            }],
            style: {
                fill: 'none',
                fontSize: 10
            },

            height: 108,
            width: 414,
            ports: [{
                id: 'left',
                offset: {
                    x: 0.3913, y: 0.5
                },
                visibility: ej.diagrams.PortVisibility.Visible,
                shape: 'X',
                width: 4,
                height: 4
            }, {
                id: 'Right',
                offset: {
                    x: 0.60869, y: 0.5
                },
                visibility: ej.diagrams.PortVisibility.Visible,
                shape: 'X',
                width: 4,
                height: 4
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate
        }
    }

    else if (type === 'ECF') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2,2)">
                        <rect height="100" width="100" fill="transparent" stroke-width="0"/>
                        <rect x="${100 /(Math.sqrt(2)*2)}" y="${-100 / (Math.sqrt(2)*2)}" width="${100 / Math.sqrt(2)}" height="${100 / Math.sqrt(2)}" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" transform="rotate(45)"/>
                        <foreignObject class="symbol-text-container" x="${0.25 * 100 / 2}" width="${100*0.75}" height="${100}" visibility="hidden">
                        <div style="height: ${100}px" class="flex-container">
                            <div width="${100 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                    </g>`
            },
            annotations: [{
                content: annotation,
            }],

            style: {
                fill: 'none',
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 120,
            width: 120
        };
    }

    else if (type === 'Circle') {
        let content = (annotation.content !== undefined) ? annotation.content[0].content : '';
        let radius = annotation.radius;
        let pointClass = (annotation.isPoint === true) ? 'class="point-circle"' : ''; 
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  ${pointClass} transform="translate(2, 2)">
                        <rect height="${radius * 2}" width="${radius * 2}" fill="transparent" stroke-width="0" /> 
                        <circle vector-effect="non-scaling-stroke" cx="${radius}" cy="${radius}" r="${radius}" fill="${annotation.fill}" stroke="black" stroke-width="1"/>
                        <foreignObject class="symbol-text-container" x="${0.25 * radius * 2 / 2}" width="${radius* 2 * 0.75}" height="${radius * 2}" visibility="hidden">
                        <div style="height: ${radius * 2}px" class="flex-container">
                            <div width="${radius * 2 * 0.75}" class="symbol-text-element">
                                ${content}
                            </div>
                        </div>
                    </foreignObject>
                    </g>`
            },
            annotations: (annotation.content !== undefined)?annotation.content: null,
            style: {
                fill: 'none',
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: (annotation.ports !== undefined)?annotation.ports:null,
            height: annotation.radius * 2,
            width: annotation.radius * 2,
        };
    }
    
    else if (type === 'Note') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: [{
                content: annotation
            }],

            shape: {
                type: 'Native',
                content: `<g transfrom="translate(2,2)">
                    <rect height="120" width="120" stroke-width="0" fill="transparent" />
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 0 0 L 0 120 L 120 120 L 120 20 L 100 0 L 0 0"/>
                    <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" points="100,0 100,20 120,20"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 120 / 2}" width="${120*0.75}" height="${120}" visibility="hidden">
                        <div style="height: ${120}px" class="flex-container">
                            <div width="${120 * 0.75}" class="symbol-text-element">
                                My Note
                            </div>
                        </div>
                    </foreignObject>
                </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 120,
            width: 120
        }
    }

    else if(type === 'Callout') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: [{
                content: annotation,
                offset: { x: 0.5, y: 0.4}
            }],

            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect height="250" width="350" fill="transparent" stroke-width="0"/> 
                    <path fill="transparent" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" d="M 0 0 L 350 0 L 350 200 L 120 200 L 100 250 L 100 200 L 0 200 L 0 0"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 350 / 2}" width="${350*0.75}" height="${250}" visibility="hidden">
                    <div style="height: ${250}px" class="flex-container">
                        <div width="${350 * 0.75}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                </foreignObject>        
                </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 250,
            width: 350
        }
    }

    else if (type === 'Table') {
        let columnNo = annotation.columnNo;

        let shapeData;
        for (let i = 0; i < columnNo; i++) {
            shapeData += `<g transform="translate(${100*i})">
            <rect vector-effect="non-scaling-stroke" fill="transparent" stroke-width="1" stroke="black" height="100" width="100"/>
            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>
            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>
            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> 
            </g>`;
        }
        let annotationsArray = [];
        let ratio = 1/ (columnNo * 2);
        for (let i = 0; i < columnNo * 2; i++) {
            annotationsArray.push({
                content: annotation.content[i],
                width: 100,
                offset: { x: ratio, y: (i % 2 === 0) ? 0.25 : 0.75 }
            });
            if (i % 2 !== 0)
                ratio = ratio + 1 / columnNo;
        }

        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],

            annotations: annotationsArray,
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                            <rect height="100" width="${100*columnNo}" fill="transparent" stroke-width="0"/>
                            ${shapeData}
                        </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 100,
            width: 100 * columnNo
        }
    }

    else if (type === 'WideArrow') {
        let angle = 0;
        let x = 0, y = 0;
        if (annotation.direction === 'left') {
            angle = 180;
            x = -200;
            y = -70;
        }
        let rightArrow = `<g  transform="translate(2, 2)">
                <g transform="rotate(${angle}) translate(${x},${y})">
                <rect height="70" width="200" fill="transparent" stroke-width="0"/>
                <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>
                </g>
                <foreignObject class="symbol-text-container" x="${0.25 * 200 / 2}" width="${200*0.75}" height="${70}" visibility="hidden">
                <div style="height: ${70}px" class="flex-container">
                    <div width="${200 * 0.75}" class="symbol-text-element">
                        ${annotation.content}
                    </div>
                </div>
                </foreignObject>
            </g>`
        node = {
            id,
            addInfo: [{
                title,
                toolTip,
            }],

            annotations: [{
                content: annotation.content
            }],
            shape: {
                type: 'Native',
                content: rightArrow
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 70,
            width: 200
        }
    }
    else if( type === 'BiWideArrow') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip,
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2, 2)">
                    <g>
                        <rect height="90" width="500" fill="none" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>
                        <foreignObject class="symbol-text-container" x="${0.25 * 500 / 2}" width="${500*0.75}" height="${90}" visibility="hidden">
                        <div style="height: ${90}px" class="flex-container">
                            <div width="${500 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>  
                    </g>
                </g>`
            },

            annotations: [{
                content: annotation
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 90,
            width: 500
        }
    }

    else if (type === 'CylinderArrow') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip,
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <g fill="transparent">
                        <rect height="50" width="550" fill="none" strole-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 25 0 L 525 0 L 525 50 L 25 50 L 25 0"/>
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="25" cy="25" r="25" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="525" cy="25" r="25" />
                    </g>
                    <foreignObject class="symbol-text-container" x="${0.25 * 550 / 2}" width="${550*0.75}" height="${50}" visibility="hidden">
                    <div style="height: ${50}px" class="flex-container">
                        <div width="${550 * 0.75}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                </foreignObject>  
                </g>`
            },

            annotations: [{
                content: annotation
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 550
        }
    }

    else if (type === 'Arrow') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            type: (annotation.type) ? annotation.type : 'Straight',
            annotations: annotation.content,
            targetDecorator: {
                shape: (annotation.shape.target !== undefined) ? annotation.shape.target : 'None',
                style: (annotation.style !== undefined) ? annotation.style : null, 
            },

            sourceDecorator: {
                shape: (annotation.shape.source !== undefined) ? annotation.shape.source : 'None',
            },
            
            style: (annotation.style !== undefined) ? annotation.style: null,

            sourcePoint: {
                x: -5, y: -5
            },

            targetPoint: {
                x: -4, y: -5
            }
        }
    }

    else if (type === 'House') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: '<g  transform="translate(2, 2)">' +
                    '<rect height="50" width="50" fill="transparent" stroke-width="0" />'+
                    '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
                    '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
                    '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/>' +
                    '</g>'
            },
            height: 250,
            width: 250,
            annotations: [
                {
                    content: annotation,
                    verticalAlignment: 'Bottom',
                    offset: {x: 0.5, y: 1},
                    margin: {
                        top: 20
                    }
                }
            ],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate
        }
    }

    else if (type === 'House1') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: '<g  transform="translate(2, 2)">' +
                    '<rect height="50" width="50" fill="transparent" stroke-width="0" />'+
                    '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
                    '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
                    '<circle vector-effect="non-scaling-stroke" cx="25" cy="7" r="2.5" fill="#e9eff7" stroke="black" stroke-width="1"/>' +
                    '<text x="24.25" y="7.75" style="font: italic 2.5px serif;">k</text>'+
                    '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern2)" stroke="black" stroke-width="1"/>' +
                    '</g>'
            },
            height: 250,
            width: 250,
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate
        };
    }

    else if (type === 'Basis') {
        node = {
            id,
            addInfo: [{
                toolTip,
                title
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect height="20" width="320" fill="transparent" stroke-width="0"/>
                    <rect x="0" y="0" vector-effect="non-scaling-stroke" height="20" width="20" stroke="black" stroke-width="1" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dashArray="10 5" fill="transparent" d = "M 20 10 L 320 10"/>
                    <foreignObject class="symbol-text-container" x="${0.03 * 320}" width="${320*0.75}" height="${20}" visibility="hidden">
                    <div style="height: ${20}px" class="flex-container">
                        <div width="${320 * 0.75}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                </foreignObject>   
                </g>`
            },
            annotations: [{
                content: annotation,
                offset: {x: 0.03, y: 0.5},
                style: {
                    color: 'black',
                    bold: true,
                    italic: true,
                    fontSize: '12',
                    fontFamily: 'Serif'
                }
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 30,
            width: 450
        }
    }

    else if (type === 'HorizontalLine') {
        let constraint = ej.diagrams.NodeConstraints.ResizeEast | ej.diagrams.NodeConstraints.ResizeWest;
        let strokeDash = (annotation.style.strokeDashArray) ? annotation.style.strokeDashArray : '';
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <g>
                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDash}" d="M 0 2.5 L 10 2.5"/>
                    </g>                    
                </g>`
            },

            ports: annotation.ports,
            annotations : annotation.content, 
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.OutConnect & ~ej.diagrams.NodeConstraints.Resize | constraint & ~ej.diagrams.NodeConstraints.Rotate, 
            height: 30,
            width: annotation.length
        }
    }

    else if (type === 'VerticalLine') {
        let constraint = ej.diagrams.NodeConstraints.ResizeNorth | ej.diagrams.NodeConstraints.ResizeSouth;
        let strokeDash = (annotation.style.strokeDashArray) ? annotation.style.strokeDashArray : '';
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <g>
                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDash}" d="M 2.5 0 L 2.5 10"/> 
                    </g>                    
                </g>`
            },

            ports: annotation.ports,
            annotations : annotation.content, 
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.OutConnect & ~ej.diagrams.NodeConstraints.Resize | constraint & ~ej.diagrams.NodeConstraints.Rotate, 
            height: annotation.length,
            width: 30
        }
    }

    else if (type === 'Graph') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                        <rect width="10" height="10" fill="transparent" stroke-width="0" />
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />
                    </g>`
            },

            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.InConnect & ~ej.diagrams.NodeConstraints.OutConnect & ~ej.diagrams.NodeConstraints.Rotate,
            annotations: annotation,
            height: 600,
            width: 600
        }
    }

    else if (type === 'Curly') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            
            annotations: annotation.content,
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2,2)">
                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>
                </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 120,
            width: 40
        };
    }

    else if (type === 'CurlyClose') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: annotation.content,
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />
                </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 120,
            width: 40
        };
    }
    else if (type === 'DottedGroup') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: [{
                content: annotation
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                        <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="90" width="170" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="Transparent"/>
                        <rect x="30" y="15" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                        <rect x="40" y="25" height="50" width="100"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                        <foreignObject class="symbol-text-container" x="${0.25 * 170 / 2}" width="${170*0.75}" height="${90}" visibility="hidden">
                        <div style="height: ${90}px" class="flex-container">
                            <div width="${170 * 0.75}" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                        </foreignObject>   
                    </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 80,
            width: 160
        };
    }

    else if (type === 'DomainTop') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: annotation.content,
            shape: {
                type: 'Native',
                content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="50" width="200" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 0 50 L 200 50 L 200 0"/>
                            <foreignObject class="symbol-text-container" x="${0.25 * 200 / 2}" width="${200*0.75}" height="${50}" visibility="hidden">
                            <div style="height: ${50}px" class="flex-container">
                                <div width="${200 * 0.75}" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject> 
                        </g>  
                    </g>`
            },
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 200
        };
    }

    else if (type === 'DomainBottom') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: annotation.content,
            shape: {
                type: 'Native',
                content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="50" width="200" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 50 L 0 0 L 200 0 L 200 50"/>
                            <foreignObject class="symbol-text-container" x="${0.25 * 200 / 2}" width="${200*0.75}" height="${50}" visibility="hidden">
                            <div style="height: ${50}px" class="flex-container">
                                <div width="${200 * 0.75}" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject> 
                        </g>  
                    </g>`
            },
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 200
        };
    }

    else if (type === 'DomainRight') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: annotation.content,
            shape: {
                type: 'Native',
                content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="200" width="50" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 50 0 L 0 0 L 0 200 L 50 200"/>
                            <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                            <div style="height: ${200}px" class="flex-container">
                                <div width="${50}" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject> 
                        </g>  
                    </g>`
            },
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 200,
            width: 50
        };
    }

    else if (type === 'DomainLeft') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: annotation.content,
            shape: {
                type: 'Native',
                content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="200" width="50" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 50 0 L 50 200 L 0 200"/>
                            <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                            <div style="height: ${200}px" class="flex-container">
                                <div width="${50}" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject> 
                        </g>  
                    </g>`
            },
            style: {
                fontSize: 10
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 200,
            width: 50
        };
    }
    else if (type === 'Direction') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native', 
                content:'<g  transform="translate(2, 2)">'+
                '<rect height="35" width="70" fill="transparent" stroke-width="0"/>'+
                '<Path vector-effect="non-scaling-stroke" stroke="black", fill="url(#Pattern3)" stroke-width="1" d="M 0 30 L 5 35 L 70 0 L 65 0 L 0 30">'+
                '</g>'
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            width: 500,
            height: 200   
        };
    }

    else if (type === 'LifeBox') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                        <rect vector-effect="non-scaling-stroke" x="0" y="0" height="600" width="300" fill="transparent" stroke="black" stroke-width="2" />
                        <rect vector-effect="non-scaling-stroke" x="25" y="25" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                        <rect vector-effect="non-scaling-stroke" x="25" y="325" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                        <foreignObject class="symbol-text-container" x="${0.25 * 300 / 2}" y="${50}"width="${300*0.75}" height="${100}" visibility="hidden">
                            <div style="height: ${100}px" class="flex-container">
                                <div width="${350 * 0.75}" class="symbol-text-element">
                                    ${annotation[0]}
                                </div>
                            </div>
                        </foreignObject>
                        <foreignObject class="symbol-text-container" x="${0.25 * 300 / 2}" y="${375}"width="${300*0.75}" height="${100}" visibility="hidden">
                            <div style="height: ${100}px" class="flex-container">
                                <div width="${300 * 0.75}" class="symbol-text-element">
                                    ${annotation[1]}
                                </div>
                            </div>
                        </foreignObject>  
                    </g>`
            },
            annotations: [{
                content: annotation[0],
                offset: {x: 0.5, y: 0.25}
            }, {
                content: annotation[1],
                offset: {x: 0.5, y: 0.75}
            }, {
                content: annotation[2],
                offset: {x: 0.5, y: 1},
                margin: {top: 20}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 400,
            width: 200
        }
    }

    else if (type === 'LifeCircle') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                        <rect height="600" width="600" stroke-width="0" fill="transparent" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="2" fill="transparent" cx="300" cy="300" r="300"/>
                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="147.5" cy="300" rx="112.5" ry="220"/>
                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="447.5" cy="300" rx="112.5" ry="220"/>
                        <foreignObject class="symbol-text-container" x="${0.15*600}" width="${200*0.75}" height="${600}" visibility="hidden">
                        <div style="height: ${600}px" class="flex-container">
                            <div width="${200 * 0.75}" class="symbol-text-element">
                                ${annotation[0]}
                            </div>
                        </div>
                        </foreignObject>  
                        <foreignObject class="symbol-text-container" x="${0.65*600}" width="${200*0.75}" height="${600}" visibility="hidden">
                        <div style="height: ${600}px" class="flex-container">
                            <div width="${200 * 0.75}" class="symbol-text-element">
                                ${annotation[1]}
                            </div>
                        </div>
                        </foreignObject> 
                    </g>`
            },
            annotations: [{
                content: annotation[0],
                offset: {x: 0.25, y: 0.5},
            }, {
                content: annotation[1],
                offset: {x: 0.75, y: 0.5},
            }, {
                content: annotation[2],
                offset: {x: 0.5, y: 1},
                margin: {top: 20}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 400,
            width: 400
        }
    }

    else if (type === 'Natural') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                        <rect vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" height="150" width="100"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 20 30 L 50 80 L 72 30 M 50 80 L 50 130 M 85 40 A 10 10 0 1 0 50 25"/>
                        <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="black" points="45,25 55,25 50,35"/>   
                    </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 150,
            width: 100
        }
    }

    else if (type === 'Reference') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                        <rect height="710" width="900" stroke-width="0" fill="transparent" />
                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/> 
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                    </g>`
            },

            annotations: [{
                content: 'Education Theory',
                offset: {x: 0.14, y: 0.5},
                width: 75
            }, {
                content: 'Power Theory',
                offset: {x: 0.39, y: 0.5},
                width: 75
            }, {
                content: 'Marketing Theory',
                offset: {x: 0.625, y: 0.52},
                width: 75
            }, {
                content: 'Exchange System Theory',
                offset: {x: 0.865 , y: 0.5},
                width: 75
            }, {
                content: 'Communicaiton Theory',
                offset: {x: 0.268, y: 0.25},
                width: 75
            }, {
                content: 'Information Theory',
                offset: {x: 0.5, y: 0.185},
                width: 75
            }, {
                content: 'Instrumentation Theory',
                offset: {x: 0.725, y: 0.255},
                width: 75
            }, {
                content: 'Gamming Theory',
                offset: {x: 0.268, y: 0.75},
                width: 75
            }, {
                content: 'Work Theory',
                offset: {x: 0.51, y: 0.815},
                width: 75
            }, {
                content: 'Reproduction Theory',
                offset: {x: 0.75, y: 0.76},
                width: 75
            }, {
                content: 'The Given Reference',
                offset: {x: 0.5, y: 1},
                margin: {top: 20}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 355,
            width: 450
        }
    }

    else if (type === 'Reference1') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect height="710" width="900" stroke-width="0" fill="transparent" />
                    <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/> 
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                </g>`
            },

            annotations: [{
                template: '<div style="margin-top:170px; margin-left:55px;">E<sub>T</sub></div>',
            }, {
                template: '<div style="margin-top:170px; margin-left:170px;">P<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:180px; margin-left:275px;">M<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:170px; margin-left:380px;">Es<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:75px; margin-left:115px;">K<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:55px; margin-left:220px;">i<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:80px; margin-left:320px;">I<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:260px; margin-left:115px;">G<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:280px; margin-left:220px;">W<sub>T</sub></div>'
            }, {
                template: '<div style="margin-top:260px; margin-left:330px;">X<sub>T</sub></div>'
            }, {
                content: 'R',
                offset: {x: 0.85, y: 1},
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 355,
            width: 450
        }
    }

    else if (type === 'StrokeRect') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            annotations: [{
                content: annotation
            }],
            shape: {
                type: 'Native',
                content: `<g  transform="translate(2, 2)">
                    <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="80" width="160" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="transparent"/>
                    <rect x="30" y="20" width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <foreignObject class="symbol-text-container" x="${0.25 * 160 / 2}" width="${160 * 0.75}" height="${80}" visibility="hidden">
                    <div style="height: ${80}px" class="flex-container">
                        <div width="${0.75 * 160}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                    </foreignObject> 
                    </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 80,
            width: 160
        }
    }

    else if (type === 'LeftLabel') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transfrom="translate(2, 2)">
                    <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d = "M 30 50 L 200 50 M 30 50 L 30 15"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="25,15 35,15 30,10"/>
                    <foreignObject class="symbol-text-container" x="${0.25 * 200 / 2}" y="25" width="${200*0.75}" height="${25}" visibility="hidden">
                    <div style="height: ${25}px" class="flex-container">
                        <div width="${200*0.75}" class="symbol-text-element">
                            ${'label'}
                        </div>
                    </div>
                    </foreignObject> 
                </g>`
            },
            annotations: [{
                content: 'label',
                offset: {x: 0.5, y: 1},
                margin: {top: 10}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 200
        }
    }

    else if (type === 'RightLabel') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g>
                    <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 30 50 L 200 50 L 200 15"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="195,15 205,15 200 ,10" />
                    <foreignObject class="symbol-text-container" x="${0.25 * 200 / 2}" y="25" width="${200*0.75}" height="${25}" visibility="hidden">
                    <div style="height: ${25}px" class="flex-container">
                        <div width="${200*0.75}" class="symbol-text-element">
                            ${'label'}
                        </div>
                    </div>
                    </foreignObject> 
                </g>`
            },
            annotations: [{
                content: 'label',
                offset: {x: 0.5, y: 1},
                margin: {top: 10}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 200
        }
    }

    else if (type === 'PushUpRight') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 50 100 L 100 100 L 100 0"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="95,5 105,5 100,0"/>
                    <foreignObject class="symbol-text-container" x="${0.4*100}" y="25" width="${100*0.75}" height="${75}" visibility="hidden">
                    <div style="height: ${75}px" class="flex-container">
                        <div width="${100*0.75}" class="symbol-text-element">
                            ${'push up'}
                        </div>
                    </div>
                    </foreignObject> 
                </g>`
            },
            annotations: [{
                content: 'push up',
                offset: {x: 1, y: 0.5},
                margin: {left: 30}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 100,
            width: 100
        }
    }
    
    else if (type === 'PushUpLeft') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 55 100 L 5 100 L 5 0"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points=" 0,5 10,5 5,0"/>
                    <foreignObject class="symbol-text-container" x="${0.02*100}" y="25" width="${100*0.75}" height="${75}" visibility="hidden">
                    <div style="height: ${75}px" class="flex-container">
                        <div width="${100*0.75}" class="symbol-text-element">
                            ${'push up'}
                        </div>
                    </div>
                    </foreignObject> 
                </g>`
            },
            annotations: [{
                content: 'push up',
                offset: {x: 0, y: 0.5},
                margin: {right: 30}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 100,
            width: 100
        }
    }

    else if (type === 'TheoryScale') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g tranform="translate(2,2)">
                    <rect height="50" width="600" fill="transparent" stroke-width="0"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 25 L 600 25 M 270 10 L 270 40 M 290 10 L 290 40 M 310 10 L 310 40 M 330 10 L 330 40"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="5" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="25" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="45" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="595" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="575" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="555" cy="15" r="3"/>
                </g>`
            },
            
            annotations: [{
                content: '-2',
                offset: {x: 0.45, y: 1}
            }, {
                content: '-1',
                offset: {x: 0.4833, y: 1}
            }, {
                content: '1',
                offset: {x: 0.5167, y: 1}
            }, {
                content: '2',
                offset: {x: 0.55, y: 1}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Resize | ej.diagrams.NodeConstraints.ResizeEast | ej.diagrams.NodeConstraints.ResizeWest & ~ej.diagrams.NodeConstraints.Rotate, 
            height: 50,
            width: 600
        }
    }

    else if (type === 'VerticalContinuity') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g>
                    <rect vector-effect="non-scaling-stroke" height="60" width="120" stroke-width="1" fill="none" stroke="black"/>
                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="15" r="3.5"/>
                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="30" r="3.5"/>
                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="45" r="3.5"/>
                </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            ports: rectPorts,
            height: 50,
            width: 100
        };
    }

    else if (type === 'cover') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="10" width="7.5" stroke-width="1" stroke="black" fill="green" opacity="0.5"/>
                    </g>`
            },
            annotations: [{
                content: annotation
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 80,
            width: 35.56
        };
    }
    
    else if (type === 'mobility') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>
                    </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 50
        };
    }

    else if (type === 'redcross') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                    <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/> 
                </g>`
            },
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 50,
            width: 50
        };
    }

    else if (type === 'linkednode') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     
                </g>`
            },
            annotations: [{
                content: '1',
                offset: {x: 0.5, y: 0.45}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 60,
            width: 50
        };
    }

    else if (type === 'emptycontainer') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transfrom="translate(2,2)">
                <rect vector-effect="non-scaling-stroke" height="150" width="700" fill="none" stroke="black" stroke-width="1"/>
                </g>`
            },
            annotations: [{
                content: 'Empty Container'
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 150,
            width: 700
        };
    }

    else if (type === 'squareemptycontainer') {
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="200" width="200" fill="none" stroke="black" stroke-width="1"/>
                </g>`
            },
            annotations: [{
                content: annotation,
                offset: {x: 0.5, y: 0},
                margin: {bottom: 10}
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            height: 200,
            width: 200
        };
    }
    else {
        let height = (annotation.height !== undefined) ? annotation.height : 100;
        let width = (annotation.width !== undefined) ? annotation.width : 210;
        let text = (annotation.content !== undefined) ? annotation.content[0].content : annotation;
        let textLen;
        if (String(text).length === 1) {
            textLen = width * 0.15;
        }
        else if (String(text).length > 1 && String(text).length < 5) {
            textLen = width * 0.3;
        }

        else if (String(text).length <= 20 && String(text).length >= 5) {
            textLen = width * 0.65;
        }

        else {
            textLen = width * 0.85;
        }
        node = {
            id,
            addInfo: [{
                title,
                toolTip
            }],
            shape: {
                type: 'Native',
                content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${0.25 * width / 2}" width="${width*0.75}" height="${height}" visibility="hidden">
                        <div style="height: ${height}px" class="flex-container">
                            <div width="${width * 0.75}" class="symbol-text-element">
                                ${text}
                            </div>
                        </div>
                    </foreignObject>`
            },
            annotations: (annotation.content !== undefined) ? annotation.content : [{content:annotation}],
            width: width,
            height: height,
            ports: (annotation.ports !== undefined)?annotation.ports:rectPorts,
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
            style: {
                ...annotation.style,
                fill: 'white',
                fontSize: 10
            }
        };
    }
    node.addInfo[0].menuId = menuId;
    return node;
}