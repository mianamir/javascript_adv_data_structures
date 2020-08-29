data = new Map();

data.set('average', 23.5);
data.set('lastResult', null);

const pakistan = {name: 'Pakistan', 212.2};

data.set(pakistan, 0.89);

for (const el of data){
    console.log(el);
}


data.set('average', 345.78);
console.log(data);

console.log(data.get('average'));
console.log(data.average);

data.delete(pakistan);