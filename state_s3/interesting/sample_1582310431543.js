function main() {
try {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        const v12 = [13.37,13.37,13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v13(v14,v15) {
            const v18 = gc(...arguments);
            // v18 = .undefined
            let v20 = 0;
            while (v20 < 1337) {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            }
        }
        const v22 = v12.sort(v13);
        // v22 = .undefined
    }
    const v23 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "get", "deleteProperty", "preventExtensions", "getPrototypeOf", "call", "set", "ownKeys", "setPrototypeOf", "has", "construct"])
    const v25 = new Proxy(v4,v23);
    // v25 = .unknown
    v25[1] = "MIN_VALUE";
    const v26 = eval("hqfZcRryR/");
    // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
} catch(v27) {
}
}
%NeverOptimizeFunction(main);
main();
