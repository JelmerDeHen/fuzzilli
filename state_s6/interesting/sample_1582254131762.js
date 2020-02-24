function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v2 = v1 + 1;
// v2 = .primitive
let v5 = 0;
do {
    function v6(v7,v8,v9,v10,v11) {
        const v12 = {set:v10,ownKeys:v6,get:v6,defineProperty:v6,isExtensible:v8,apply:v9,construct:v8,getOwnPropertyDescriptor:v7,deleteProperty:v6,setPrototypeOf:v11,preventExtensions:v11};
        // v12 = .object(ofGroup: Object, withProperties: ["apply", "getOwnPropertyDescriptor", "construct", "preventExtensions", "__proto__", "isExtensible", "setPrototypeOf", "set"], withMethods: ["ownKeys", "defineProperty", "get", "deleteProperty"])
    }
} while (v5 > 7);
const v14 = gc();
// v14 = .undefined
const v15 = gc();
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
