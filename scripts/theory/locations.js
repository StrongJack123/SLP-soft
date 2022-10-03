// function to return location 1
function getLocation1() {
    let customShapes = [
        {
            id: 'Location 1',
            shape: {
                type: 'Native',
                content: '<svg xmlns="http://www.w3.org/2000/svg" >' +
                    '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
                    '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
                    '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/>' +
                    '</svg>'
            },
            height: 250,
            width: 250,
            annotations: [
                {
                    content: 'Location 1',
                    verticalAlignment: 'Bottom',
                    offset: {x: 0.5, y: 1},
                    margin: {
                        top: 20
                    }
                }
            ]
        }
    ];
    return customShapes;
}

// Function to return location 2
function getLocation2() {
    let customShapes = [
        {
            id: 'Location 2',
            shape: {
                type: 'Native',
                content: '<svg xmlns="http://www.w3.org/2000/svg" >' +
                    '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
                    '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
                    '<circle vector-effect="non-scaling-stroke" cx="25" cy="7" r="2.5" fill="#e9eff7" stroke="black" stroke-width="1"/>' +
                    '<text x="24.2" y="8" style="font: italic 3px serif;">k</text>' +
                    '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern2)" stroke="black" stroke-width="1"/>' +
                    '</svg>'
            },
            height: 250,
            width: 250,
            annotations: [
                {
                    content: 'Location 2',
                    verticalAlignment: 'Bottom',
                    offset: {x: 0.5, y: 1},
                    margin: {
                        top: 20
                    }
                }
            ]
        }
    ];
    return customShapes;
}