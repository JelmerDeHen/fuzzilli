function main() {
for (const v2 in "object") {
    for (const v4 in "boolean") {
        let v7 = 0;
        const v10 = [];
        // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v11 = {length:"constructor",e:1337,c:v10,a:1337,toString:"symbol"};
        // v11 = .object(ofGroup: Object, withProperties: ["length", "a", "c", "e", "toString", "__proto__"])
        function v13(v14,v15,v16,v17) {
            'use strict'
            try {
                const v18 = {};
                // v18 = .object(ofGroup: Object, withProperties: ["__proto__"])
                let v19 = v18;
                const v23 = [13.37,13.37,13.37];
                // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                let v24 = v23;
                const v27 = v24.reduce(eval,"ruHq55V2**");
                // v27 = .unknown
                const v28 = [2153514987,13.37,13.37,13.37,v17];
                // v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                const v29 = [v19,v28,v28];
                // v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            } catch(v30) {
            }
        }
        const v31 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
        // v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "setPrototypeOf", "preventExtensions", "set", "isExtensible", "get", "getPrototypeOf", "deleteProperty", "construct", "call", "has"])
        const v33 = new Proxy(v11,v31);
        // v33 = .unknown
        v33[1] = "MIN_VALUE";
        const v34 = v7 + 1;
        // v34 = .primitive
        v7 = v34;
    }
}
}
%NeverOptimizeFunction(main);
main();
