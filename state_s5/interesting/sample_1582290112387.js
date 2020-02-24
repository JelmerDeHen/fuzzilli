function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = Promise;
let v5 = v4;
const v8 = new Proxy(v5,Object);
// v8 = .unknown
const v9 = new Promise(v8,v2,v1);
// v9 = .object()
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
}
%NeverOptimizeFunction(main);
main();
