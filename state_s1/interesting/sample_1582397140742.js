function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        const v10 = v9 + 1;
        // v10 = .primitive
        v9 = v10;
        let v13 = -2;
        const v16 = [1337,1337,1337,1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        function v17(v18,v19,v20,v21) {
            'use strict'
            const v26 = [-2331916614,-2331916614,-2331916614];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v27 = [3664180981,3664180981,"string","string"];
            // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v28 = {valueOf:v27,length:v26,toString:parseFloat,constructor:"string",c:parseFloat};
            // v28 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "length"], withMethods: ["toString", "c"])
            function v29(v30,v31) {
                let v33 = this;
                let v34 = v33;
                const v37 = new Proxy(v34,Object);
                // v37 = .unknown
                const v39 = Symbol.species;
                // v39 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                const v40 = this.__proto__;
                // v40 = .unknown
            }
            const v41 = v26.__proto__;
            // v41 = .object()
            const v42 = new v29(v28,v41);
            // v42 = .object()
        }
        const v43 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
        // v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "get", "getPrototypeOf", "isExtensible", "has", "call", "ownKeys", "construct", "deleteProperty", "setPrototypeOf", "set"])
        const v45 = new Proxy(v16,v43);
        // v45 = .unknown
        v45[1] = "MIN_VALUE";
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
