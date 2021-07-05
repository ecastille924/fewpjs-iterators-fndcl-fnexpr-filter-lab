// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(foundName => 
       foundName.toUpperCase() == name.toUpperCase() )
    }


function fuzzyMatch(drivers, name) {
    return drivers.filter(foundName =>
        foundName.charAt(0) == name.charAt(0))
}

function matchName(drivers, name) {
    return drivers.filter( function(foundName){
        if (foundName.name === name)
        return foundName
    })
}