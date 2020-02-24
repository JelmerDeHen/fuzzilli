function main() {
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = v2[v4];
// v5 = .unknown
for (let v10 = 0; v10 < 7; v10++) {
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    function v14(v15,v16,v17,v18) {
    }
}
for (const v22 in "object") {
}
let v25 = 0;
do {
    let v28 = 0;
    while (v28 < 4) {
        const v29 = v28 + 1;
        // v29 = .primitive
        v28 = v29;
    }
    const v30 = v25 + 1;
    // v30 = .primitive
    v25 = v30;
} while (v25 < 4);
const v32 = Object(14829,gc,"symbol","symbol",v25);
// v32 = .object()
v32[563126933] = 1337;
}
%NeverOptimizeFunction(main);
main();
