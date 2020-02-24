function main() {
function v1(v2,v3) {
    const v8 = [13.37,1337,-0.0];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    v8[255] = 0;
    let v10 = -65537;
    while (v10 < 1337) {
        const v11 = v8.push(-0.0);
        // v11 = .integer
        const v12 = v10 + 1;
        // v12 = .primitive
        v10 = v12;
    }
}
const v13 = v1(Proxy);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
