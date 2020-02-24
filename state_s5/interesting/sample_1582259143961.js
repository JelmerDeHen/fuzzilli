function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    const v10 = new Int16Array(19873);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
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
