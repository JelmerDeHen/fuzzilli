function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v5 = "symbol";
const v6 = {isExtensible:Array,ownKeys:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["isExtensible"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v12 = new Proxy(gc,v6);
// v12 = .unknown
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
const v26 = new v12(v1,Object,v1,1);
// v26 = .object()
}
%NeverOptimizeFunction(main);
main();
