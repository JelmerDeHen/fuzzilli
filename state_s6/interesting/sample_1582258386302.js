function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {__proto__:JSON,c:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v5(v6,v7) {
    let v14 = 0;
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            for (const v20 of "pvU0UUjoya") {
            }
            const v21 = v18 + 1;
            // v21 = .primitive
            v18 = v21;
        } while (v18 < 8);
    }
    let v24 = 0;
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    const v31 = Symbol.match;
    // v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v3[v31] = v27;
    const v32 = 1024 % 13.37;
    // v32 = .number
    let v35 = 0;
    const v36 = v35 + 1;
    // v36 = .primitive
    v35 = v36;
    const v37 = v32 + 1;
    // v37 = .primitive
    v24 = v37;
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v41 = v40;
const v42 = v5(v41);
// v42 = .unknown
const v43 = v5(1024,4.0);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
