function main() {
function v2(v3,v4) {
    function v6(v7,v8) {
        const v10 = gc();
        // v10 = .undefined
    }
    const v12 = eval("undefined");
    // v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v15 = [1337,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v40 = v39;
const v41 = v2(1024,4.0);
// v41 = .unknown
for (const v43 in "object") {
    let v45 = 1903240934;
    const v47 = new Int8Array(v45);
    // v47 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
}
const v48 = v2(v41,v40);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
