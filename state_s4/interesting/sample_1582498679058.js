function main() {
for (const v2 in "boolean") {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        // v6 = .primitive
        v5 = v6;
        let v9 = -128;
        let v12 = 0;
        const v15 = [1337,1337,1337,1337,1337];
        // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        function v16(v17,v18,v19,v20) {
            'use strict'
            const v25 = [-2331916614,-2331916614,-2331916614];
            // v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v26 = [3664180981,3664180981,"string","string"];
            // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
            // v27 = .object(ofGroup: Object, withProperties: ["length", "constructor", "valueOf", "__proto__"], withMethods: ["toString", "c"])
            function v28(v29,v30) {
                const v32 = Object(this,v19);
                // v32 = .object()
                let v35 = 0;
                while (v35 < 3) {
                    const v36 = v35 + 1;
                    // v36 = .primitive
                    v35 = v36;
                }
            }
            const v37 = v25.__proto__;
            // v37 = .object()
            const v38 = new v28(v27,v37);
            // v38 = .object()
        }
        const v39 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
        // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "has", "call", "setPrototypeOf", "get", "ownKeys", "deleteProperty", "isExtensible", "getPrototypeOf", "construct", "set"])
        const v41 = new Proxy(v15,v39);
        // v41 = .unknown
        v41[1] = "MIN_VALUE";
    } while (v5 < 8);
}
}
%NeverOptimizeFunction(main);
main();
