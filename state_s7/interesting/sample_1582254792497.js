function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {length:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v6 = {constructor:13.37,length:13.37,__proto__:v5,length:Number,a:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["length"])
let v7 = v6;
const v9 = {set:Number};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v11 = Object.defineProperty(v7,"b",v9);
// v11 = .undefined
v4[v11] = 1024;
const v15 = v4.concat();
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();
