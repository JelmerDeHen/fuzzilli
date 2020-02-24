function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v10 = {};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [v10,v10];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = {get:isNaN};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v15 = Reflect.defineProperty(v11,"length",v13);
// v15 = .boolean
}
%NeverOptimizeFunction(main);
main();
