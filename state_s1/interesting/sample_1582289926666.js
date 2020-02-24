function main() {
const v2 = "boolean".__proto__;
// v2 = .object()
let v5 = 0;
v2.d = v2;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = [13.37,"boolean"];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = {toString:v11,a:Boolean,c:"boolean",e:1337,d:Boolean,__proto__:v12};
// v13 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "c"], withMethods: ["d", "a"])
const v14 = {constructor:v13,d:13.37,b:1337,__proto__:v13,valueOf:-1848710946};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "constructor", "d"])
let v15 = v9;
const v17 = {length:isFinite};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v20 = [1337,v17,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v21(v22,v23) {
    function v24(v25,v26) {
    }
    const v29 = new Uint16Array(1000);
    // v29 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
    try {
        let v32 = 0;
        let v33 = v15;
        v15.__proto__ = v14;
        const v34 = v33 < v32;
        // v34 = .boolean
    } catch(v35) {
        const v36 = {__proto__:v35,a:v24,...v29,...4294967296,...v35,...v29};
        // v36 = .object(ofGroup: Object, withProperties: ["length", "byteLength", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["findIndex", "indexOf", "find", "sort", "lastIndexOf", "subarray", "reduceRight", "some", "fill", "includes", "map", "reduce", "copyWithin", "join", "values", "a", "set", "reverse", "slice", "keys", "entries", "filter", "forEach", "every"])
    }
}
const v37 = v20.forEach(v21,"eeeRbEqfAO");
// v37 = .undefined
}
%NeverOptimizeFunction(main);
main();
