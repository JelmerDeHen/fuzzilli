function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v3 = v2;
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = v5;
const v7 = ~Reflect;
// v7 = .boolean
function v8(v9,v10,v11,v12,v13) {
}
const v19 = {get:v8};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v21 = Object.defineProperty(v6,"b",v19);
// v21 = .undefined
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
v3.b = "object";
}
%NeverOptimizeFunction(main);
main();