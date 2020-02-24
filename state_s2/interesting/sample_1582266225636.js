function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = [-128,v2,v2];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            const v15 = Number.isFinite(v13);
            // v15 = .boolean
            Number[v15] = 8;
            function v16(v17,v18,v19) {
            }
            const v20 = {preventExtensions:Object,defineProperty:v8,isExtensible:v16,getOwnPropertyDescriptor:eval,set:v16,setPrototypeOf:eval,getPrototypeOf:v16,construct:v6,ownKeys:v7,call:v8,has:v16,deleteProperty:v16};
            // v20 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__", "ownKeys", "call"], withMethods: ["preventExtensions", "has", "getOwnPropertyDescriptor", "getPrototypeOf", "isExtensible", "set", "setPrototypeOf", "construct", "deleteProperty"])
            const v21 = v13 + 1;
            // v21 = .primitive
            v13 = v21;
        } while (v13 < 8);
    }
}
let v22 = v3;
const v23 = v6(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
