function main() {
try {
    const v2 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v3(v4,v5) {
        let v9 = 0;
        function v10(v11,v12) {
            let v16 = 0;
            let v19 = 0;
            const v20 = {apply:v11,getOwnPropertyDescriptor:v4,get:v12,defineProperty:v10,deleteProperty:v12,setPrototypeOf:v5,call:v3,has:v4,isExtensible:Object,getPrototypeOf:v12,construct:v4,set:v12};
            // v20 = .object(ofGroup: Object, withProperties: ["set", "deleteProperty", "getOwnPropertyDescriptor", "setPrototypeOf", "construct", "get", "has", "apply", "__proto__", "getPrototypeOf"], withMethods: ["defineProperty", "isExtensible", "call"])
            const v22 = new Proxy(v2,v20);
            // v22 = .unknown
            v22.defineProperty = v16;
        }
        const v24 = [1337];
        // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v25 = v24;
        const v26 = v10(v25);
        // v26 = .unknown
        let v29 = 0;
    }
    const v31 = [1337];
    // v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v32 = v31;
    const v33 = v3(v32);
    // v33 = .unknown
} catch(v35) {
}
}
%NeverOptimizeFunction(main);
main();
