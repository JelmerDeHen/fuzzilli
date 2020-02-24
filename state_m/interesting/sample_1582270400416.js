function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v21 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "defineProperty", "has", "deleteProperty", "isExtensible", "apply", "getOwnPropertyDescriptor", "setPrototypeOf", "construct", "set"])
    const v23 = new Proxy(v13,v21);
    // v23 = .unknown
    v2[2] = v23;
    const v24 = v2.reduceRight(v20,Infinity);
    // v24 = .unknown
}
for (let v28 = 0; v28 < 100; v28++) {
    const v29 = v3();
    // v29 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
