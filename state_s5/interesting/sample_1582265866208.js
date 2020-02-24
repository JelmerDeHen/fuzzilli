function main() {
const v2 = String << String;
// v2 = .integer
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = String.fromCodePoint(65535,v2,v2,v2);
// v7 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
let v8 = v5;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {constructor:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v11 = {toString:65535,length:v9,e:v10,...65535,...v8,...v5};
// v11 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "toString"])
const v15 = {length:"N0Xx92zvHQ"};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v16 = {constructor:13.37,length:13.37,__proto__:v15,toString:Number,a:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["a", "constructor", "length", "__proto__"], withMethods: ["toString"])
let v17 = v16;
}
%NeverOptimizeFunction(main);
main();
