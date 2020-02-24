function main() {
let v1 = 13.37;
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {b:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
v1 = Uint8ClampedArray;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = [2,1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = [Uint8ClampedArray,13.37,2];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v15 = v13;
v14.length = 1337;
const v17 = {get:Uint8ClampedArray};
// v17 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v19 = Object.seal(v14,65537,v17);
// v19 = .object()
const v21 = v14.includes(v1,v15,v14,"name",v4);
// v21 = .boolean
}
%NeverOptimizeFunction(main);
main();
