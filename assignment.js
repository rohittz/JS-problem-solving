// github repository link
// convert km to m
function kilometerToMeter(kilometer) {
    // For any invalid values
    if (kilometer < 0) {
        return "Invalid kilometer value!";
    }
    return kilometer * 1000;
}

// budget calculator
function budgetCalculator(nofWatch, nofPhone, nofLaptop) {
    // For any invalid values!
    if (nofWatch < 0 || nofPhone < 0 || nofLaptop < 0) {
        return "Invalid values!";
    }
    var totalPrice = nofWatch * 50 + nofPhone * 100 + nofLaptop * 500;
    return totalPrice;
}

// hotel cost
function hotelCost(daysSpent) {
    if (daysSpent < 0) {
        return "Invalid value!";
    }
    var totalCost = 0;
    var costs = [100, 80];
    // calculating for first 20 days
    for (var i = 0; i < 2; i++) {
        if (daysSpent >= 10) {
            totalCost += 10 * costs[i];
            daysSpent -= 10;
        }
        else {
            totalCost += daysSpent * costs[i];
            daysSpent = 0;
        }
    }
    // for rest of the days
    totalCost += daysSpent * 50;
    return totalCost;
}

// megafriend
function megaFriend(listOfFriends) {
    // Assuming the first string as the largest
    var maxLength = listOfFriends[0].length;
    var maxString = listOfFriends[0];
    for (var i = 0; i < listOfFriends.length; i++) {
        var currLength = listOfFriends[i].length;
        if (currLength > maxLength) {
            maxLength = currLength;
            maxString = listOfFriends[i];
        }
    }
    // When user provides an invalid list/array
    if (maxLength == 0) {
        return "Invalid Friends list!";
    }
    return maxString;
}