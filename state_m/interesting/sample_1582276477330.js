function main() {
try {
    const v2 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v3(v4,v5) {
        function v6(v7,v8) {
            let v10 = 0;
            const v11 = {apply:v7,constructor:v4,get:v8,defineProperty:v6,deleteProperty:v8,setPrototypeOf:v5,call:v3,has:v4,isExtensible:Object,getPrototypeOf:v8,construct:v4,set:v8};
            // v11 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "has", "getPrototypeOf", "construct", "set", "__proto__", "apply", "deleteProperty", "constructor", "get"], withMethods: ["isExtensible", "defineProperty", "call"])
            const v13 = new Proxy(v2,v11);
            // v13 = .unknown
            v13.defineProperty = v10;
        }
        const v15 = [1337];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v16 = v15;
        const v17 = v6(v16);
        // v17 = .unknown
    }
    const v19 = [1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v20 = v19;
    const v21 = v3(v20);
    // v21 = .unknown
} catch(v22) {
}
}
%NeverOptimizeFunction(main);
main();
