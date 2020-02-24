function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v13 = [];
            // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v14 = {length:1337,e:1337,c:v13,a:1337,toString:"symbol"};
            // v14 = .object(ofGroup: Object, withProperties: ["a", "c", "toString", "__proto__", "e", "length"])
            function v16(v17,v18,v19,v20) {
                'use strict'
                try {
                    let v21 = v20;
                    const v23 = -Infinity;
                    // v23 = .float
                    const v24 = [v23];
                    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
                    const v26 = {constructor:-4294967295,length:1337,__proto__:v24};
                    // v26 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
                    const v28 = v24.includes(v26,1);
                    // v28 = .boolean
                    const v29 = v26.toLocaleString(v28,v21);
                    // v29 = .unknown
                } catch(v30) {
                }
                return v14;
            }
            const v31 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "preventExtensions", "ownKeys", "set", "has", "setPrototypeOf", "isExtensible", "call", "deleteProperty", "getPrototypeOf", "get"])
            const v33 = new Proxy(v14,v31);
            // v33 = .unknown
            v33[1] = "MIN_VALUE";
        }
        return v4;
    }
    const v34 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "ownKeys", "isExtensible", "call", "preventExtensions", "setPrototypeOf", "deleteProperty", "has", "construct", "getPrototypeOf", "get"])
    const v36 = new Proxy(v4,v34);
    // v36 = .unknown
    v36[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
