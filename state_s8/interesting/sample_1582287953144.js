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
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v41 = [1337,v39,13.37,6];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v45 = Object.freeze(this,"d",v41);
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
