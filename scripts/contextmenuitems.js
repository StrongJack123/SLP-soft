var menuItems = [{
    id: 'personShapes',
    list: [{
        onClick: '',
        text: 'Replace person with picture'
    }, {
        onClick: '',
        text: 'Replace person with sketch'
    }, {
        onClick: '',
        text: 'Replace person with Video'
    }, 'sep', {
        onClick: '',
        text: 'Add audio for person',
    }, {
        onClick: '',
        text: 'Add video for person'
    }, {
        onClick: '',
        text: 'Add text for person'
    }, 'sep', {
        onClick: '',
        text: 'Add Communication holder for person'
    }, 'sep', {
        onClick: '',
        text: 'Relate person with principle'
    }, {
        onClick: '',
        text: 'Relate person with operating principle'
    }, {
        onClick: '',
        text: 'Relate person with subset of principle'
    }, {
        onClick: '',
        text: 'Relate person with main set of principle'
    }, 'sep', {
        onClick: '',
        text: "Relate person with principle's aspect"
    }, {
        onClick: '',
        text: 'Relate person with person aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Send Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep',{
        onClick: 'openSubList',
        text: 'Send and receive signals',
        sub: [{
            onClick: '',
            text: 'Send green receive green'
        }, {
            onClick: '',
            text: 'Send green receive red'
        }, 'sep', {
            onClick: '',
            text: 'Send red receive green'
        }, {
            onClick: '',
            text: 'Send red receive red'
        }]
    }, 'sep', {
        onClick: '',
        text: 'Cover Person'
    }, {
        onClick: '',
        text: 'Hide Person'
    }, 'sep', {
        onClick: '',
        text: 'Uncover Person'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit',
        sub: [{
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete'
        }, {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy'
        }, {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste'
        }, {
            onClick: '',
            text: 'Cut',
            icon : 'flaticon-scissors'
        }, 'sep', {
            onClick: '',
            text: 'Edit Text'
        }, 'sep', {
            onClick: '',
            text: 'Select All'
        }]
    }]
}, {
    id: 'groupPeople',
    list: [{
        onClick: '',
        text: 'Replace group of people with picture'
    }, {
        onClick: '',
        text: 'Replace group of people with sketch'
    }, {
        onClick: '',
        text: 'Replace group of people with video'
    }, 'sep', {
        onClick: '',
        text: 'Add audio for group of people',
    }, {
        onClick: '',
        text: 'Add video for group of people'
    }, {
        onClick: '',
        text: 'Add text for group of people'
    }, 'sep', {
        onClick: '',
        text: 'Add communication holder for group of people'
    }, 'sep', {
        onClick: '',
        text: 'Relate group of people with principle',
    }, {
        onClick: '',
        text: 'Relate group of people with operating principle'
    }, {
        onClick: '',
        text: 'Relate group of people with subset of principle'
    }, {
        onClick: '',
        text: 'Relate group of people with main set of principle'
    }, 'sep', {
        onClick: '',
        text: "Relate group of people with principle's aspect"
    }, {
        onClick: '',
        text: 'Relate group of people with person aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Send Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, {
        onClick: 'openSubList',
        text: 'Edit',
        sub: [{
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete'
        }, {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy'
        }, {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste'
        }, {
            onClick: '',
            text: 'Cut',
            icon : 'flaticon-scissors'
        }, 'sep', {
            onClick: '',
            text: 'Edit Text'
        }, 'sep', {
            onClick: '',
            text: 'Select All'
        }]
    }]
}, {
    id: 'communicationHolder',
    list: [{
        onClick: '',
        text: 'Replace Communication Holder with picture'
    }, {
        onClick: '',
        text: 'Replace Communication Holder with video'
    }, {
        onClick: '',
        text: 'Replace Communication Holder with audio'
    }, {
        onClick: '',
        text: 'Replace Communication Holder with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Add Audio for Communication Holder'
    }, {
        onClick: '',
        text: 'Add Video for Communication Holder'
    }, 'sep', {
        onClick: '',
        text: 'Replace Communication Holder with text'
    }, 'sep', {
        onClick: '',
        text: 'Replace Communication Holder with principle'
    }, {
        onClick: '',
        text: 'Relate Communication Holder with operating principle'
    }, {
        onClick: '',
        text: 'Relate Communication Holder with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Communication Holder with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Communication Holder with principle aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit',
        sub: [{
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete'
        }, {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy'
        }, {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste'
        }, {
            onClick: '',
            text: 'Cut',
            icon : 'flaticon-scissors'
        }, 'sep', {
            onClick: '',
            text: 'Edit Text'
        }, 'sep', {
            onClick: '',
            text: 'Select All'
        }]
    }]
}, {
    id: 'commMix',
    list: [{
        onClick: '',
        text: 'Add Input'
    }, {
        onClick: '',
        text: 'Remove Input'
    }, {
        onClick: 'openSubList',
        text: 'Edit',
        sub: [{
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete'
        }, {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy'
        }, {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste'
        }, {
            onClick: '',
            text: 'Cut',
            icon : 'flaticon-scissors'
        }, 'sep', {
            onClick: '',
            text: 'Edit Text'
        }, 'sep', {
            onClick: '',
            text: 'Select All'
        }]
    }]
}, {
    id: 'personAspect',
    list: [{
        onClick: '',
        text: 'Relate person aspect with person aspect'
    }, {
        onClick: '',
        text: 'Relate person aspect with person'
    }, {
        onClick: '',
        text: 'Relate person aspect with group of people'
    }, 'sep', {
        onClick: '',
        text: "Relate person aspect with priciple's aspect"
    }, {
        onClick: '',
        text: 'Relate person aspect with principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate person aspect with subset of principle'
    }, {
        onClick: '',
        text: 'Relate person aspect with main set of principle'
    }, {
        onClick: 'openSubList',
        text: 'Edit',
        sub: [{
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete'
        }, {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy'
        }, {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste'
        }, {
            onClick: '',
            text: 'Cut',
            icon : 'flaticon-scissors'
        }, 'sep', {
            onClick: '',
            text: 'Edit Text'
        }, 'sep', {
            onClick: '',
            text: 'Select All'
        }]
    }]
}, {
    id: 'cover',
    list: [{
        onClick: '',
        text: 'Show Cover'
    }, {
        onClick: '',
        text: 'Hide Cover'
    }, 'sep', {
        onClick: '',
        text: 'Show Person'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit',
        sub: [{
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete'
        }, {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy'
        }, {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste'
        }, {
            onClick: '',
            text: 'Cut',
            icon : 'flaticon-scissors'
        }, 'sep', {
            onClick: '',
            text: 'Edit Text'
        }, 'sep', {
            onClick: '',
            text: 'Select All'
        }]
    }]
}, {
    id: 'communication',
    list: [{
        onClick: '',
        text: 'Replace communication with Audio'
    }, {
        onClick: '',
        text: 'Replace communication with video'
    }, {
        onClick: '',
        text: 'Replace communication with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate communication with principle'
    }, {
        onClick: '',
        text: 'Relate communication with principle aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'word',
    list: [{
        onClick: '',
        text: 'Point word to entity'
    }, 'sep', {
        onClick: '',
        text: 'Define word by entity'
    }, 'sep', {
        onClick: '',
        text: 'Identify entity from word'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'sentence',
    list: [{
        onClick: '',
        text: 'Identify word in sentence'
    }, {
        onClick: '',
        text: 'Identify part of sentence'
    }, 'sep', {
        onClick: '',
        text: 'Point sentence to entity'
    }, {
        onClick: '',
        text: 'Point sentence to information'
    }, {
        onClick: '',
        text: 'Point sentence to group of entities'
    }, 'sep', {
        onClick: '',
        text: 'Relate sentence with principle'
    }, {
        onClick: '',
        text: 'Relate sentence with principle aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'paragraph',
    list: [{
        onClick: '',
        text: 'Identify sentence in paragraph'
    }, {
        onClick: '',
        text: 'Identify part of paragraph'
    }, 'sep', {
        onClick: '',
        text: 'Point paragraph to entity'
    }, {
        onClick: '',
        text: 'Point paragraph to information'
    }, {
        onClick: '',
        text: 'Point paragraph to group of entities'
    }, 'sep', {
        onClick: '',
        text: 'Relate paragraph with principle'
    }, {
        onClick: '',
        text: 'relate paragraph with principle aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'communicationElement',
    list: [{
        onClick: '',
        text: 'Replace Communication Element with picture'
    }, {
        onClick: '',
        text: 'Replace Communication Element with audio'
    }, {
        onClick: '',
        text: 'Replace Communication Element with video'
    }, {
        onClick: '',
        text: 'Replace Communication Element with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Communication Element with Principle'
    }, {
        onClick: '',
        text: "Relate Communication Element with Principle Aspect"
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'information',
    list: [{
        onClick: '',
        text: 'Replace Information with Image'
    }, {
        onClick: '',
        text: 'Relace Information with Audio'
    }, {
        onClick: '',
        text: 'Replace Information with Video'
    }, {
        onClick: '',
        text: 'Replace Information with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Add Audio for Information'
    }, {
        onClick: '',
        text: 'Add Video for Information'
    }, 'sep', {
        onClick: '',
        text: 'Point Information to Entity'
    }, 'sep', {
        onClick: '',
        text: 'Relate Information with Principle'
    }, {
        onClick: '',
        text: 'Relate Information with Principle Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red' 
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'entity',
    list: [{
        onClick: '',
        text: 'Replace entity with picture'
    }, {
        onClick: '',
        text: 'Relace entity with Audio'
    }, {
        onClick: '',
        text: 'Replace entity with Video'
    }, {
        onClick: '',
        text: 'Relace entity with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Identify entity by word'
    }, 'sep', {
        onClick: '',
        text: 'Define word from entity'
    }, 'sep', {
        onClick: '',
        text: 'Define word from entity'
    }, 'sep', {
        onClick: '',
        text: 'Relate entity with Principle'
    }, {
        onClick: '',
        text: 'Relate entity with operating principle'
    }, {
        onClick: '',
        text: 'Relate entity with subset of principle'
    }, {
        onClick: '',
        text: 'Relate entity with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate enity with Principle Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'question',
    list: [{
        onClick: '',
        text: 'Point question to answer'
    }, {
        onClick: '',
        text: 'Point question to entity'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'answer',
    list: [{
        onClick: '',
        text: 'Point answer to entity'
    }, {
        onClick: '',
        text: 'Point answer to information'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'function',
    list: [{
        onClick: '',
        text: 'Add part of function'
    }, {
        onClick: '',
        text: 'Add sub function'
    }, 'sep', {
        onClick: '',
        text: 'Replace function with video'
    }, {
        onClick: '',
        text: 'Replace function with audio'
    }, {
        onClick: '',
        text: 'Replace function with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate function with Principle'
    }, {
        onClick: '',
        text: 'Relate function with Priciple Aspect'
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'aspect',
    list: [{
        onClick: '',
        text: 'Add aspect or part of aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate aspect with principle'
    }, {
        onClick: '',
        text: 'Relate aspect with person'
    }, {
        onClick: '',
        text: 'Relate aspect with enity'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'test',
    list: [{
        onClick: '',
        text: 'Add test'
    }, {
        onClick: '',
        text: 'Add part of Test'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'functionstatus',
    list: [{
        onClick: '',
        text: 'Replace entity with Picture'
    }, {
        onClick: '',
        text: 'Replace entity with video'
    }, {
        onClick: '',
        text: 'Replace entity with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Add part to entity'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'picture',
    list: [{
        onClick: '',
        text: 'Insert or load picture form file'
    }, 'sep', {
        onClick: '',
        text: 'Point picture to entity'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'video',
    list: [{
        onClick: '',
        text: 'Insert or load video from file'
    }, 'sep', {
        onClick: '',
        text: 'Play Video'
    }, 'sep', {
        onClick: '',
        text: 'Point video to entity'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'audio',
    list: [{
        onClick: '',
        text: 'Insert or load Audio from file'
    }, 'sep', {
        onClick: '',
        text: 'Play Audio'
    }, 'sep', {
        onClick: '',
        text: 'Point Audio to entity'
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'dictionary',
    list: [{
        onClick: '',
        text: 'Point dictionary to collection'
    }, 'sep', {
        onClick: '',
        text: 'Add word to dictionary'
    }, {
        onClick: '',
        text: 'Populate dictionary'
    }, {
        onClick: '',
        text: 'Auto arrange'
    }, 'sep', {
        onClick: '',
        text: 'Remove word from dictionary'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'wordCircle',
    list: [{
        onClick: '',
        text: 'Point word to entity'
    }, 'sep', {
        onClick: '',
        text: 'Define word by entity'
    }, 'sep', {
        onClick: '',
        text: 'Identify entity from word'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'collection',
    list: [{
        onClick: '',
        text: 'Add entity to Collection'
    }, {
        onClick: '',
        text: 'Identify entity in collection'
    }, {
        onClick: '',
        text: 'Add item to collection'
    }, {
        onClick: '',
        text: 'Populate Collection'
    }, {
        onClick: '',
        text: 'Auto arrange'
    }, 'sep', {
        onClick: '',
        text: 'Remove item/entity from collection'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'entitycircle',
    list: [{
        onClick: '',
        text: 'Point Entity to Word'
    }, 'sep', {
        onClick: '',
        text: 'Define Entity to Word'
    }, 'sep', {
        onClick: '',
        text: 'Identify Word from Entity'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'application',
    list: [{
        onClick: '',
        text: 'Add Part to Application'
    }, {
        onClick: '',
        text: 'Add Sub to Application'
    }, {
        onClick: '',
        text: 'Add Audio for Application'
    }, {
        onClick: '',
        text: 'Add Video for Application'
    }, 'sep', {
        onClick: '',
        text: 'Replace Application with Image'
    }, {
        onClick: '',
        text: 'Replace Application with Audio'
    }, {
        onClick: '',
        text: 'Replace Application with Video'
    }, {
        onClick: '',
        text: 'Replace Application with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Application with Principle'
    }, {
        onClick: '',
        text: 'Relate Application with operating principle'
    }, {
        onClick: '',
        text: 'Relate Application with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Application with main set of principle'
    }, {
        onClick: '',
        text: 'Relate Application with Principle\'s aspect'
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'commFunction',
    list: [{
        onClick: '',
        text: 'Add part of function'
    }, {
        onClick: '',
        text: 'Add sub function'
    }, {
        onClick: '',
        text: 'Add Aucio for function'
    }, {
        onClick: '',
        text: 'Add Video for function'
    }, 'sep', {
        onClick: '',
        text: 'Replace function with video'
    }, {
        onClick: '',
        text: 'Replace fuction with audio'
    }, {
        onClick: '',
        text: 'Replace function with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate function with Principle'
    }, {
        onClick: '',
        text: 'Relate function with operating principle'
    }, {
        onClick: '',
        text: 'Relate function with subset of principle'
    }, {
        onClick: '',
        text: 'Relate function with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate function with Principle\'s aspect',
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'commResult',
    list: [{
        onClick: '',
        text: 'Add part to result'
    }, {
        onClick: '',
        text: 'Add sub application result'
    }, 'sep', {
        onClick: '',
        text: 'Replace result with video'
    }, {
        onClick: '',
        text: 'Replace result with audio'
    }, 'sep', {
        onClick: '',
        text: 'Relate result with operating principle'
    }, {
        onClick: '',
        text: 'Relate result with subset of principle'
    }, {
        onClick: '',
        text: 'Relate result with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate result with principle aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'f(x)',
    list: [{
        onClick: '',
        text: 'Add part of function'
    }, {
        onClick: '',
        text: 'Add sub function'
    }, {
        onClick: '',
        text: 'Add Aucio for function'
    }, {
        onClick: '',
        text: 'Add Video for function'
    }, 'sep', {
        onClick: '',
        text: 'Replace function with video'
    }, {
        onClick: '',
        text: 'Replace fuction with audio'
    }, {
        onClick: '',
        text: 'Replace function with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate function with Principle'
    }, {
        onClick: '',
        text: 'Relate function with Principle\'s aspect',
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'action',
    list: [{
        onClick: '',
        text: 'Replace Action with Video' 
    }, {
        onClick: '',
        text: 'Replace Action with Audio'
    }, {
        onClick: '',
        text: 'Replace Action with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Add Part to Action'
    }, 'sep', {
        onClick: '',
        text: 'Relate Action with Principle'
    }, {
        onClick: '',
        text: 'Relate Action with operating principle'
    }, {
        onClick: 'Relate Action with subset of principle'
    }, {
        onClick: '',
        text: 'Telate Action with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Action with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'reason',
    list: [{
        onClick: '',
        text: 'Add Part to Reason'
    }, 'sep', {
        onClick: '',
        text: 'Replace Reason with video'
    }, {
        onClick: '',
        text: 'Replace Reason with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Reason with Principle'
    }, {
        onClick: '',
        text: 'Relate Reason with operating principle'
    }, {
        onClick: '',
        text: 'Relate Reason with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Reason with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Reason with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'work',
    list: [{
        onClick: '',
        text: 'Replace Work with Audio'
    }, {
        onClick: '',
        text: 'Replace Work with Video'
    }, {
        onClick: '',
        text: 'Replace Work with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Add Part to Work'
    }, {
        onClick: '',
        text: 'Relate Work with Principle'
    }, {
        onClick: '',
        text: 'Relate Work with operating principle'
    }, {
        onClick: '',
        text: 'relate Work with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Wotk with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Work with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'emptyContainer',
    list: [{
        onClick: '',
        text: 'Add Part to Entity'
    }]
}, {
    id: 'workinput',
    list: [{
        onClick: '',
        text: 'Add input'
    }, 'sep', {
        onClick: '',
        text: 'Remove input'
    }, 'sep', {
        onClick: '',
        text: 'Replace Work with Audio'
    }, {
        onClick: '',
        text: 'Replace Work with Video'
    }, {
        onClick: '',
        text: 'Replace Work with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Work with Principle'
    }, {
        onClick: '',
        text: 'Relate Work with opeating principle'
    }, {
        onClick: '',
        text: 'Relate Work with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Work with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Work with Principle\' Aspect'
    }, 'sep', {
        onClick: 'openSubModel',
        text: 'Edit'
    }]
}, {
    id: 'subFunction',
    list: [{
        onClick: '',
        text: 'Open Sub Function'
    }, 'sep', {
        onClick: '',
        text: 'Link Sub Function'
    }, 'sep', {
        onClick: '',
        text: 'Replace Sub Function with Image'
    }, {
        onClick: '',
        text: 'Replace Sub Function with Audio'
    }, {
        onClick: '',
        text: 'Replace Sub Function with Video'
    }, {
        onClick: '',
        text: 'Replace Sub Function with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sub Function with Principle'
    }, {
        onClick: '',
        text: 'Relate Sub Function with operating principle'
    }, {
        onClick: '',
        text: 'Relate Sub Function with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Sub Function with main set of prinicple'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sub Function with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'subApplication',
    list: [{
        onClick: '',
        text: 'Open Sub Application'
    }, 'sep', {
        onClick: '',
        text: 'Link Sub Application'
    }, 'sep', {
        onClick: '',
        text: 'Replace Sub Application with Image'
    }, {
        onClick: '',
        text: 'Replace Sub Application with Audio'
    }, {
        onClick: '',
        text: 'Replace Sub Application with Video'
    }, {
        onClick: '',
        text: 'Replace Sub Application with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sub Application with Principle'
    }, {
        onClick: '',
        text: 'Relate Sub Application with operating principle'
    }, {
        onClick: '',
        text: 'Relate Sub Application with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Sub Application with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sub Application with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'subResult',
    list: [{
        onClick: '',
        text: 'Open Sub Result'
    }, 'sep', {
        onClick: '',
        text: 'Link Sub Result'
    }, 'sep', {
        onClick: '',
        text: 'Replace Sub Result with Image'
    }, {
        onClick: '',
        text: 'Replace Sub Result with Audio'
    }, {
        onClick: '',
        text: 'Replace Sub Result with Video'
    }, {
        onClick: '',
        text: 'Replace Sub Result with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sub Result with Principle'
    }, {
        onClick: '',
        text: 'Relate Sub Result with operating Principle'
    }, {
        onClick: '',
        text: 'Relate Sub Result with subset of Principle'
    }, {
        onClick: '',
        text: 'Relate Sub Result with main set of Principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sub Result with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'groupFunction',
    list: [{
        onClick: '',
        text: 'Replace Group Function with Image'
    }, {
        onClick: '',
        text: 'Replace Group Function with Audio'
    }, {
        onClick: '',
        text: 'Replace Group Function with Video'
    }, {
        onClick: '',
        text: 'Replace Group Function with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Group Function with Principle'
    }, {
        onClick: '',
        text: 'Relate Group Function with operating principle'
    }, {
        onClick: '',
        text: 'Relate Group Funciton with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Group Function with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Group Function with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'groupApplication',
    list: [{
        onClick: '',
        text: 'Replace Group Application with Image'
    }, {
        onClick: '',
        text: 'Replace Group Application with Audio'
    }, {
        onClick: '',
        text: 'Replace Group Application with Video'
    }, {
        onClick: '',
        text: 'Replace Group Application witch Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Group Application with Principle'
    }, {
        onClick: '',
        text: 'Relate Group Application with operating principle'
    }, {
        onClick: '',
        text: 'Relate Group Application with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Group Application with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Group Application with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'groupResult',
    list: [{
        onClick: '',
        text: 'Replace Group Result with Image'
    }, {
        onClick: '',
        text: 'Replace Group Result with Audio'
    }, {
        onClick: '',
        text: 'Replace Group Result with Video'
    }, {
        onClick: '',
        text: 'Replace Group Result with Sketch'
    }, 'sep', {
        onClick: '',
        text: 'Relate Group Result with Principle'
    }, {
        onClick: '',
        text: 'Relate Group Result with operating principle'
    }, {
        onClick: '',
        text: 'Relate Group Result with subset of principle'
    }, {
        onClick: '',
        text: 'Relate Group Result with main set of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Group Result with Principle\'s Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'principle',
    list: [{
        onClick: '',
        text: 'Identify Part of Principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate Principle with Person'
    }, {
        onClick: '',
        text: 'Relate Principle with Principle'
    }, {
        onClick: '',
        text: 'Relate Principle with Principle\'s Aspect'
    }, {
        onClick: '',
        text: 'Relate Principle with Person Aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate Principle with Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate Principle with Main Set of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'reference',
    list: [{
        onClick: '',
        text: 'View linked document'
    }, 'sep', {
        onClick: '',
        text: 'Add linked document'
    }, {
        onClick: '',
        text: 'Add Part of Reference'
    }, 'sep', {
        onClick: '',
        text: 'Identify Principle in Reference'
    }, 'sep', {
        onClick: '',
        text: 'Relate Reference with priciple'
    }, {
        onClick: '',
        text: 'Relate Reference with principle\'s Aspect'
    }, {
        onClick: '',
        text: 'Relate Reference with Person'
    }, {
        onClick: '',
        text: 'Relate Reference with Person\'s Aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate Reference with Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate Reference with Main Set of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'sentenceAnalysis',
    list: [{
        onClick: '',
        text: 'Identify Part of Analysis'
    }, 'sep', {
        onClick: '',
        text: 'Relate Sentence Analysis with Principle'
    }, {
        onClick: '',
        text: 'Relate Analysis with Principle aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate Analysis with Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate Analysis with Main set of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'feedback',
    list: [{
        onClick: '',
        text: 'Identify Part of Feedback'
    }, {
        onClick: '',
        text: 'Relate Feedback with Principle'
    }, {
        onClick: '',
        text: 'Relate Feedback with Principle Aspect'
    }, {
        onClick: '',
        text: 'Relate Feedback with Person'
    }, {
        onClick: '',
        text: 'Relate Feedback with Person Aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate Feedback with Subset of Priciple'
    }, {
        onClick: '',
        text: 'Relate Feedback with Mainset of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'operatingPrinciple',
    list: [{
        onClick: '',
        text: 'Identify part of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate principle with person'
    }, {
        onClick: '',
        text: 'Relate main set with principle'
    }, {
        onClick: '',
        text: 'Relate main set with subset'
    }, {
        onClick: '',
        text: 'Realte main set with aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'error',
    list: [{
        onClick: '',
        text: 'Idenitify part of Error'
    }, 'sep', {
        onClick: '',
        text: 'Error gives rise to Problem'
    }, 'sep', {
        onClick: '',
        text: 'Show Problem produce'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'compensator',
    list: [{
        onClick: '',
        text: 'Identify part of compensator'
    }, 'sep', {
        onClick: '',
        text: 'Relate Compensator with Principle'
    }, {
        onClick: '',
        text: 'Relate Compensator with Principle Aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate Compensator with Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate Compensator with Main set of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'problem',
    list: [{
        onClick: '',
        text: 'Identify part of problem'
    }, 'sep', {
        onClick: '',
        text: 'Show Error produced from'
    }, {
        onClick: '',
        text: 'Show Error derrived from'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'problemStatement',
    list: [{
        onClick: '',
        text: 'Identify part of problem'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'mainSetofPrinciple',
    list: [{
        onClick: '',
        text: 'Identify set in principle'
    }, {
        onClick: '',
        text: 'Identify part of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate main set with principle'
    }, {
        onClick: '',
        text: 'Relate main set with subset'
    }, {
        onClick: '',
        text: 'Relate main set with principle aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate main set with person'
    }, {
        onClick: '',
        text: 'Relate main set with person aspect'
    }, {
        onClick: '',
        text: 'Relate main set set with group of people'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'subSetofPrinciple',
    list: [{
        onClick: '',
        text: 'Identify set in principle'
    }, {
        onClick: '',
        text: 'Identify part of principle'
    }, 'sep', {
        onClick: '',
        text: 'Relate subset with subset'
    }, {
        onClick: '',
        text: 'Relate subset with main set'
    }, {
        onClick: '',
        text: 'Relate subset with principle'
    }, {
        onClick: '',
        text: 'Relate subset with principle aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate subset with person'
    }, {
        onClick: '',
        text: 'Relate subset with person aspect'
    }, {
        onClick: '',
        text: 'Relate subset with group of people'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'analysisWindow',
    list: [{
        onClick: '',
        text: 'Identify Part of Analysis'
    }, 'sep', {
        onClick: '',
        text: 'Relate Analysis with Principle'
    }, {
        onClick: '',
        text: 'Relate Analysis with Principle Aspect'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'ecf',
    list: [{
        onClick: '',
        text: 'Identify part of entity'
    }, 'sep', {
        onClick: '',
        text: 'Relate ECF with Principle'
    }, {
        onClick: '',
        text: 'Relate ECF with Principle Aspect'
    }, 'sep', {
        onClick: '',
        text: 'Relate ECF with Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate ECF with Mainset of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'problemDevelopment',
    list: [{
        onClick: '',
        text: 'Add Error'
    }, {
        onClick: '',
        text: 'Add problem'
    }, 'sep', {
        onClick: '',
        text: 'Show error'
    }, {
        onClick: '',
        text: 'Show problem'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'principleAspect',
    list: [{
        onClick: '',
        text: 'Relate Principle Aspect with Priciple Aspect'
    }, {
        onClick: '',
        text: 'Realte Pricniple Aspect with Pricniple'
    }, 'sep', {
        onClick: '',
        text: 'Relate Principle Aspect with Person Aspect'
    }, {
        onClick: '',
        text: 'Relate Principle Aspect with Person'
    }, {
        onClick: '',
        text: 'Relate Principle Aspect with Group of people'
    }, 'sep', {
        onClick: '',
        text: 'Relate Principle Aspect with Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate Principle Aspect with Mainset of Princple'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'solution',
    list: [{
        onClick: '',
        text: 'Show problem solved'
    }, 'sep', {
        onClick: '',
        text: 'Identify part of solution'
    }, 'sep', {
        onClick: '',
        text: 'Relate solution with principle'
    }, {
        onClick: '',
        text: 'Relate solution with operating principle'
    }, {
        onClick: '',
        text: 'Relate solution with principle aspect'
    }, 'sep', {
        onClick: '',
        text: 'Related solution iwth Subset of Principle'
    }, {
        onClick: '',
        text: 'Relate solution with Mainset of Principle'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'location',
    list: [{
        onClick: '',
        text: 'Replace location with map'
    }, {
        onClick: '',
        text: 'Replace area with image'
    }, 'sep', {
        onClick: '',
        text: 'Identify part in location'
    }, 'sep', {
        onClick: '',
        text: 'Show location as house'
    }, {
        onClick: '',
        text: 'Replace location with house'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'system',
    list: [{
        onClick: '',
        text: 'Associate system with theory'
    }, {
        onClick: '',
        text: 'Associate system with utilization theory'
    }, 'sep', {
        onClick: '',
        text: 'Replace system with image'
    }, {
        onClick: '',
        text: 'Replace system with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Guide system with theory'
    }, {
        onClick: '',
        text: 'Guide system with utilization theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate system with theory'
    }, {
        onClick: '',
        text: 'Relate system with utilization thoery'
    }, {
        onClick: '',
        text: 'Relate system with theorem'
    }, {
        onClick: '',
        text: 'Relate system with system'
    }, 'sep', {
        onClick: '',
        text: 'Relate system with system characteristics'
    }, {
        onClick: '',
        text: 'Relate system with theory characteristics'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Send and receive signals',
        sub: [{
            onClick: '',
            text: 'Send Green receive green'
        }, {
            onClick: '',
            text: 'Send green receive red'
        }, 'sep', {
            onClick: '',
            text: 'Send red receive green'
        }, {
            onClick: '',
            text: 'Send red receive red'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Send Signal',
        sub: [{
            onClick: '',
            text: 'Red'
        }, {
            onClick: '',
            text: 'Green'
        }]
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'groupSystem',
    list: [{
        onClick: '',
        text: 'Associate group of systems with theory'
    }, {
        onClick: '',
        text: 'Associate group of systems with utilization theory'
    }, 'sep', {
        onClick: '',
        text: 'Replace group of systems with image'
    }, {
        onClick: '',
        text: 'Replace group of system with sketch'
    }, 'sep', {
        onClick: '',
        text:' Guide group of systems with theory'
    }, {
        onClick: '',
        text: 'Guide group of systems with utilization theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate group of systems with theory'
    }, {
        onClick: '',
        text: 'Relate group of systems with utilization theory'
    }, {
        onClick: '',
        text: 'Relate group of systems with theorem'
    }, {
        onClick: '',
        text: 'Relate group of systems with system'
    }, 'sep', {
        onClick: '',
        text: 'Relate group of systems with system characteristic'
    }, {
        onClick: '',
        text: 'Relate group of systems with theory characteristic'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'constantCharaceristic',
    list: [{
        onClick: '',
        text: 'Relate Constant Characteristic with Constant Characteristic'
    }, {
        onClick: '',
        text: 'Relate Constant Characteristic with System'
    }, {
        onClick: '',
        text: 'Relate Constant Characteristic with Theory Characteristic'
    }, 'sep', {
        onClick: '',
        text: 'Relate Constant Characteristic with Theory'
    }, {
        onClick: '',
        text: 'Relate Constant Characteritic with utilization theory'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'linkedNode',
    list: [{
        onClick: '',
        text: 'Link Model'
    }, {
        onClick: '',
        text: 'Open Model'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'theory',
    list: [{
        onClick: '',
        text: 'Identify theorem in theory'
    }, 'sep', {
        onClick: '',
        text: 'Expand selected theory'
    }, {
        onClick: '',
        text: 'Remove theorem in theory'
    }, 'sep', {
        onClick: '',
        text: 'Interpret slected theory'
    }, {
        onClick: '',
        text: 'View theory horizontally'
    }, {
        onClick: '',
        text: 'Group theorems in theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate theory with theory'
    }, {
        onClick: '',
        text: 'Relate theory with fundamental'
    }, {
        onClick: '',
        text: 'Relate theory with system'
    }, {
        onClick: '',
        text: 'Related therory with Utilization Theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate theory with theory characteristic'
    }, {
        onClick: '',
        text: 'Relate theory with system characteristic'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'theorem',
    list: [{
        onClick: '',
        text: 'Interpret selected theorem'
    }, 'sep', {
        onClick: '',
        text: 'Apply selected theorem'
    }, 'sep', {
        onClick: '',
        text: 'Relate theorem with system'
    }, {
        onClick: '',
        text: 'Relate theorem with theory'
    }, {
        onClick: '',
        text: 'Relate theorem with Utilization Theory'
    }, {
        onClick: '',
        text: 'Relate theorem with Fundamental of Theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate theorem with Theory Characteristic'
    }, {
        onClick: '',
        text: 'Relate theorem with System Characteristic'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'reference',
    list: [{
        onClick: '',
        text: 'Identify theory in reference'
    }, 'sep', {
        onClick: '',
        text: 'View theory in reference'
    }, 'sep', {
        onClick: '',
        text: 'Add theory to reference'
    }, {
        onClick: '',
        text: 'Add theorem to reference'
    }, 'sep', {
        onClick: '',
        text: 'Show theory in reference as set'
    }, {
        onClick: '',
        text: 'Show theory in reference with number'
    }, 'sep', {
        onClick: '',
        text: 'Apply theory in reference'
    }, {
        onClick: '',
        text: 'Hide theory in reference'
    }, {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'theoryCharacteristic',
    list: [{
        onClick: '',
        text: 'Relate thoery characteristic with theory characteristic'
    }, 'sep', {
        onClick: '',
        text: 'Relate theory characteristic with theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate theory characteristic with system characteristic'
    }, {
        onClick: '',
        text: 'Relate theory characteristic with system'
    }, 'sep', {
        onClick: '',
        text: 'Relate theory characteristic with fundamental theory'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'addedFunction',
    list: [{
        onClick: '',
        text: 'Replace function with video'
    }, {
        onClick: '',
        text: 'Replace function with picture'
    }, {
        onClick: '',
        text: 'Replace function with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'functionSystem',
    list: [{
        onClick: '',
        text: 'Add added function',
    }, {
        onClick: '',
        text: 'Add existing function'
    }, 'sep', {
        onClick: '',
        text: 'Identify existing function'
    }, {
        onClick: '',
        text: 'Identify added function'
    }, 'sep', {
        onClick: '',
        text: 'Show added function area or region'
    }, {
        onClick: '',
        text: 'Show existing function area or region'
    }, 'sep', {
        onClick: '',
        text: 'Hide added function area or region'
    }, {
        onClick: '',
        text: 'Hide existing function area or region'
    }, 'sep', {
        onClick: '',
        text: 'Remove added function'
    }, {
        onClick: '',
        text: 'Remove existing function'
    }, 'sep',{
        onClick: '',
        text: 'Replace with Map'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'life',
    list: [{
        onClick: '',
        text: 'Identify existing function'
    }, {
        onClick: '',
        text: 'Identify added function'
    }, 'sep', {
        onClick: '',
        text: 'Show added function area or region'
    }, {
        onClick: '',
        text: 'Show existing function area or region'
    }, 'sep', {
        onClick: '',
        text: 'Hide added function area or region'
    }, {
        onClick: '',
        text: 'Hide existing function area or region'
    }, 'sep', {
        onClick: '',
        text: 'Remove added function'
    }, {
        onClick: '',
        text: 'Remove existing function'
    }, 'sep',{
        onClick: '',
        text: 'Replace with Map'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'l(t)',
    list: [{
        onClick: '',
        text: 'Identify existing function'
    }, {
        onClick: '',
        text: 'Identify added function'
    }, 'sep', {
        onClick: '',
        text: 'Replace function with video'
    }, {
        onClick: '',
        text: 'Replace function with picture'
    }, {
        onClick: '',
        text: 'Replace function with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'instrument',
    list: [{
        onClick: '',
        text: 'Replace instrument with picture'
    }, {
        onClick: '',
        text: 'Replace instrument with video'
    }, {
        onClick: '',
        text: 'Replace instrument with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'method',
    list: [{
        onClick: '',
        text: 'Add audio for method'
    }, {
        onClick: '',
        text: 'Add Video for method'
    }, 'sep', {
        onClick: '',
        text: 'Replace method with picture'
    }, {
        onClick: '',
        text: 'Replace method with video'
    }, {
        onClick: '',
        text: 'Replace method with audio'
    }, {
        onClick: '',
        text: 'Replace method with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'inputElement',
    list: [{
        onClick: '',
        text: 'Replace input element with photo'
    }, {
        onClick: '',
        text: 'Replace input element with video'
    }, {
        onClick: '',
        text: 'Replace input element with sketch'
    }, 'sep', {
        onClick: '',
        text: 'Edit'
    }]
}, {
    id: 'derrivative',
    list: [{
        onClick: '',
        text: 'Replace with photo'
    }, {
        onClick: '',
        text: 'Replace with video'
    }, {
        onClick: '',
        text: 'Replace with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'naturalElement',
    list: [{
        onClick: '',
        text: 'Add Element'
    }, 'sep', {
        onClick: '',
        text: 'Remove Element'
    }, 'sep', {
        onClick: '',
        text: 'Replace natural element with photo'
    }, {
        onClick: '',
        text: 'Replace natural element with video'
    }, {
        onClick: '',
        text: 'Replace natural element with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'exchangableElement',
    list: [{
        onClick: '',
        text: 'Replace element with photo'
    }, {
        onClick: '',
        text: 'Replace element with video'
    }, {
        onClick: '',
        text: 'Replace element with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'methodFunction',
    list: [{
        onClick: '',
        text: 'Replace function with photo'
    }, {
        onClick: '',
        text: 'Replace function with video'
    }, {
        onClick: '',
        text: 'Replace function with sketch'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'emptyContainer',
    list: [{
        onClick: '',
        text: 'View element horizontally'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'fundamentalTheory',
    list: [{
        onClick: '',
        text: 'Associate fundamental with system'
    }, {
        onClick: '',
        text: 'Associate fundmental with theory'
    }, 'sep', {
        onClick: '',
        text: 'Relate fundamental with system'
    }, {
        onClick: '',
        text: 'Relate fundamental with theory'
    }, {
        onClick: '',
        text: 'Relate fundamental with fundamental'
    }, 'sep', {
        onClick: '',
        text: 'Relate fundamental with system characteristic'
    }, {
        onClick: '',
        text: 'Relate fundamental with theory characterisitic'
    }, 'sep', {
        onClick: 'openSubList',
        text: 'Edit'
    }]
}, {
    id: 'edit',
    list: [{
        onClick: '',
        text: 'Cut',
        icon : 'flaticon-scissors'
    }, {
        onClick: '',
        text: 'Copy',
        icon: 'flaticon-copy'
    }, {
        onClick: '',
        text: 'Paste',
        icon: 'flaticon-paste'
    }, 'sep', {
        onClick: '',
        text: 'Edit Text'
    }]
}];


function getMenuItems(shapeName) {
    return menuItems.find(x => x.id === shapeName);
}

function onOpenContextMenu(args) { 
    clearContextMenu();
    if (diagram.selectedItems.nodes.length)
    {
        if (diagram.selectedItems.nodes[0].properties.addInfo[0].menuId === 'empty') {
            args.cancel = true;
        }
        let menuItems = getMenuItems(diagram.selectedItems.nodes[0].properties.addInfo[0].menuId).list
        addToContextMenu(menuItems);
    }

    else {
        addToContextMenu(getMenuItems('edit').list);
    }
}

function clearContextMenu() {
    let contextMenu = document.getElementById('diagram_contextMenu');
    while (contextMenu.hasChildNodes()) {
        contextMenu.removeChild(contextMenu.firstElementChild);
    } 
}
function addToContextMenu(menuList) {
    let list = [];
    let contextMenu = document.getElementById('diagram_contextMenu');
    contextMenu.style.paddingBottom = '5px';
    for (let i = 0; i < menuList.length; i++) {
        let listItem = document.createElement('li');
        listItem.classList.add('e-menu-item');
        
        if (menuList[i].onClick === 'openSubList') {
            let subList = menuList[i].sub;
            if (menuList[i].text === 'Edit') {
                let tempArray = getMenuItems('personShapes').list;
                subList = tempArray[tempArray.length - 1].sub;
                console.log(subList);
            }
            listItem.append(menuList[i].text);
            let menuSpan = document.createElement('span');
            menuSpan.classList.add('e-icons', 'e-caret');
            listItem.addEventListener("mouseover", (event) => {
                let ypos = event.target.getBoundingClientRect().y;
                let xpos = contextMenu.getBoundingClientRect().x + contextMenu.clientWidth;
                openSubContextMenu(subList, ypos, xpos, event.target);
            });
            listItem.appendChild(menuSpan);
            list.push(listItem);
        }
        else if (menuList[i] === 'sep') {
            listItem.style.height = '0';
            listItem.style.borderBottom = 'solid lightgrey 1px';
            listItem.style.paddingLeft = '0';
            listItem.style.marginLeft = '16px'
            list.push(listItem);
        }
        else {
            listItem.addEventListener("mouseover", (event) => {
                closeSubListMenu();
            });
            if (menuList[i].icon != undefined) {
                let iconSpan = document.createElement('span');
                iconSpan.classList.add(menuList[i].icon);
                iconSpan.style.marginRight = '5px';
                listItem.appendChild(iconSpan);
            }
            listItem.append(menuList[i].text);
            list.push(listItem);
        }
    }
    
    for (let i = 0; i < list.length; i++) {
        contextMenu.appendChild(list[i]);
    }
}

function openSubContextMenu(menuList, top, left, parent) {
    let ul = document.getElementById('subListDiagram');
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = 'subListDiagram';
        ul.classList.add('e-control', 'e-contextmenu', 'e-lib', 'e-menu-parent');
    }

    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    for (let i = 0; i < menuList.length; i++) {
        let listItem = document.createElement('li');
        listItem.classList.add('e-menu-item', 'grey-onhover');
        console.log(menuList[i].icon);
        if (menuList[i].icon != undefined) {
            let iconSpan = document.createElement('span');
            iconSpan.classList.add(menuList[i].icon);
            iconSpan.style.marginRight = '5px';
            listItem.appendChild(iconSpan);
        }
        if (menuList[i].onClick === 'openSubList') {
            // Do for sub list
        }
        else if (menuList[i] === 'sep') {
            listItem.style.height = '0';
            listItem.style.borderBottom = 'solid lightgrey 1px';
            listItem.style.paddingLeft = '0';
            listItem.style.marginLeft = '16px'
            ul.appendChild(listItem);
        }
        else {
            listItem.append(menuList[i].text);
            ul.appendChild(listItem);
        }
    }
    ul.style.display = 'block';
    ul.style.paddingBottom = '5px';
    ul.style.position = 'absolute';
    if(document.documentElement.clientHeight < top + ul.clientHeight) {
        ul.style.top = (top - ul.clientHeight + 25) + 'px';
    }
    else {
        ul.style.top = top + 'px';
    }

    if (document.documentElement.clientWidth < left + ul.clientWidth) {
        ul.style.left = (left - document.getElementById('diagram_contextMenu').clientWidth - ul.clientWidth) + 'px';
    }
    else {
        ul.style.left = left + 'px';
    }
    ul.style.zIndex = '1000';

    let wrapper = document.getElementById('subContextWrapper');
    wrapper.appendChild(ul);
}

function closeDiagramContextMenu() {
    document.getElementById('subListDiagram').style.display = 'none';
    document.getElementById('diagram_contextMenu').style.display = 'none';
}

function closeSubListMenu() {
    document.getElementById('subListDiagram').style.display = 'none';
}