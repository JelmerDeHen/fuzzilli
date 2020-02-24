function main() {
const v2 = {constructor:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                v13 = v14;
            } while (v13 < 7);
            const v16 = [1337];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v17 = v16;
            let v19 = undefined;
            for (let v23 = -3664528053; v23 < 0; v23 = v23 + 1327239868) {
                const v26 = new Float64Array(50505);
                // v26 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
            }
            const v27 = v10 + 1;
            // v27 = .primitive
            v10 = v27;
        } while (v10 < 8);
    }
}
const v28 = v3("undefined");
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
