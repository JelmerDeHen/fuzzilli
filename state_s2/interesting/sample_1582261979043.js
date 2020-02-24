function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = v4.keys();
// v5 = .object()
const v6 = new Float64Array(v5);
// v6 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v10 = v9;
let v12 = undefined;
const v19 = {length:"N0Xx92zvHQ"};
// v19 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v20 = {constructor:13.37,length:13.37,__proto__:v19,toString:Number,a:"N0Xx92zvHQ"};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
const v27 = "object".constructor;
// v27 = .function()
const v31 = {apply:v27,deleteProperty:gc,preventExtensions:Object,ownKeys:v27,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "set", "setPrototypeOf", "isExtensible", "getOwnPropertyDescriptor", "deleteProperty", "has", "construct", "ownKeys", "defineProperty", "preventExtensions"])
const v33 = new Proxy(v20,v31);
// v33 = .unknown
let v41 = 0;
let v44 = 0;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
let v48 = 0;
do {
    const v52 = v41 + 1;
    // v52 = .primitive
    v41 = v52;
    const v53 = v6.lastIndexOf(v52,1);
    // v53 = .integer
} while (v41 < 3);
let v57 = 0;
let v59 = 0;
const v60 = v59 + 1;
// v60 = .primitive
v59 = v60;
}
%NeverOptimizeFunction(main);
main();
