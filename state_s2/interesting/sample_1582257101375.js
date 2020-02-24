function main() {
let v2 = undefined;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v12 = 0;
            const v13 = {};
            // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v13.a = "boolean";
            do {
                const v14 = v12 + 1;
                // v14 = .primitive
            } while (v12 < undefined);
            const v15 = v10 + 1;
            // v15 = .primitive
            v10 = v15;
        } while (v10 < 8);
    }
}
const v16 = [undefined];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v17 = v16;
const v18 = v3(v17);
// v18 = .unknown
const v19 = v3(v2,undefined);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
