function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    const v10 = new Int16Array(19873);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    try {
        const v11 = v1[v0];
        // v11 = .unknown
    } catch(v12) {
    }
}
const v13 = v0();
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
