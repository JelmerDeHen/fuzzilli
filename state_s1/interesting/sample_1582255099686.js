function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                "object"[1] = 1337;
                v12 = v13;
            } while (v12 < 7);
            const v19 = v9 + 1;
            // v19 = .primitive
            v9 = v19;
        } while (v9 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v22 = v21;
const v23 = v2(v22);
// v23 = .unknown
const v25 = v2(Uint8Array,1);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
