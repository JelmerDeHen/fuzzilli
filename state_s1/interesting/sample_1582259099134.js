function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    const v10 = new Int16Array(19873);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
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
