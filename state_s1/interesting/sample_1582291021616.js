function main() {
function v3(v4,v5,v6,v7,v8) {
}
const v10 = {get:v3};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(this,"b",v10);
// v12 = .undefined
const v16 = [13.37,13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = [1337,v16,13.37,6];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v22 = Object.freeze(this,"d",v18);
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
