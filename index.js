function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start)*264
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let totalFare = ""
    //First 400: free
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400)*0.02
    } else if (distance <= 2500) {
        return 25
    } {return "cannot travel that far"} 

    return totalFare
    //next 1600: .02/ft
    //2000-2500
  }