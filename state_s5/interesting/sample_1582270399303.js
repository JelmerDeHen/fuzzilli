function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v21 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "isExtensible", "deleteProperty", "preventExtensions", "apply", "ownKeys", "has", "construct", "defineProperty", "setPrototypeOf", "set"])
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
