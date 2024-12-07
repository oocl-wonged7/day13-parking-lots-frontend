prompt 1:
I am going to make the frontend of a parking lot management system. below is the background:
As a Parking Manager, I am responsible for managing three parking lots:
● The Plaza Park (9 parking capacity)
● City Mall Garage (12 parking capacity)
● Office Tower Parking (9 parking capacity)
I have employed three Parking Boys to help manage these parking lots, each utilizing a specific parking strategy:
1. Standard parking strategy
2. Smart parking strategy
3. Super Smart parking strategy
To optimize management and streamline operations, I need an application that assists me in visualizing and efficiently managing 
the car parking and retrieval process, while also keeping track of the current usage of each parking lot.

First, i want to have a ParkFetchOperation component.
ParkFetchOperation:
1. input box for entering the plate number
2. a drop down list for selecting the parkingBoy, the values of them are:
"STANDARD" , "SMART", "SUPERSMART"
3. two buttons, one for park car and one for fetch car
4. Please give a label for the plate number
5. The above 3 elements should be on the same row, and center the whole component.

propmt 2:
I would like to use useContext and useReducer to manage the parking lots' information. 
This is the mocked data list: [ { "id": 1, "name": "The Plaza Park", "tickets": [ { "plateNumber": "AB-4321", "position": 1, "parkingLot": 1 } ], "capacity": 9, "availableCapacity": 8, "availablePositionRate": 0.8888888888888888, "full": false }, { "id": 2, "name": "City Mall Garage", "tickets": [ { "plateNumber": "AB-1234", "position": 1, "parkingLot": 2 } ], "capacity": 12, "availableCapacity": 11, "availablePositionRate": 0.9166666666666666, "full": false }, { "id": 3, "name": "Office Tower Parking", "tickets": [ { "plateNumber": "AB-4444", "position": 1, "parkingLot": 3 } ], "capacity": 9, "availableCapacity": 8, "availablePositionRate": 0.8888888888888888, "full": false } ] 

I want to have 3 actions: 
get allParkingLots: get a list in the above format and save it. 
park: park a car into the parking Lot and modify the above list base on the response. the expected response: { "plateNumber": "AB-5678", "position": 2, "parkingLot": 1 } 
fetch: fetch a card from the parking lot and modify the above list base on the response. the expected response: { "plateNumber": "AB-5678" }