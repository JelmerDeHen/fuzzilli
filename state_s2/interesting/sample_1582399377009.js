function main() {
const v7 = [1337,Uint8ClampedArray];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = [1468489541,13.37,2];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v9 = v7;
v8.length = 6;
const v11 = {get:Uint8ClampedArray};
// v11 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v13 = Object.seal(v8,1337,v11);
// v13 = .object()
const v16 = v8.indexOf(undefined,v9,v8,"name",undefined);
// v16 = .integer
}
%NeverOptimizeFunction(main);
main();
