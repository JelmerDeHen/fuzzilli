function main() {
function v0(v1,v2) {
    const v5 = {...v2};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v6 = 0;
    do {
        const v7 = v6 + 1;
        // v7 = .primitive
        for (let v11 = 0; v11 < 3; v11++) {
            for (const v13 in "object") {
            }
        }
        v6 = v7;
    } while (v6 < 3);
}
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
const v23 = v0();
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();