function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {e:13.37,valueOf:v7,b:Number,a:Number,d:"ZNI0r1/PYt",__proto__:"ZNI0r1/PYt",c:Number};
// v8 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "__proto__", "e"], withMethods: ["a", "b", "c"])
const v9 = {c:v8,length:Number,e:Number,b:Number,toString:v6,a:Number};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__"], withMethods: ["b", "length", "e", "a"])
let v10 = v4;
const v12 = [13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = [-2588121454];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v15 = v14;
const v18 = {get:Uint8ClampedArray};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v20 = Object.seal(v15,65537,v18);
// v20 = .object()
const v21 = Object.freeze(v20);
// v21 = .undefined
let v23 = 512;
const v24 = v23 + 1;
// v24 = .primitive
let v26 = 0;
const v28 = v26 + 1;
// v28 = .primitive
const v29 = typeof 0;
// v29 = .string
const v30 = v14.indexOf();
// v30 = .integer
for (let v34 = 0; v34 < 9; v34++) {
    const v35 = {getOwnPropertyDescriptor:Object,construct:Object,deleteProperty:Object,set:Number,isExtensible:Object,preventExtensions:Number,setPrototypeOf:Number,has:Number,getPrototypeOf:Number,get:Number,call:Object,ownKeys:Object};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "has", "setPrototypeOf", "getPrototypeOf", "isExtensible", "construct", "call", "get", "set", "getOwnPropertyDescriptor", "preventExtensions", "deleteProperty"])
    const v37 = new Proxy(v4,v35);
    // v37 = .unknown
}
let v40 = 0;
while (v40 < 6) {
    const v42 = {get:Object,set:Object};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v44 = Object.defineProperty(v18,1073741824,v42);
    // v44 = .undefined
    const v45 = v40 + 1;
    // v45 = .primitive
    v40 = v45;
}
try {
} catch(v46) {
}
}
%NeverOptimizeFunction(main);
main();
