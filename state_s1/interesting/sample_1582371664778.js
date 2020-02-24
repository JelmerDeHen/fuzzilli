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
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v24 = v23[1024];
    // v24 = .unknown
    const v25 = {has:Array,construct:v24,toString:v24,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v24,isExtensible:v24,call:v24,set:13.37,getOwnPropertyDescriptor:Array};
    // v25 = .object(ofGroup: Object, withProperties: ["call", "set", "toString", "__proto__", "isExtensible", "preventExtensions", "construct"], withMethods: ["getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf", "has"])
    const v27 = new Proxy(v20,v25);
    // v27 = .unknown
    for (const v28 in v27) {
    }
} catch(v29) {
}
}
%NeverOptimizeFunction(main);
main();
