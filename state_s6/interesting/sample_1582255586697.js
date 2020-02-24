function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:2147483647};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v7 = {__proto__:Uint8Array,a:v6,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "valueOf", "b", "d"])
const v12 = [13.37,13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = [1337,v12,13.37,1024];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = {length:"N0Xx92zvHQ"};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v16 = {constructor:13.37,length:13.37,__proto__:v15,toString:Number,a:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
let v17 = v16;
const v19 = Number.__proto__;
// v19 = .unknown
const v20 = v4.map(v19,v17);
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v25 = typeof v7;
// v25 = .string
const v27 = v25 === "boolean";
// v27 = .boolean
}
%NeverOptimizeFunction(main);
main();
