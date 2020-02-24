function main() {
this.species = Object;
delete this.species;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v12 = 0;
let v15 = 0;
let v22 = 0;
let v25 = 0;
const v39 = [13.37,13.37,13.37,13.37,13.37];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v41 = [1337,v39,13.37,6];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v45 = Object.freeze(this,"d",v41);
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
