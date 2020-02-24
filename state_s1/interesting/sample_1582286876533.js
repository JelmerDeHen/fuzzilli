function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v5(v6,v7) {
    function v11(v12,v13) {
    }
    function v14(v15,v16,v17) {
    }
    const v20 = new Uint16Array(1000);
    // v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
    try {
        const v23 = {get:v11,set:v14};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
        const v25 = Object.defineProperty(v20,4294967297,v23);
        // v25 = .undefined
    } catch(v26) {
        const v27 = {__proto__:v26,a:v11,...v20,...4294967296,...v26,...v20};
        // v27 = .object(ofGroup: Object, withProperties: ["byteOffset", "constructor", "__proto__", "buffer", "byteLength", "length"], withMethods: ["set", "entries", "map", "reduceRight", "indexOf", "reverse", "lastIndexOf", "every", "some", "a", "includes", "sort", "forEach", "fill", "keys", "filter", "slice", "find", "subarray", "findIndex", "copyWithin", "values", "reduce", "join"])
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
