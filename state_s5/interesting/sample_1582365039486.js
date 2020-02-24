function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v12 = [-2331916614,-2331916614,-2331916614];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v13 = [3664180981,3664180981,"string","string"];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v14 = {valueOf:v13,length:v12,toString:parseFloat,constructor:"string",c:parseFloat};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "valueOf"], withMethods: ["toString", "c"])
    const v15 = v12.__proto__;
    // v15 = .object()
    let v17 = undefined;
    const v22 = [1337,1337,1337,1337,1337];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v25 = [13.37,13.37,13.37,13.37];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v26(v27,v28) {
        function v31(v32,v33) {
            let v36 = -128;
            while (v36 < 5) {
                arguments.length = v33;
                const v37 = v36 + 1;
                // v37 = .primitive
                v36 = v37;
            }
        }
        const v38 = gc(...arguments);
        // v38 = .undefined
        const v39 = v31(Array);
        // v39 = .unknown
        const v41 = Symbol.species;
        // v41 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        v22[v41] = v38;
        let v43 = 0;
        while (v43 < 1337) {
            const v44 = v43 + 1;
            // v44 = .primitive
            v43 = v44;
        }
    }
    const v45 = v25.sort(v26);
    // v45 = .undefined
    return v7;
}
const v46 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v46 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "get", "setPrototypeOf", "preventExtensions", "isExtensible", "call", "deleteProperty", "ownKeys", "set", "construct", "getPrototypeOf"])
const v48 = new Proxy(v2,v46);
// v48 = .unknown
v48[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
