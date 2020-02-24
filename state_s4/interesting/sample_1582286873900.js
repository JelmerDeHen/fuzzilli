function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7) {
    function v11(v12,v13) {
    }
    function v14(v15,v16,v17) {
    }
    const v20 = new Uint16Array(1000);
    // v20 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
    try {
        const v23 = {get:v11,set:v14};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v25 = Object.defineProperty(v20,4294967297,v23);
        // v25 = .undefined
    } catch(v26) {
        const v27 = {__proto__:v26,a:v11,...v20,...4294967296,...v26,...v20};
        // v27 = .object(ofGroup: Object, withProperties: ["byteOffset", "__proto__", "byteLength", "length", "buffer", "constructor"], withMethods: ["a", "map", "every", "keys", "join", "some", "fill", "entries", "slice", "values", "includes", "findIndex", "copyWithin", "subarray", "sort", "find", "set", "forEach", "reduce", "lastIndexOf", "indexOf", "reverse", "reduceRight", "filter"])
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
