function main() {
function v1(v2,v3) {
    const v4 = v2 in v1;
    // v4 = .boolean
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            for (const v14 of "pvU0UUjoya") {
            }
            const v15 = v9 + 1;
            // v15 = .primitive
            v9 = v15;
        } while (v9 < 8);
    }
    const v19 = [13.37,13.37,13.37,13.37,13.37];
    // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v20 = v19;
    let v21 = v4;
    const v22 = v21.__proto__;
    // v22 = .unknown
    const v29 = 1337 == 13.37;
    // v29 = .boolean
    const v31 = Object();
    // v31 = .object()
    let v39 = 0;
    const v40 = v39 + 1;
    // v40 = .primitive
    v39 = v40;
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v44 = v43;
const v45 = v1(v44);
// v45 = .unknown
const v46 = v1(1024,4.0);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
