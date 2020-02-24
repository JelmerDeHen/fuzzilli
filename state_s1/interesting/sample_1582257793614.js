function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v6 = v2 == v4;
        // v6 = .boolean
        let v9 = 0;
        const v10 = v9 + 1;
        // v10 = .primitive
        v9 = v10;
        let v13 = 0;
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
        let v16 = 0;
        do {
            for (let v20 = 0; v20 < 4; v20++) {
            }
            const v21 = v16 + 1;
            // v21 = .primitive
            v16 = v21;
        } while (v16 < 8);
    }
}
const v23 = [3156875969];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
