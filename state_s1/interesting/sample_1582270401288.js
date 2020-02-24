function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v21 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "set", "has", "preventExtensions", "getOwnPropertyDescriptor", "isExtensible", "setPrototypeOf", "construct", "apply", "ownKeys", "defineProperty"])
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
