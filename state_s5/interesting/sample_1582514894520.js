function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:Proxy,b:v7,e:v4,a:-65537,length:Proxy};
// v8 = .object(ofGroup: Object, withProperties: ["e", "length", "a", "__proto__", "b", "constructor"])
const v9 = typeof v7;
// v9 = .string
const v11 = v9 === "function";
// v11 = .boolean
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v13 = v12;
function v14(v15,v16,v17,...v18) {
    let v21 = 0;
    do {
        const v22 = v9[v18];
        // v22 = .unknown
        const v23 = v21 + 1;
        // v23 = .primitive
        v21 = v23;
    } while (v21 < 5);
    return v13;
}
const v24 = v6 % v4;
// v24 = .number
const v25 = v12 && "function";
// v25 = .boolean
let v28 = 0;
const v30 = v28 + 1;
// v30 = .primitive
v28 = v30;
const v37 = new Uint16Array(1337);
// v37 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
v37.constructor = Float32Array;
const v39 = v37.slice(13.37,1337);
// v39 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["reduce", "lastIndexOf", "includes", "keys", "subarray", "some", "join", "slice", "filter", "copyWithin", "findIndex", "find", "map", "reduceRight", "every", "sort", "entries", "set", "reverse", "forEach", "values", "fill", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
