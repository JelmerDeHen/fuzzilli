function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = [-128,v2,v2];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
            // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys", "defineProperty", "call"], withMethods: ["preventExtensions", "construct", "isExtensible", "setPrototypeOf", "has", "getOwnPropertyDescriptor", "set", "getPrototypeOf", "deleteProperty"])
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
