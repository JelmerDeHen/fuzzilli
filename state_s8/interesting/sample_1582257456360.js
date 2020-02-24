function main() {
let v1 = "unscopable";
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,v4,13.37,1024];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = v1.includes();
// v7 = .boolean
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v16 = {length:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v17 = {constructor:13.37,length:13.37,__proto__:v16,toString:Number,a:"N0Xx92zvHQ"};
// v17 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
let v18 = v17;
const v19 = v18 != v6;
// v19 = .boolean
let v22 = 0;
const v23 = 0 instanceof Object;
// v23 = .boolean
}
%NeverOptimizeFunction(main);
main();
