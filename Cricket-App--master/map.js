let myMap = new Map()
console.log(myMap)

myMap.set("1", "sandeep")
myMap.set(1, 50)
myMap.set(true, "trainer")
console.log("myMap", myMap)

console.log(myMap.get("1"))
console.log(myMap.get(true))
console.log(myMap.get(1))

let favPlaces = new Map([
    ["nagpur" , "City club"],
    ["Mumbai" , "juhu"],
    ["chandrapur", "sp college"],
    ])

console.log("favPlaces", favPlaces)

for(let curritem of favPlaces.keys()){
    console.log(curritem)
}
for(let curritem of favPlaces.values()){
    console.log(curritem)
}

for(let [key, values] of favPlaces){
    console.log(key, values)
}
