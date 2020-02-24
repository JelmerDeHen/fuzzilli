function main() {
const v1 = (-1073741824).c;
// v1 = .unknown
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = [1337,String,v7];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {e:v5,length:1337,toString:v5};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length", "e"])
const v10 = {valueOf:v9,a:v8,e:-1073741824,length:String,c:v8};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "c", "a", "valueOf"], withMethods: ["length"])
let v11 = String;
let v15 = v1;
const v17 = [Infinity,Infinity,Infinity];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = v17.__proto__;
// v18 = .object()
v7.constructor = v17;
const v19 = [v15,v17];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v20 = v19.toLocaleString();
// v20 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v21 = RegExp(v20);
// v21 = .object()
v19[1000] = v9;
let v24 = 0;
do {
    const v25 = 13.37 + 1;
    // v25 = .primitive
    v24 = v25;
} while (v24 < 8);
const v26 = RegExp("object");
// v26 = .object()
const v28 = Symbol.isConcatSpreadable;
// v28 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
(-1073741824)[v26] = v19;
const v29 = RegExp(v1);
// v29 = .object()
}
%NeverOptimizeFunction(main);
main();
