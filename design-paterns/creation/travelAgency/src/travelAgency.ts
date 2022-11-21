class Passenger {
    name: string
    favoritVehicle: string
}


interface Vehicle {
    name: string
    transport(passenger: Passenger): void 
}

class Plane implements Vehicle {
    name: "plane"
    transport(passenger: Passenger): void {
        console.log(`${passenger.name} was transported by plane`)
    }
}

class Bus implements Vehicle {
    name: "Bus"
    transport(passenger: Passenger): void {
        console.log(`${passenger.name} was transported by bus`)
    }
}

class Taxi implements Vehicle {
    name: "Taxi"
    transport(passenger: Passenger): void {
        console.log(`${passenger.name} was transported by taxi`)
    }
}

class Boat implements Vehicle {
    name: "Boat"
    transport(passenger: Passenger): void {
        console.log(`${passenger.name} was transported by boat`)
    }
}

enum VehicleType {
    Plane,
    Bus,
    Taxi,
    Boat
}

class VehicleFactory {
    private static instance: VehicleFactory;
    
    public static getInstance(): VehicleFactory{
        if (!VehicleFactory.instance){
            VehicleFactory.instance = new VehicleFactory()
        }

        return VehicleFactory.instance
    }
    
    createVehicle(type: VehicleType){
        switch (type) {
            case VehicleType.Plane:
                return new Plane()
            case VehicleType.Bus:
                return new Bus()
            case VehicleType.Taxi:
                return new Taxi()
            case VehicleType.Boat:
                return new Boat()
        }
    }
}


class TravelAgency {
    name: string

    construnctor(name:string){
        this.name = name
    }

    vehicles: Vehicle[] = []

    assignVehicle(passenger: Passenger) { 
        let favoriteVehicles = this.vehicles.filter(v=> v.name)
        
        if(passenger.favoritVehicle in favoriteVehicles){
           let ind = this.vehicles.indexOf(favoriteVehicles[0])
           this.vehicles.splice(ind,ind) 
        }
        else{
            this.vehicles.pop()
        }
    }
}