function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = v2;
let v5 = undefined;
let v10 = 0;
const v12 = v10 + 1;
// v12 = .primitive
v10 = v12;
let v16 = undefined;
try {
    const v19 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v22 = [13.37,13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v23 = v22[1024];
    // v23 = .unknown
    const v24 = {has:Int16Array,construct:v23,defineProperty:v23,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v23,isExtensible:v23,call:v23,set:1,getOwnPropertyDescriptor:Int16Array};
    // v24 = .object(ofGroup: Object, withProperties: ["isExtensible", "getOwnPropertyDescriptor", "has", "deleteProperty", "setPrototypeOf", "set", "__proto__", "call", "preventExtensions", "construct", "defineProperty"])
    const v26 = new Proxy(v22,v24);
    // v26 = .unknown
    for (const v28 in "object") {
        v19.__proto__ = v26;
    }
} catch(v29) {
}
let v32 = 0;
}
%NeverOptimizeFunction(main);
main();
