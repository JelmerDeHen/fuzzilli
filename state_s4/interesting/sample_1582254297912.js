function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = v3[1337];
// v4 = .unknown
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v13 = {ownKeys:Array,isExtensible:v4,get:gc,call:Object,set:Object,has:Object,getPrototypeOf:gc,preventExtensions:Array};
// v13 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["set", "get", "preventExtensions", "has", "call", "getPrototypeOf", "ownKeys"])
const v15 = new Proxy(v12,v13);
// v15 = .unknown
const v18 = gc();
// v18 = .undefined
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v25 = Array(2815038421);
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v27 = gc();
// v27 = .undefined
}
%NeverOptimizeFunction(main);
main();
