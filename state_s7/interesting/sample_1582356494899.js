function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = ["number",13.37,v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {b:"number"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
try {
    const v9 = new Uint32Array(1024);
    // v9 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
    v9.constructor = Float32Array;
    const v12 = v9.slice(-2147483649,1337);
    // v12 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["find", "copyWithin", "includes", "reverse", "map", "slice", "join", "lastIndexOf", "sort", "findIndex", "indexOf", "set", "keys", "filter", "some", "subarray", "forEach", "fill", "entries", "values", "reduce", "reduceRight", "every"])
    const v14 = {length:isFinite};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v17 = [1337,v14,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v19(v20,v21) {
        const v22 = v20(v21,v4,v21,"pvU0UUjoya",v20);
        // v22 = .unknown
    }
    const v23 = v17.forEach(v19,"eeeRbEqfAO");
    // v23 = .undefined
    let v26 = 0;
    let v29 = 0;
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();
