function main() {
const v2 = {c:"wPKTxOPfAW",valueOf:1337};
// v2 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf"])
let v3 = v2;
for (const v5 in "boolean") {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        v8 = v9;
        const v12 = [1337,1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        function v13(v14,v15,v16,v17) {
            'use strict'
            let v20 = 0;
            while (v20 < 3) {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            }
            v3[255] = 1337;
            const v26 = [-2331916614,-2331916614,-2331916614];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v27 = [3664180981,3664180981,"string","string"];
            // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v28 = {valueOf:v27,length:v26,toString:parseFloat,constructor:"string",c:parseFloat};
            // v28 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "constructor", "__proto__"], withMethods: ["toString", "c"])
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
        const v43 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
        // v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "isExtensible", "deleteProperty", "construct", "getPrototypeOf", "preventExtensions", "ownKeys", "setPrototypeOf", "has", "set", "get"])
        const v45 = new Proxy(v12,v43);
        // v45 = .unknown
        v45[1] = "MIN_VALUE";
    } while (v8 < 8);
}
}
%NeverOptimizeFunction(main);
main();
