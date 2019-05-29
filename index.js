let store = {drivers: [], passengers: [], trips: []}

let driverId = 0


class Driver {
  
  constructor(name) {
    this.id = ++driverId
    this.name = name
    
    store.drivers.push(this)
  }
  
  trips() {
    return store.trips.filter(function (trip) {
      return item.driverId === this.id
    }.bind(this)
    )
  }
  
  passengers() {
    return store.passengers.filter(function (passenger) {
      return passenger.tri
    })
  }
  
}

let passengerId = 0

class Passenger {
  
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    
    store.passengers.push(this)
  }
}

let tripId = 0

class Trip {
  
  constructor()
}