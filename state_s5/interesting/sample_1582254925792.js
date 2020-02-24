function main() {
function v0(v1,v2) {
    let v6 = 0;
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v13 = {constructor:"symbol",length:9007199254740993};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
    const v16 = [13.37,13.37,13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v17 = [];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v18 = v16[Function];
    // v18 = .unknown
    try {
        const v19 = v18(v17,v13);
        // v19 = .unknown
    } catch(v20) {
    }
    const v21 = v0 + 1;
    // v21 = .primitive
    v6 = v21;
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
