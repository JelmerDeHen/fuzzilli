function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a", "constructor"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v21 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "apply", "isExtensible", "set", "construct", "preventExtensions", "ownKeys", "setPrototypeOf", "defineProperty", "has", "deleteProperty"])
    const v23 = new Proxy(v13,v21);
    // v23 = .unknown
    const v28 = v2.reduceRight(v20,Infinity);
    // v28 = .unknown
    let v31 = 0;
    const v32 = v31 + 1;
    // v32 = .primitive
    v31 = v32;
    let v34 = 0;
    const v35 = v34 + 1;
    // v35 = .primitive
    v34 = v35;
}
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = v3();
    // v40 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
