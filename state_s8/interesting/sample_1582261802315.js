function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "boolean") {
    let v8 = 0;
    const v11 = [1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v12 = {b:2147483647};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    function v13(v14,v15) {
        const v17 = [1337,1337];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v20 = new Float32Array(36724);
        // v20 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
        function v22(v23,v24) {
            for (const v26 of "e") {
                const v27 = v17[65537];
                // v27 = .unknown
                const v30 = new Int32Array(35738);
                // v30 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
                const v31 = {c:v27,a:Int32Array,c:v24,d:"boolean",valueOf:v26,length:v30,toString:v20,constructor:v24};
                // v31 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "toString", "valueOf", "d", "length", "c"])
            }
        }
        const v33 = [1337];
        // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v34 = v33;
        const v35 = v22(v34);
        // v35 = .unknown
    }
    const v36 = v11.findIndex(v13,v12);
    // v36 = .integer
    const v37 = v8 + 1;
    // v37 = .primitive
    v8 = v37;
}
const v45 = eval();
// v45 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v46 = 0;
const v47 = v46 + 1;
// v47 = .primitive
v46 = v47;
}
%NeverOptimizeFunction(main);
main();
