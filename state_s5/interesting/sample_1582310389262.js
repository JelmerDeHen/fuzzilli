function main() {
try {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        const v12 = [13.37,13.37,13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "get", "preventExtensions", "has", "isExtensible", "call", "setPrototypeOf", "getPrototypeOf", "construct", "set", "ownKeys"])
    const v25 = new Proxy(v4,v23);
    // v25 = .unknown
    v25[1] = "MIN_VALUE";
    const v26 = eval("hqfZcRryR/");
    // v26 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
} catch(v27) {
}
}
%NeverOptimizeFunction(main);
main();
