function main() {
function v2(v3,v4) {
    let v8 = 0;
    do {
        for (const v10 of "pvU0UUjoya") {
        }
        const v11 = v8 + 1;
        // v11 = .primitive
        v8 = v11;
    } while (v8 < 8);
    let v15 = 0;
    while (v15 < 5) {
        const v19 = v15 + 1;
        // v19 = .primitive
        v15 = v19;
    }
    const v20 = "object".length;
    // v20 = .integer
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v24 = v23;
const v25 = v2(v24);
// v25 = .unknown
const v26 = v2(1024,4.0);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
