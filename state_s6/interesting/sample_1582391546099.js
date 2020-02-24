function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v2 = {b:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = [Uint8ClampedArray,13.37,2];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v9 = v7;
const v11 = {get:Uint8ClampedArray};
// v11 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v13 = Object.seal(v8,65537,v11);
// v13 = .object()
const v14 = Object.freeze(v13);
// v14 = .undefined
let v16 = undefined;
const v18 = v8.includes(v16,v9,v8,"name",v2);
// v18 = .boolean
}
%NeverOptimizeFunction(main);
main();
