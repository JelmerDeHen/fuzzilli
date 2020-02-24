function main() {
function v1(v2,v3) {
    const v5 = {__proto__:536870912};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v5) {
        __proto__[0] = v1;
    }
}
const v8 = v1(1024,4.0);
// v8 = .unknown
let v11 = 0;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v16(v17,v18,v19,v20) {
    'use strict'
    for (const v22 in "boolean") {
        const v24 = [1337,1337,1337,1337,1337];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v29 = [13.37,v24,13.37,13.37];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v30 = [-65536];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v31 = v29.__proto__;
        // v31 = .object()
        const v32 = v31.push(isNaN,v29,"DN3Tir8e6Y",v30);
        // v32 = .unknown
        const v35 = [1337,1337,1337,1337,1337];
        // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v38 = [13.37,13.37];
        // v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        v38[2428831399] = 13.37;
        const v41 = v38.fill(-3613839107,-3613839107,1337);
        // v41 = .undefined
        const v43 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
        // v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "set", "construct", "getOwnPropertyDescriptor", "get", "has", "preventExtensions", "getPrototypeOf", "defineProperty", "deleteProperty"])
        const v45 = new Proxy(Symbol,v43);
        // v45 = .unknown
        try {
            const v46 = Symbol.keyFor(v45);
            // v46 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        } catch(v47) {
            const v48 = Int16Array[v47];
            // v48 = .unknown
            const v49 = v35.concat(Int16Array,v41,v47,v48);
            // v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        }
    }
}
const v50 = v16(v11,3,8,v15);
// v50 = .unknown
const v51 = v16(1337);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
