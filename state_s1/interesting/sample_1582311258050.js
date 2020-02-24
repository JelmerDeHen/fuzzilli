function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v7 = {set:Array,get:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v9 = Object.defineProperty(v1,1073741824,v7);
    // v9 = .undefined
    const v10 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["construct", "preventExtensions", "call", "isExtensible", "toString", "__proto__"], withMethods: ["setPrototypeOf", "has", "deleteProperty", "set", "getOwnPropertyDescriptor"])
    const v12 = new Proxy(v1,v10);
    // v12 = .unknown
    for (const v13 in v12) {
    }
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
