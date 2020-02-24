function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["e", "length", "valueOf", "d", "__proto__"])
const v9 = {c:v7,valueOf:v8,d:Array,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "valueOf"], withMethods: ["d"])
let v10 = v8;
for (const v32 in "object") {
    "pvU0UUjoya".__proto__ = Array;
}
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
const v45 = Object[3];
// v45 = .unknown
let v48 = 0;
do {
    let v49 = 0;
    try {
        function v50(v51,v52,v53,v54) {
            const v55 = v51 & v50;
            // v55 = .integer
            return v50;
        }
        v49 = v45;
    } catch(v56) {
        let v59 = 0;
        while (v59 < 3) {
            const v60 = {getOwnPropertyDescriptor:v56,setPrototypeOf:Array,getPrototypeOf:Array};
            // v60 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "__proto__"], withMethods: ["getPrototypeOf", "setPrototypeOf"])
            const v62 = new Proxy(v49,v60);
            // v62 = .unknown
            const v63 = v59 + 1;
            // v63 = .primitive
            v59 = v63;
        }
        v49 = v59;
    }
    const v64 = v48 + 1;
    // v64 = .primitive
    v48 = v64;
} while (v48 < 1);
const v65 = v7 + 13.37;
// v65 = .primitive
let v66 = 127;
const v69 = new Int32Array(39596);
// v69 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v70 = gc();
// v70 = .undefined
}
%NeverOptimizeFunction(main);
main();
