function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v21 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v20,b:"__proto__"};
// v21 = .object(ofGroup: Object, withProperties: ["b", "a", "length", "toString", "__proto__"], withMethods: ["valueOf", "__proto__"])
const v24 = [];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v25 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v24};
// v25 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v29 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"constructor"};
// v29 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
const v30 = 13.37 != v25;
// v30 = .boolean
for (const v31 in v29) {
}
}
%NeverOptimizeFunction(main);
main();
