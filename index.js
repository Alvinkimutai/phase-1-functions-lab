// Code your solution in this file!

//distanceFromHqInBlocks
function distanceFromHqInBlocks(someValue){
   if (someValue>42){ 
    return someValue-42;
   } else {
    return 42 -someValue;
   }
}
console.log(distanceFromHqInBlocks(34));

//distanceFromHqInFeet
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}
console.log(distanceFromHqInFeet(50))


//distanceTravelledInFeet
function distanceTravelledInFeet(a, b) {
    if(b>a){
        return (b-a)*264
    } else {
        return (a-b)*264
    }
}
console.log(distanceTravelledInFeet(34, 28));

//calculatesFarePrice
function calculatesFarePrice(a, b){
    if (distanceTravelledInFeet(a, b) < 400){
        return 0;
    } else if (400 <= distanceTravelledInFeet(a, b) && distanceTravelledInFeet(a, b) <= 2000){
        return (distanceTravelledInFeet(a, b)-400)*0.02;
    } else if (2000 < distanceTravelledInFeet(a, b) && distanceTravelledInFeet(a, b) <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }

}
console.log(calculatesFarePrice(50, 58));