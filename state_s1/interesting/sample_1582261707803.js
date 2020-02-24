function main() {
const v3 = {get:Uint8ClampedArray};
// v3 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v5 = Object.prototype;
// v5 = .object()
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = 13.37 === v9;
// v10 = .boolean
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v14(v15,v16) {
    const v17 = v15 in v14;
    // v17 = .boolean
    for (const v20 in "boolean") {
        let v21 = 13.37;
        delete "boolean"[v3];
        const v24 = v5.__proto__;
        // v24 = .unknown
        let v27 = 0;
        const v28 = "boolean" - 1;
        // v28 = .primitive
        const v29 = v27 + 1;
        // v29 = .primitive
        v27 = v29;
        const v30 = 0 - v21;
        // v30 = .number
        const v31 = v16[1378211344];
        // v31 = .unknown
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            // v33 = .primitive
            const v35 = v17 == 0;
            // v35 = .boolean
            v32 = v33;
        } while (v32 < 7);
    }
}
const v36 = v13.forEach(v14,"eeeRbEqfAO");
// v36 = .undefined
}
%NeverOptimizeFunction(main);
main();
