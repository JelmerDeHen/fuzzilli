function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v7 = (0)[v1];
    // v7 = .unknown
    const v9 = [-171524.5743045921,v2,-0.0];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    v9[255] = 0;
    let v11 = 255;
    while (v11 < 65535) {
        const v12 = v9.push(v5);
        // v12 = .integer
        const v13 = v11 + 1;
        // v13 = .primitive
        v11 = v13;
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = v0();
// v16 = .unknown
let v17 = v15;
const v18 = v0(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
