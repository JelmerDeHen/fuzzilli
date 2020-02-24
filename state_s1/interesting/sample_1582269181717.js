function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
function v4(v5,v6) {
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
            const v32 = v17 + 1;
            // v32 = .primitive
            v17 = v32;
        } while (v17 < 8);
    }
    const v33 = v13 + 1;
    // v33 = .primitive
    v13 = v33;
    const v36 = "object".constructor;
    // v36 = .function()
    v1[1024] = v36;
    v2.length = 0;
    const v44 = 1337 == 13.37;
    // v44 = .boolean
    const v46 = Object();
    // v46 = .object()
    let v49 = 0;
    const v50 = v49 + 1;
    // v50 = .primitive
    v49 = v50;
    let v53 = 0;
    const v54 = v53 + 1;
    // v54 = .primitive
    v53 = v54;
    let v57 = 0;
    const v58 = v57 + 1;
    // v58 = .primitive
    v57 = v58;
}
const v61 = [1337];
// v61 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v62 = v61;
const v63 = v4(v62);
// v63 = .unknown
const v64 = v4(1024,4.0);
// v64 = .unknown
}
%NeverOptimizeFunction(main);
main();
