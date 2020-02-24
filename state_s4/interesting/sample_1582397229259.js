function main() {
const v2 = {c:"wPKTxOPfAW",valueOf:1337};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf"])
let v3 = v2;
for (const v5 in "boolean") {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        v8 = v9;
        const v12 = [1337,1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
            // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v27 = [3664180981,3664180981,"string","string"];
            // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v28 = {valueOf:v27,length:v26,toString:parseFloat,constructor:"string",c:parseFloat};
            // v28 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "constructor"], withMethods: ["c", "toString"])
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
        // v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "construct", "ownKeys", "getPrototypeOf", "get", "deleteProperty", "has", "set", "call", "setPrototypeOf", "isExtensible"])
        const v45 = new Proxy(v12,v43);
        // v45 = .unknown
        v45[1] = "MIN_VALUE";
    } while (v8 < 8);
}
}
%NeverOptimizeFunction(main);
main();
