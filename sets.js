const ids = new Set();

ids.add(1);
ids.add('abs');
ids.add(67);
ids.add(1);

for (const el of ids){
    console.log(el);
}

console.log(ids.has('abs'));

ids.delete('1');

