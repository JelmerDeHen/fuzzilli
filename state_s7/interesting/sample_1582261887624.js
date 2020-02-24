function main() {
const v1 = {length:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        let v12 = 0;
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
        const v14 = v9 + 1;
        // v14 = .primitive
        v9 = v14;
        const v16 = [1337];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v17 = v16;
        let v19 = undefined;
        const v23 = Math.atan2(0);
        // v23 = .number
        for (const v24 in "boolean") {
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
        }
        for (let v32 = 0; v32 < 100; v32++) {
        }
    }
}
let v33 = v1;
const v34 = v2(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
