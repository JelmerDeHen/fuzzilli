function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = [13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v11 = RegExp.apply(v8,v10);
// v11 = .unknown
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v19 = {constructor:13.37,length:13.37,__proto__:13.37,toString:Number,a:"constructor"};
// v19 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor"], withMethods: ["toString"])
const v20 = 13.37 != v10;
// v20 = .boolean
}
%NeverOptimizeFunction(main);
main();
