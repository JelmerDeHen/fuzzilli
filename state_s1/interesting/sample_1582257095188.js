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
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v17 = v16;
const v18 = v3(v17);
// v18 = .unknown
const v19 = v3(v2,undefined);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
