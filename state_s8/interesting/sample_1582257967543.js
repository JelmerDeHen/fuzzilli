function main() {
const v2 = new Int16Array(19873);
// v2 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
function v3(v4,v5) {
    const v7 = -4294967297 << -4294967297;
    // v7 = .integer
    const v8 = v7 << v4;
    // v8 = .integer
    const v9 = {e:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
    return v9;
}
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = v3();
    // v14 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
