function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7) {
    function v11(v12,v13) {
    }
    function v14(v15,v16,v17) {
    }
    const v20 = new Uint16Array(1000);
    // v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
    try {
        const v23 = {get:v11,set:v14};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v25 = Object.defineProperty(v20,4294967297,v23);
        // v25 = .undefined
    } catch(v26) {
        const v27 = {__proto__:v26,a:v11,...v20,...4294967296,...v26,...v20};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteLength", "buffer", "length", "byteOffset"], withMethods: ["slice", "keys", "subarray", "filter", "map", "reverse", "find", "a", "every", "sort", "reduce", "set", "forEach", "entries", "some", "copyWithin", "includes", "join", "findIndex", "values", "lastIndexOf", "reduceRight", "indexOf", "fill"])
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
