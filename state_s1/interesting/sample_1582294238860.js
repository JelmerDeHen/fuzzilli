function main() {
function v3(v4,v5,v6,v7,v8) {
}
const v10 = {get:v3};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.preventExtensions(this,"b",v10);
// v12 = .object()
const v13 = [13.37,13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = [1337,v13,13.37,6];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = Object.freeze(this,"d",v15);
// v19 = .undefined
}
%NeverOptimizeFunction(main);
main();
