function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v10 = 0;
const v11 = v4[1337];
// v11 = .unknown
const v15 = "N0Xx92zvHQ".lastIndexOf(v1,1024);
// v15 = .integer
const v16 = {length:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v17 = {constructor:13.37,length:13.37,__proto__:v16,toString:Number,a:"N0Xx92zvHQ"};
// v17 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
let v18 = v17;
const v22 = Object.getPrototypeOf(Number);
// v22 = .object()
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
}
%NeverOptimizeFunction(main);
main();
