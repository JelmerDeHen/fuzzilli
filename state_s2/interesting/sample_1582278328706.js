function main() {
const v1 = Symbol.search;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v2 = v1[v1];
// v2 = .unknown
let v5 = 0;
const v6 = Symbol.keyFor(v1);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v7 = v5 + 1;
// v7 = .primitive
v5 = v7;
let v10 = 0;
const v11 = Symbol.for(v2);
// v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v12 = v10 + 1;
// v12 = .primitive
v10 = v12;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v20 = "unscopable".charCodeAt(Uint16Array);
// v20 = .integer
const v22 = [2103850597,-290509396];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v23 = {constructor:Uint16Array,b:v22,c:v20,length:-3.0};
// v23 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "b", "length"])
let v26 = 0;
v23.__proto__ = v15;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v28 = Float32Array != 13.37;
// v28 = .boolean
}
%NeverOptimizeFunction(main);
main();
