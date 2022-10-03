// This function returns directions
function getDirection() {
    let directions= [
        {
            id: 'Direction',
            shape: {type: 'Native', content:'<svg>'+'<Path vector-effect="non-scaling-stroke" stroke="black", fill="url(#Pattern3)" stroke-width="1" d="M 0 30 L 5 35 L 70 0 L 65 0 L 0 30">'+'</svg>'},
            annotations: [
                {
                    content: 'Direction',
                    verticalAlignment: 'Bottom',
                    offset: {x: 0.5, y: 0.7},
                    margin: {
                        top: 20
                    }
                }
            ],
            width: 350,
            height: 150
        },
    ];
    return directions;
}
