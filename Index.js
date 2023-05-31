let myMap = new Map();
myMap.set('one', 'string');
myMap.set(2, 'number');
myMap.set(true, 'boolean');

for(let name of myMap.keys()){
  console.log( name)
}
for( let name of myMap.values()){
  console.log(name)
}