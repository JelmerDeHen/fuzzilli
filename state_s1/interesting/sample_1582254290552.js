function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = {has:Number,isExtensible:Number,apply:Number,getPrototypeOf:Number,ownKeys:Number,preventExtensions:Number};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "apply", "has", "getPrototypeOf", "isExtensible", "ownKeys"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v15 = [v14,v14];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v15.__proto__ = v4;
function v17(v18,...v19) {
    let v20 = v17;
}
const v21 = v12.length;
// v21 = .unknown
const v23 = [13.37,13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v49 = {__proto__:v23,length:Number,constructor:v23,d:13.37};
// v49 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor"], withMethods: ["length"])
let v65 = 0;
const v66 = v65 + 1;
// v66 = .primitive
v65 = v66;
}
%NeverOptimizeFunction(main);
main();
