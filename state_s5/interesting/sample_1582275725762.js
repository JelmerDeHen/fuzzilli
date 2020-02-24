function main() {
const v3 = new Int16Array(19873);
// v3 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v4 = {a:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v7 = [1337,v4,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v8(v9,v10) {
    let v13 = 3200567472;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            function v18(v19,v20) {
                return v13;
            }
            const v21 = v17 + 1;
            // v21 = .primitive
            v17 = v21;
            v3[512] = v13;
        } while (v17 < 8);
    }
}
const v22 = v7.forEach(v8,"eeeRbEqfAO");
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
