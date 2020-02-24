function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = ["MAX_VALUE",v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:"MAX_VALUE",length:v4,c:v5};
// v6 = .object(ofGroup: Object, withProperties: ["length", "b", "c", "__proto__"])
let v7 = v6;
function v8(v9,v10) {
    let v17 = 0;
    for (const v18 in "boolean") {
        const v27 = 1337 != v7;
        // v27 = .boolean
        let v30 = 0;
        while (v30 < 10) {
            const v31 = "MAX_VALUE".codePointAt(10);
            // v31 = .integer
            const v32 = v30 + 1;
            // v32 = .primitive
            v30 = v32;
        }
        let v33 = 0;
        const v34 = v33 + 1;
        // v34 = .primitive
        v33 = v34;
        for (let v39 = 0; v39 < 100; v39++) {
        }
    }
    const v40 = v10 + 1;
    // v40 = .primitive
    v17 = v40;
    const v49 = 1337 == 13.37;
    // v49 = .boolean
    const v51 = Object();
    // v51 = .object()
    let v54 = 0;
    const v55 = v54 + 1;
    // v55 = .primitive
    v54 = v55;
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v58 = v57;
const v59 = v8(v58);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
