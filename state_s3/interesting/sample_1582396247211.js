function main() {
let v1 = 13.37;
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v9 = [2,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = [Uint8ClampedArray,13.37,2];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
v1 = 13.37;
let v15 = v9;
v10.length = 1337;
const v17 = {get:Uint8ClampedArray};
// v17 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v19 = Object.freeze(v10,65537,v17);
// v19 = .undefined
const v21 = v10.includes(v1,v15,v10,"Ol*2*xBE*6",v4);
// v21 = .boolean
const v22 = Object[65537];
// v22 = .unknown
let v25 = 0;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
}
%NeverOptimizeFunction(main);
main();
