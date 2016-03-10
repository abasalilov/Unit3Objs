/*Exercise

Create a pseudo class that creates "house" objects. The objects the pseudo class creates should have a customizable number of rooms, a color and size. 
You should also have a method that returns a sentence that says "Your house has x number of rooms is x color and x size". 
To do this you can use any of the three coding patterns mentioned in this tutorial. Bonus points to do it using all three!*/

function makeHouse(room, color, size) {
    var house = {};
    house.room = room; 
    house.color = color;
    house.description = function() {
        return console.log("Your house has "+ this.room +"rooms is " + this.color+ " and " + this.size+".");
    };

    return house;

}

var jack = makeHouse(4, "peach", "4400");
console.log(jack);
