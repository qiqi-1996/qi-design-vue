const TabValueMap = {
    "summary": "1",
    "usage": "2",
    "designer": "3",
    "developer": "4",
    "resource": "5",
    "update": "6",
    "development": "7",
}

var ValueTabMap = {}
    
Object.keys(TabValueMap).map(key => {
    ValueTabMap[TabValueMap[key]] = key;
})

const ValueRouteMap = {
    "1": "/",
    "2": "/usage/install",
    "3": "/designer/icons",
    "4": "/developer/summary",
    "5": "/resource",
    "6": "/update",
    "7": "/development",
}

export {
    TabValueMap,
    ValueTabMap,
    ValueRouteMap
}