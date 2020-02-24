function main() {
let v4 = undefined;
const v6 = {__proto__:536870912};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = 0;
let v15 = RegExp;
let v16 = v15;
const v19 = new Proxy(v16,Object);
// v19 = .unknown
const v20 = Object.freeze(v19);
// v20 = .undefined
try {
    const v23 = [13.37,v4];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v24 = v23[1024];
    // v24 = .unknown
    const v25 = {has:Array,construct:v24,toString:v24,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v24,isExtensible:v24,call:v24,set:13.37,getOwnPropertyDescriptor:Array};
    // v25 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "isExtensible", "toString", "call", "construct", "preventExtensions"], withMethods: ["deleteProperty", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
    const v27 = new Proxy(v20,v25);
    // v27 = .unknown
    for (const v28 in v27) {
    }
} catch(v29) {
}
}
%NeverOptimizeFunction(main);
main();
