function main() {
function v3(v4,v5) {
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v13 = new Int16Array(19873);
    // v13 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    function v14(v15,v16,v17,v18,...v19) {
        return v19;
    }
    return v14;
}
const v20 = v3();
// v20 = .unknown
const v21 = JSON.stringify(Math,v20,"PI");
// v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
