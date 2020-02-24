function main() {
const v1 = (-4294967296)[-4294967296];
// v1 = .unknown
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [v5,13.37,v7,-4294967296];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {__proto__:v5,valueOf:"number",a:Object,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "__proto__"], withMethods: ["a"])
const v10 = {valueOf:v5};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v11 = v7;
const v14 = {e:String,b:String,length:13.37};
// v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["b", "e"])
const v17 = [1337,1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v18(v19,v20) {
    let v24 = 0;
    let v27 = 0;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
    for (const v31 in "boolean") {
        const v33 = [1337,1337];
        // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v34 = (1337).constructor;
        // v34 = .unknown
        const v35 = {set:v34,get:v34};
        // v35 = .object(ofGroup: Object, withProperties: ["set", "get", "__proto__"])
        const v37 = Object.freeze(v33,v31,v35);
        // v37 = .undefined
        const v39 = Object.entries(v33);
        // v39 = .object()
    }
}
const v40 = v17.forEach(v18,"eeeRbEqfAO");
// v40 = .undefined
"symbol"[v1] = 13.37;
const v45 = {...v5,...v7};
// v45 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"], withMethods: ["join", "toString", "unshift", "reverse", "flatMap", "lastIndexOf", "find", "shift", "sort", "findIndex", "flat", "filter", "reduce", "indexOf", "every", "includes", "splice", "map", "toLocaleString", "copyWithin", "concat", "forEach", "keys", "entries", "fill", "push", "slice", "values", "some", "pop", "reduceRight"])
const v46 = {e:v11,constructor:"number",toString:v10};
// v46 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "e"])
const v47 = [13.37,13.37];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v49 = [1337,1337,1337,1337,1337];
// v49 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v50 = [10,DataView,"symbol"];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v51 = {toString:v47,e:"symbol",a:13.37,d:DataView,constructor:v50,valueOf:v47};
// v51 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "constructor", "valueOf", "a", "e"])
const v52 = {length:v51,a:"symbol"};
// v52 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length"])
let v53 = 10;
const v58 = [13.37,13.37,13.37,13.37,13.37];
// v58 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v60 = [1337,1337,1337,1337];
// v60 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v61 = [v60];
// v61 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v62 = {constructor:v61,toString:v60,a:v61,c:v61,__proto__:isFinite,length:v61};
// v62 = .object(ofGroup: Object, withProperties: ["toString", "length", "a", "c", "__proto__", "constructor"], withMethods: ["__proto__"])
const v63 = {toString:13.37,length:1337};
// v63 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "toString"])
let v64 = -4261300175;
function v66(v67,v68) {
    delete v67.toString;
    const v71 = new Int8Array(42196);
    // v71 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
    const v72 = v47[-4294967296];
    // v72 = .unknown
    const v73 = v71.find(Object,v45);
    // v73 = .unknown
    const v77 = [13.37];
    // v77 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v79 = [v77,1337];
    // v79 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v80 = {valueOf:v79,__proto__:v79};
    // v80 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
    let v84 = undefined;
    v84 = 4.0;
    const v86 = v84.toString(13.37,-2147483647,v80,65536);
    // v86 = .unknown
    const v87 = {__proto__:536870912};
    // v87 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v87) {
        __proto__[0] = v66;
    }
    return 536870912;
}
const v90 = v66(1024,4.0);
// v90 = .unknown
let v93 = 1903240934;
const v95 = new Int8Array(v60);
// v95 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v101 = [1.7976931348623157e+308];
// v101 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v103 = [255,255,255];
// v103 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v104 = {a:255,toString:isFinite,c:v101,__proto__:v103,valueOf:"object",constructor:"gM8oAednYn"};
// v104 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "constructor", "__proto__"], withMethods: ["toString"])
const v105 = {toString:v101,valueOf:v104,d:255,constructor:536870912};
// v105 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "valueOf", "toString"])
const v106 = RegExp.apply(v105,RegExp);
// v106 = .unknown
const v107 = "object".split(v106,255);
// v107 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
