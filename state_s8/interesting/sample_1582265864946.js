function main() {
const v2 = String << String;
// v2 = .integer
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = String.fromCodePoint(65535,v2,v2,v2);
// v7 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v8 = v5;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = {constructor:v9};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v11 = {toString:65535,length:v9,e:v10,...65535,...v8,...v5};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "e"])
const v15 = {length:"N0Xx92zvHQ"};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v16 = {constructor:13.37,length:13.37,__proto__:v15,toString:Number,a:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
let v17 = v16;
}
%NeverOptimizeFunction(main);
main();
