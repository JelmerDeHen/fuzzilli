function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = ["number",13.37,v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {b:"number"};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
try {
    const v9 = new Uint32Array(1024);
    // v9 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
    v9.constructor = Float32Array;
    const v12 = v9.slice(-2147483649,1337);
    // v12 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "byteLength", "constructor"], withMethods: ["forEach", "reduce", "findIndex", "reverse", "filter", "find", "indexOf", "entries", "includes", "map", "every", "copyWithin", "subarray", "join", "fill", "lastIndexOf", "values", "sort", "keys", "slice", "set", "some", "reduceRight"])
    const v14 = {length:isFinite};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v17 = [1337,v14,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
