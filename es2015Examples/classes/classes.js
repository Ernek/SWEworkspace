class Vehicle {
  constructor(make, model, year){
    this.make = make,
    this.model = model, 
    this.year = year 
  }
  honk() {
    console.log("Beep")
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numWheels) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, numWheels){
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine(){
    return 'VROOM!!!'
  }
}


class Garage {
  constructor(capacity, vehicles){
    this.capacity = capacity,
    this.vehicles = []
  }
  add(vehicle){
    if (this.vehicles.length < this.capacity){
      this.vehicles.push(vehicle) 
      console.log('Vehicle added')
    }
    else {
      console.log("Sorry, we're full")
    }

  }
}