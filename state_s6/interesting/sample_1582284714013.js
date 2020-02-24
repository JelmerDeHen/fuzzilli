function main() {
let v3 = 0;
let v6 = 0;
const v7 = v3 + 1;
// v7 = .primitive
v3 = v7;
let v9 = 1337;
const v11 = {c:1337};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v12(v13,v14) {
    function v16(v17,v18) {
    }
    const v21 = [-9007199254740992];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    for (const v22 in "boolean") {
        v21[255] = 0;
        let v25 = 0;
        do {
            let v28 = 0;
            while (v28 < 6) {
                const v29 = v21.some(v16);
                // v29 = .boolean
                const v30 = v28 + 1;
                // v30 = .primitive
                v28 = v30;
            }
            const v31 = v25 + 1;
            // v31 = .primitive
            v25 = v31;
        } while (v25 < 8);
    }
}
const v32 = v12(v9,v11);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
