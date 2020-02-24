function main() {
function v2(v3,v4) {
    function v6(v7,v8) {
        const v10 = gc();
        // v10 = .undefined
    }
    const v12 = eval("undefined");
    // v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    const v15 = [1337,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v40 = v39;
const v41 = v2(1024,4.0);
// v41 = .unknown
for (const v43 in "object") {
    let v45 = 1903240934;
    const v47 = new Int8Array(v45);
    // v47 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
}
const v48 = v2(v41,v40);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
