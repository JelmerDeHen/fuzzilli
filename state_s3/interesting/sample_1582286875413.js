function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    function v11(v12,v13) {
    }
    function v14(v15,v16,v17) {
    }
    const v20 = new Uint16Array(1000);
    // v20 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
    try {
        const v23 = {get:v11,set:v14};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v25 = Object.defineProperty(v20,4294967297,v23);
        // v25 = .undefined
    } catch(v26) {
        const v27 = {__proto__:v26,a:v11,...v20,...4294967296,...v26,...v20};
        // v27 = .object(ofGroup: Object, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "constructor", "length"], withMethods: ["reduceRight", "map", "a", "subarray", "filter", "reduce", "join", "indexOf", "keys", "includes", "slice", "values", "set", "some", "entries", "forEach", "reverse", "every", "fill", "findIndex", "find", "sort", "lastIndexOf", "copyWithin"])
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
