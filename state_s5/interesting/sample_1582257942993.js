function main() {
const v1 = {length:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
let v7 = undefined;
const v8 = new Int8Array(v1);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v15 = {length:"N0Xx92zvHQ"};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v16 = {constructor:13.37,length:13.37,__proto__:v15,toString:Number,a:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
const v23 = "object".constructor;
// v23 = .function()
const v24 = {apply:v23,deleteProperty:gc,preventExtensions:Object,ownKeys:v23,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "apply", "getOwnPropertyDescriptor", "isExtensible", "deleteProperty", "set", "defineProperty", "construct", "ownKeys", "preventExtensions", "setPrototypeOf"])
const v26 = new Proxy(v16,v24);
// v26 = .unknown
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
}
%NeverOptimizeFunction(main);
main();
