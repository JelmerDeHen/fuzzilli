function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = ["2c7BSjkGPo",v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {valueOf:v6,a:1337,toString:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "a", "__proto__"])
const v9 = {a:v8,__proto__:v7,constructor:"2c7BSjkGPo",b:v4};
// v9 = .object(ofGroup: Object, withProperties: ["b", "constructor", "a", "__proto__"])
let v10 = v6;
const v14 = [13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = {c:"search",d:v14,constructor:Set,b:Set};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "b", "d"])
const v20 = [13.37,13.37,13.37,13.37];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v21(v22,v23) {
    function v26(v27,v28) {
        const v30 = [13.37,13.37,13.37,13.37,13.37];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v32 = new Uint16Array(v30);
        // v32 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
        const v34 = v32.slice(-1024,13.37);
        // v34 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["reduce", "lastIndexOf", "includes", "keys", "subarray", "some", "join", "slice", "filter", "copyWithin", "findIndex", "find", "map", "reduceRight", "every", "sort", "entries", "set", "reverse", "forEach", "values", "fill", "indexOf"])
        return v20;
    }
    const v36 = gc(...arguments);
    // v36 = .undefined
    const v37 = arguments + 1;
    // v37 = .primitive
    let v39 = 0;
    while (v39 < 1337) {
        const v40 = v39 + 1;
        // v40 = .primitive
        v39 = v40;
        let v43 = 0;
        const v44 = {d:v22,e:v37,constructor:"search",b:v40,__proto__:v15,...0,...arguments,...v26};
        // v44 = .object(ofGroup: Object, withProperties: ["constructor", "e", "d", "b", "__proto__"])
        const v45 = v43 + 1;
        // v45 = .primitive
        v43 = v45;
    }
    return v22;
}
const v46 = v20.sort(v21);
// v46 = .undefined
let v47 = 0;
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
const v52 = v47 + 1;
// v52 = .primitive
v47 = v52;
function v53(v54,v55,v56) {
    const v57 = v4.__proto__;
    // v57 = .object()
    return v9;
}
const v58 = Infinity || v51;
// v58 = .boolean
const v59 = gc();
// v59 = .undefined
v15[4294967296] = 4;
v50 = 13.37;
const v60 = v21(v20,v4);
// v60 = .unknown
const v61 = ~10;
// v61 = .boolean
const v62 = gc();
// v62 = .undefined
}
%NeverOptimizeFunction(main);
main();
