let {Food} = require("./food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    findItemIndex(name) {
        let inventory = this.items;
        for (let i = 0; i < inventory.length; i++) {
          let currentItem = inventory[i];
          if (currentItem.name === name) {
            return i;
          }
        }
    }

    removeItem(name) {
        let index = this.findItemIndex(name);
        return this.items.splice(index, 1)[0];
      }

    takeItem(itemName) {
        // Fill this in
        this.items.push(this.currentRoom.removeItem(itemName));

    }

    dropItem(itemName) {

        // Fill this in
        this.currentRoom.addItem(this.removeItem(itemName));
    }

    eatItem(itemName) {
        // Fill this in
        let index = this.findItemIndex(itemName);
        let item = this.items[index];

        if (item instanceof Food) {
            this.removeItem(itemName);
        }

    }

    getItemByName(name) {

        // Fill this in
        let index = this.findItemIndex(name);
        return this.removeItem(name);

    }
}


module.exports = {
  Player,
};
