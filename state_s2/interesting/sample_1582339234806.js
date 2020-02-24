function main() {
const v2 = new Int16Array(8);
// v2 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v8 = v7;
let v10 = undefined;
let v13 = 0;
const v15 = v13 + 1;
// v15 = .primitive
v13 = v15;
const v18 = [13.37,13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = new Set(v18);
// v19 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["forEach", "delete", "clear", "entries", "values", "keys", "has", "add"])
const v20 = v19.entries();
// v20 = .object()
let v23 = 0;
const v24 = {a:13.37,valueOf:v8,length:v4,constructor:v18,toString:v20,d:v23,c:13.37};
// v24 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "constructor", "a", "c", "__proto__", "length", "toString"])
let v27 = 0;
const v30 = Reflect.set(v24,v8,"pizpIb2dL8",v2);
// v30 = .boolean
const v31 = v27 + 1;
// v31 = .primitive
v27 = v31;
}
%NeverOptimizeFunction(main);
main();
