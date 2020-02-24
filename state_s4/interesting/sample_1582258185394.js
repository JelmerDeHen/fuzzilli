function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {constructor:-4294967295,__proto__:v3,toString:v3,d:-4294967295,length:v3,a:-4294967295};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "length", "constructor", "toString", "a"])
v3.toString = Promise;
v3[Promise] = v3;
let v9 = 0;
const v12 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v12 = .object(ofGroup: Object, withProperties: ["e", "d", "toString", "__proto__", "b"])
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
