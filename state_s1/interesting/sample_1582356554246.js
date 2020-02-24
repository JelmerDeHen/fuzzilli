function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = ["number",13.37,v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {b:"number"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
try {
    const v9 = new Uint32Array(1024);
    // v9 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
    v9.constructor = Float32Array;
    const v12 = v9.slice(-2147483649,1337);
    // v12 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "constructor", "length"], withMethods: ["some", "reduce", "copyWithin", "sort", "reduceRight", "every", "subarray", "slice", "includes", "set", "filter", "findIndex", "map", "join", "values", "indexOf", "find", "reverse", "entries", "fill", "forEach", "lastIndexOf", "keys"])
    const v14 = {length:isFinite};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v17 = [1337,v14,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
