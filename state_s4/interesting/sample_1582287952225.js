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
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v41 = [1337,v39,13.37,6];
// v41 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v45 = Object.freeze(this,"d",v41);
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
