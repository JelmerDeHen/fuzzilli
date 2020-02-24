function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,v4,13.37,1024];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {e:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
const v9 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"], withMethods: ["toString"])
let v10 = v9;
const v16 = {length:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v17 = {constructor:13.37,length:13.37,__proto__:v16,toString:Number,a:"N0Xx92zvHQ"};
// v17 = .object(ofGroup: Object, withProperties: ["a", "constructor", "length", "__proto__"], withMethods: ["toString"])
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
const v41 = "N0Xx92zvHQ".includes(v17);
// v41 = .boolean
const v48 = Number[-536870912];
// v48 = .unknown
const v63 = typeof 1337;
// v63 = .string
const v67 = Object - 1;
// v67 = .primitive
Number.MIN_SAFE_INTEGER = 1337;
const v68 = typeof gc;
// v68 = .string
const v70 = v68 === "boolean";
// v70 = .boolean
if (v70) {
} else {
    Number.toString = v48;
}
}
%NeverOptimizeFunction(main);
main();
