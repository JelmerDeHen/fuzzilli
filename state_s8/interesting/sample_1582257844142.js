function main() {
let v1 = parseFloat;
let v5 = 0;
do {
    const v6 = v5 + 1;
    // v6 = .primitive
    function v7(v8,v9) {
        const v14 = [3156875969,3156875969,1337,DataView];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v15 = {e:DataView,constructor:1337,valueOf:1337,d:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "e", "valueOf"])
        for (let v19 = 0; v19 < 10; v19++) {
            const v20 = 13.37 === v15;
            // v20 = .boolean
            if (v9) {
                function v21(v22,...v23) {
                    const v24 = {getOwnPropertyDescriptor:v1,ownKeys:parseFloat,call:parseFloat,isExtensible:v1};
                    // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "ownKeys", "call", "isExtensible"])
                    const v26 = Proxy(v15,v24);
                    // v26 = .unknown
                    return v20;
                }
            } else {
            }
        }
    }
    const v28 = [1337];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v29 = v28;
    const v30 = v7(v29);
    // v30 = .unknown
    v5 = v6;
} while (v5 < 7);
}
%NeverOptimizeFunction(main);
main();
