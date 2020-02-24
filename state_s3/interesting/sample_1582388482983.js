function main() {
for (const v1 in "replace") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v18 = [1.7976931348623157e+308];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v20 = [255,255,13.37];
            // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v21 = {a:255,toString:isFinite,c:v18,toString:v20,valueOf:"object",constructor:"gM8oAednYn"};
            // v21 = .object(ofGroup: Object, withProperties: ["a", "c", "toString", "valueOf", "constructor", "__proto__"], withMethods: ["toString"])
            let v23 = RegExp;
            let v24 = v23;
            const v27 = new Promise(v24,Object);
            // v27 = .object()
            const v28 = {toString:v18,valueOf:v21,d:255,constructor:536870912};
            // v28 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "d", "constructor"])
            const v29 = RegExp.apply(v28,v27);
            // v29 = .unknown
        }
        return v4;
    }
    const v30 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getPrototypeOf", "set", "preventExtensions", "ownKeys", "has", "construct", "deleteProperty", "isExtensible", "call", "get"])
    const v32 = new Proxy(v4,v30);
    // v32 = .unknown
    v32[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
