function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [Number,v6,13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v10 = new Int32Array(19873);
// v10 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v12 = Object.entries(v10);
// v12 = .object()
const v13 = {b:13.37,d:-256,c:Number,constructor:"MIN_VALUE",valueOf:-256,length:1337,e:-256};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "e", "d", "b", "valueOf"], withMethods: ["c"])
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v15 = "MIN_VALUE";
function v17(v18,v19) {
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            for (const v26 of "pvU0UUjoya") {
            }
            const v27 = v24 + 1;
            // v27 = .primitive
            v24 = v27;
        } while (v24 < 8);
    }
    const v30 = Array(1337);
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v32 = Object(v30);
    // v32 = .object()
    return 1337;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v36 = v35;
const v37 = v17(v36);
// v37 = .unknown
const v38 = v17(1024,4.0);
// v38 = .unknown
const v39 = {c:1337,a:v7,toString:v7,valueOf:4.0,...Int32Array,...1337,...v35,...v12};
// v39 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "toString", "__proto__", "valueOf", "c"], withMethods: ["every", "unshift", "entries", "findIndex", "values", "lastIndexOf", "reduce", "find", "concat", "shift", "keys", "flat", "copyWithin", "toString", "forEach", "filter", "reduceRight", "push", "splice", "pop", "some", "sort", "includes", "indexOf", "toLocaleString", "flatMap", "fill", "join", "map", "reverse", "slice"])
Number.c = 1337;
const v40 = Object.prototype;
// v40 = .object()
let v43 = 0;
do {
    const v44 = !Number;
    // v44 = .boolean
    const v45 = v43 + 1;
    // v45 = .primitive
    v43 = v45;
} while (v43 < 7);
const v46 = Object();
// v46 = .object()
}
%NeverOptimizeFunction(main);
main();
