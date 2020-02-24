function main() {
const v1 = {get:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v3 = Object.prototype;
// v3 = .object()
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v7(v8,v9) {
    const v10 = v8 in v7;
    // v10 = .boolean
    for (const v12 in "boolean") {
        const v14 = [13.37,13.37,13.37,13.37,13.37];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v15 = v14.__proto__;
        // v15 = .object()
        const v17 = [13.37,13.37,13.37,13.37,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v18(v19,v20,v21,v22,v23) {
        }
        delete "boolean"[v1];
        const v26 = v3.__proto__;
        // v26 = .unknown
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
        } while (v27 < 7);
    }
}
const v29 = v6.forEach(v7,"eeeRbEqfAO");
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
