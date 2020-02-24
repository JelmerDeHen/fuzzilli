function main() {
function v2(v3,v4) {
    function v6(v7,v8) {
        const v10 = gc();
        // v10 = .undefined
    }
    const v12 = eval("undefined");
    // v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v15 = [1337,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v16 = {d:gc,valueOf:v15};
    // v16 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    let v23 = 0;
    const v27 = v23 + 1;
    // v27 = .primitive
    v23 = v27;
    let v37 = 0;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v40 = v39;
const v41 = v2(1024,4.0);
// v41 = .unknown
for (const v43 in "object") {
    let v45 = 1903240934;
    const v47 = new Int8Array(v45);
    // v47 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
}
const v48 = v2(v41,v40);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
