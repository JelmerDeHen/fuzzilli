function main() {
const v3 = new Int16Array(19873);
// v3 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v4 = {a:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v7 = [1337,v4,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
