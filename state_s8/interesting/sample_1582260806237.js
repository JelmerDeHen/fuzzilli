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
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v21 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v20,b:"__proto__"};
// v21 = .object(ofGroup: Object, withProperties: ["b", "length", "__proto__", "toString", "a"], withMethods: ["valueOf", "__proto__"])
const v24 = [];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v25 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v24};
// v25 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v29 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"constructor"};
// v29 = .object(ofGroup: Object, withProperties: ["constructor", "a", "length", "__proto__"], withMethods: ["toString"])
const v30 = 13.37 != v25;
// v30 = .boolean
for (const v31 in v29) {
}
}
%NeverOptimizeFunction(main);
main();
