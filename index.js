function distanceFromHqInBlocks(number) {
    if (number < 42){
        return(42 - number)
    }
    else {
        return(number - 42)
    }
}

function distanceFromHqInFeet(number){
    if (number < 42){
        return((42 - number)*264)
    }
    else {
        return((number - 42)*264)
    }
}

function distanceTravelledInFeet(a,b){
    if (b > a){
        return((b - a)*264)
    }
    else{
        return((a - b)*264)
    }
}

function calculatesFarePrice(start,destination){
    let distence = distanceTravelledInFeet(start,destination)
    if (distence <= 400){
        return 0
    }
    if (distence >= 400 && distence <= 2000){
        return (distence - 400) * 0.02
    }
    else if (distence >= 2000 && distence <= 2500){
        return 25
    }
    else if (distence > 2500){
        return "cannot travel that far"
    }
}