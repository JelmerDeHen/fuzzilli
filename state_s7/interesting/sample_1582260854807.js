function main() {
function v3(v4,v5) {
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v8 = v7[1024];
    // v8 = .unknown
    const v9 = v8 - 1;
    // v9 = .primitive
    const v10 = v9 + 1;
    // v10 = .primitive
    let v13 = 0;
    do {
        let v16 = 0;
        do {
            const v17 = v16 + 1;
            // v17 = .primitive
            const v18 = {constructor:3156875969,...v17,...8};
            // v18 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v16 = v17;
        } while (v16 < 7);
        const v19 = v13 + 1;
        // v19 = .primitive
        v13 = v19;
    } while (v13 < 8);
    return v10;
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v3(v22);
// v23 = .unknown
const v24 = v3(1024,4.0);
// v24 = .unknown
const v25 = v3(v24,v22);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
