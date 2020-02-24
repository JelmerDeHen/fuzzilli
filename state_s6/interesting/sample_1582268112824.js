function main() {
function v2(v3,v4) {
    function v6(v7,v8) {
        const v10 = gc();
        // v10 = .undefined
    }
    const v12 = eval("undefined");
    // v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v15 = [1337,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v16 = {d:gc,valueOf:v15};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
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
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v40 = v39;
const v41 = v2(1024,4.0);
// v41 = .unknown
for (const v43 in "object") {
    let v45 = 1903240934;
    const v47 = new Int8Array(v45);
    // v47 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
}
const v48 = v2(v41,v40);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
