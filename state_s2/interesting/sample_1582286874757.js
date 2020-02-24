function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7) {
    function v11(v12,v13) {
    }
    function v14(v15,v16,v17) {
    }
    const v20 = new Uint16Array(1000);
    // v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
    try {
        const v23 = {get:v11,set:v14};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v25 = Object.defineProperty(v20,4294967297,v23);
        // v25 = .undefined
    } catch(v26) {
        const v27 = {__proto__:v26,a:v11,...v20,...4294967296,...v26,...v20};
        // v27 = .object(ofGroup: Object, withProperties: ["buffer", "length", "byteOffset", "constructor", "byteLength", "__proto__"], withMethods: ["reverse", "find", "subarray", "set", "values", "fill", "some", "indexOf", "includes", "copyWithin", "reduceRight", "entries", "a", "lastIndexOf", "forEach", "slice", "keys", "reduce", "findIndex", "sort", "join", "filter", "map", "every"])
    }
    let v28 = 0;
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
}
const v30 = v4.forEach(v5,"eeeRbEqfAO");
// v30 = .undefined
}
%NeverOptimizeFunction(main);
main();
