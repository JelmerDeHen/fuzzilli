function main() {
const v2 = "boolean".__proto__;
// v2 = .object()
let v5 = 0;
v2.d = v2;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = [13.37,"boolean"];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v13 = {toString:v11,a:Boolean,c:"boolean",e:1337,d:Boolean,__proto__:v12};
// v13 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__", "c"], withMethods: ["a", "d"])
const v14 = {constructor:v13,d:13.37,b:1337,__proto__:v13,valueOf:-1848710946};
// v14 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "valueOf", "d"])
let v15 = v9;
const v17 = {length:isFinite};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v20 = [1337,v17,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v21(v22,v23) {
    function v24(v25,v26) {
    }
    const v29 = new Uint16Array(1000);
    // v29 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
    try {
        let v32 = 0;
        let v33 = v15;
        v15.__proto__ = v14;
        const v34 = v33 < v32;
        // v34 = .boolean
    } catch(v35) {
        const v36 = {__proto__:v35,a:v24,...v29,...4294967296,...v35,...v29};
        // v36 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "buffer", "byteOffset", "byteLength", "length"], withMethods: ["fill", "lastIndexOf", "slice", "find", "keys", "subarray", "sort", "values", "entries", "includes", "reduce", "join", "map", "every", "reverse", "set", "findIndex", "copyWithin", "indexOf", "reduceRight", "forEach", "a", "some", "filter"])
    }
}
const v37 = v20.forEach(v21,"eeeRbEqfAO");
// v37 = .undefined
}
%NeverOptimizeFunction(main);
main();
