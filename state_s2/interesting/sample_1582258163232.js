function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {constructor:-4294967295,__proto__:v3,toString:v3,d:-4294967295,length:v3,a:-4294967295};
// v4 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "length", "a", "constructor", "toString"])
v3.toString = Promise;
v3[Promise] = v3;
let v9 = 0;
const v12 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v12 = .object(ofGroup: Object, withProperties: ["b", "d", "__proto__", "e", "toString"])
const v14 = Symbol.search;
// v14 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v3[v14] = v12;
const v16 = typeof "number";
// v16 = .string
const v18 = v16 === "undefined";
// v18 = .boolean
const v19 = v9 + 1;
// v19 = .primitive
v9 = v19;
}
%NeverOptimizeFunction(main);
main();
