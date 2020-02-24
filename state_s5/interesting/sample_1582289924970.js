function main() {
const v2 = "boolean".__proto__;
// v2 = .object()
let v5 = 0;
v2.d = v2;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = [13.37,"boolean"];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = {toString:v11,a:Boolean,c:"boolean",e:1337,d:Boolean,__proto__:v12};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "toString", "c"], withMethods: ["d", "a"])
const v14 = {constructor:v13,d:13.37,b:1337,__proto__:v13,valueOf:-1848710946};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "valueOf", "constructor"])
let v15 = v9;
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
        let v32 = 0;
        let v33 = v15;
        v15.__proto__ = v14;
        const v34 = v33 < v32;
        // v34 = .boolean
    } catch(v35) {
        const v36 = {__proto__:v35,a:v24,...v29,...4294967296,...v35,...v29};
        // v36 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["some", "values", "sort", "join", "indexOf", "lastIndexOf", "slice", "set", "copyWithin", "forEach", "map", "reduce", "reduceRight", "filter", "keys", "every", "findIndex", "subarray", "entries", "fill", "find", "a", "includes", "reverse"])
    }
}
const v37 = v20.forEach(v21,"eeeRbEqfAO");
// v37 = .undefined
}
%NeverOptimizeFunction(main);
main();
