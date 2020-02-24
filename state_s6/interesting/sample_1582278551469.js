function main() {
const v1 = {get:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v3 = Object.prototype;
// v3 = .object()
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v7(v8,v9) {
    const v10 = v8 in v7;
    // v10 = .boolean
    for (const v12 in "boolean") {
        const v14 = [13.37,13.37,13.37,13.37,13.37];
        // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v15 = v14.__proto__;
        // v15 = .object()
        const v17 = [13.37,13.37,13.37,13.37,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
