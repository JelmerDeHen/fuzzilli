function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {constructor:v6};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v9 = {toString:1337,a:-3600207163,length:Int32Array,__proto__:"7R3nKGaB0M"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "length", "a"])
let v10 = v9;
function v13(v14,v15) {
    const v19 = {length:"N0Xx92zvHQ"};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v20 = {constructor:13.37,length:13.37,__proto__:v19,toString:Number,a:"N0Xx92zvHQ"};
    // v20 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "length"], withMethods: ["toString"])
    const v21 = Math.trunc(Uint32Array);
    // v21 = .number
    let v25 = 0;
    return Math;
}
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v13();
    // v34 = .unknown
}
const v40 = 0 && 100;
// v40 = .boolean
const v43 = new Float64Array(49095);
// v43 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
for (let v47 = 0; v47 < 2; v47++) {
    const v48 = v13(Math,49095,v6,...v43);
    // v48 = .unknown
}
const v49 = "boolean"[1337];
// v49 = .unknown
const v50 = typeof 49095;
// v50 = .string
const v52 = v50 === "boolean";
// v52 = .boolean
const v53 = v13(v13);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
