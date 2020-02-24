function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["undefined",13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:2147483647};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v9 = {__proto__:Uint8Array,a:v8,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "a", "valueOf", "d"])
let v10 = Uint8Array;
let v29 = 0;
do {
    function v30(v31,v32,v33,v34,v35) {
        const v36 = {set:v34,ownKeys:v30,get:v30,defineProperty:v30,isExtensible:v32,apply:v33,construct:v32,getOwnPropertyDescriptor:v31,deleteProperty:v30,setPrototypeOf:v35,preventExtensions:v35};
        // v36 = .object(ofGroup: Object, withProperties: ["set", "apply", "setPrototypeOf", "__proto__", "preventExtensions", "getOwnPropertyDescriptor", "construct", "isExtensible"], withMethods: ["deleteProperty", "get", "ownKeys", "defineProperty"])
        return v30;
    }
    const v37 = v29 + 1;
    // v37 = .primitive
    v29 = v37;
} while (v29 < 7);
let v47 = 0;
do {
    function v48(v49,v50,v51,v52,v53) {
        const v54 = {set:v52,ownKeys:v48,get:v48,defineProperty:v48,isExtensible:v50,apply:v51,construct:v50,getOwnPropertyDescriptor:v49,deleteProperty:v48,setPrototypeOf:v53,preventExtensions:v53};
        // v54 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "getOwnPropertyDescriptor", "isExtensible", "preventExtensions", "apply", "construct", "__proto__", "set"], withMethods: ["defineProperty", "ownKeys", "deleteProperty", "get"])
        return "iterator";
    }
    const v56 = v47 + 1;
    // v56 = .primitive
    v47 = v56;
} while (v47 < 65535);
}
%NeverOptimizeFunction(main);
main();
