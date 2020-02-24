function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v2 = {constructor:v1,length:v1,b:v1,a:1337};
// v2 = .object(ofGroup: Object, withProperties: ["constructor", "b", "a", "length", "__proto__"])
let v5 = undefined;
let v7 = 13.37;
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {valueOf:v9};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
v7 = undefined;
const v15 = [2,1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v16 = [Uint8ClampedArray,13.37,2];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v17 = v15;
v16.length = 1337;
const v19 = {get:Uint8ClampedArray};
// v19 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v21 = Object.freeze(v16,65537,v19);
// v21 = .undefined
const v23 = v16.includes(v7,v17,v16,"Ol*2*xBE*6",v10);
// v23 = .boolean
}
%NeverOptimizeFunction(main);
main();
