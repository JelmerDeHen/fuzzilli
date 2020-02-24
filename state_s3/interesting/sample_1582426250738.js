function main() {
const v4 = [2,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [Uint8ClampedArray,13.37,2];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v6 = v4;
v5.length = 1337;
const v8 = {get:Uint8ClampedArray};
// v8 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v10 = Object.freeze(v5,65537,v8);
// v10 = .undefined
const v12 = v5.indexOf(v6,1337);
// v12 = .integer
}
%NeverOptimizeFunction(main);
main();
