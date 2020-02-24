function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {constructor:-4294967295,__proto__:v3,toString:v3,d:-4294967295,length:v3,a:-4294967295};
// v4 = .object(ofGroup: Object, withProperties: ["d", "toString", "constructor", "a", "__proto__", "length"])
v3.toString = Promise;
v3[Promise] = v3;
let v9 = 0;
const v12 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v12 = .object(ofGroup: Object, withProperties: ["e", "toString", "b", "__proto__", "d"])
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
