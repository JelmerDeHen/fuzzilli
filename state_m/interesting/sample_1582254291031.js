function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {has:Number,isExtensible:Number,apply:Number,getPrototypeOf:Number,ownKeys:Number,preventExtensions:Number};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "getPrototypeOf", "preventExtensions", "has", "ownKeys", "isExtensible"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v15 = [v14,v14];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v15.__proto__ = v4;
function v17(v18,...v19) {
    let v20 = v17;
}
const v21 = v12.length;
// v21 = .unknown
const v23 = [13.37,13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v49 = {__proto__:v23,length:Number,constructor:v23,d:13.37};
// v49 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d"], withMethods: ["length"])
let v65 = 0;
const v66 = v65 + 1;
// v66 = .primitive
v65 = v66;
}
%NeverOptimizeFunction(main);
main();
