function main() {
function v1(v2,v3) {
    const v7 = [-2588121454];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v8 = v7;
    const v11 = [13.37,1337,-0.0];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    v11[255] = 0;
    let v13 = -65537;
    while (v13 < 1337) {
        const v14 = v11.push(v8);
        // v14 = .integer
        const v15 = v13 + 1;
        // v15 = .primitive
        v13 = v15;
    }
}
const v16 = v1(Proxy);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
