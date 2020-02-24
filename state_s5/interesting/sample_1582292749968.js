function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [v2,3673825185,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v7 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
let v14 = -1073741824;
v11 = v12;
const v15 = v7 + 1;
// v15 = .primitive
v7 = v15;
const v17 = {length:isFinite};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v20 = [1337,v17,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v21(v22,v23) {
    function v24(v25,v26) {
    }
    const v29 = new Uint16Array(1000);
    // v29 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
    try {
        const v31 = [Uint16Array,v3,v22];
        // v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        v31.__proto__ = v31;
    } catch(v32) {
        const v33 = {__proto__:v32,a:v24,...v29,...4294967296,...v32,...v29};
        // v33 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "byteOffset", "buffer", "constructor", "byteLength"], withMethods: ["reverse", "findIndex", "every", "some", "filter", "copyWithin", "set", "lastIndexOf", "indexOf", "entries", "join", "a", "reduceRight", "slice", "forEach", "map", "values", "fill", "reduce", "includes", "sort", "find", "keys", "subarray"])
    }
}
const v34 = v20.forEach(v21,"eeeRbEqfAO");
// v34 = .undefined
}
%NeverOptimizeFunction(main);
main();
