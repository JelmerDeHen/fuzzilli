function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "boolean") {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        v8 = v9;
        const v12 = [1337,1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        function v13(v14,v15,v16,v17) {
            'use strict'
            const v22 = [-2331916614,-2331916614,-2331916614];
            // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v23 = [3664180981,3664180981,"string","string"];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v24 = {valueOf:v23,length:v22,toString:parseFloat,constructor:"string",c:parseFloat};
            // v24 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "length"], withMethods: ["c", "toString"])
            const v25 = v12.pop();
            // v25 = .unknown
            function v26(v27,v28) {
                let v30 = this;
                let v31 = v30;
                const v34 = new Proxy(v31,Object);
                // v34 = .unknown
                return v34;
            }
            const v35 = v22.__proto__;
            // v35 = .object()
            const v36 = new v26(v24,v35);
            // v36 = .object()
            return v36;
        }
        const v37 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
        // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "has", "deleteProperty", "construct", "setPrototypeOf", "getPrototypeOf", "preventExtensions", "isExtensible", "ownKeys", "call", "get"])
        const v39 = new Proxy(v12,v37);
        // v39 = .unknown
        v39[1] = "MIN_VALUE";
    } while (v8 < 8);
}
}
%NeverOptimizeFunction(main);
main();
