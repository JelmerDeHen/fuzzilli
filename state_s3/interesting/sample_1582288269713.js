function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {a:RegExp,valueOf:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["a"])
const v9 = {b:13.37,d:v7,c:-4096,valueOf:RegExp,constructor:v4};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "constructor", "c"], withMethods: ["valueOf"])
let v10 = 13.37;
function v11(v12,v13) {
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    let v28 = undefined;
    function v31(v32,v33) {
        const v36 = new Uint16Array(1000);
        // v36 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
        const v41 = Symbol.toStringTag;
        // v41 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v42 = v36[v41];
        // v42 = .unknown
        for (let v43 = 0; v43 < 100; v43++) {
        }
        return 13.37;
    }
    const v45 = [1337];
    // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v46 = v45;
    const v47 = v31(v46);
    // v47 = .unknown
    const v48 = v31(JSON,"function");
    // v48 = .unknown
    const v51 = new Int16Array(19873);
    // v51 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    for (const v52 of v51) {
    }
    const v53 = {c:13.37};
    // v53 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v54 = gc();
    // v54 = .undefined
    return v45;
}
const v62 = [1337];
// v62 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v63 = v62;
const v64 = v11(v63);
// v64 = .unknown
const v65 = v11(v11);
// v65 = .unknown
const v66 = v11();
// v66 = .unknown
v8[v11] = v62;
for (let v70 = 0; v70 < 0; v70++) {
    let v73 = 0;
    do {
        delete v7[RegExp];
        const v74 = v73 + 1;
        // v74 = .primitive
        v73 = v74;
    } while (v73 < 8);
}
const v75 = v63[1];
// v75 = .unknown
const v76 = v11(1);
// v76 = .unknown
}
%NeverOptimizeFunction(main);
main();
