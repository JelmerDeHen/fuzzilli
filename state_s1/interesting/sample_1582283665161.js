function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,Float32Array,v6,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {c:-4096,a:"symbol",length:Float32Array,d:v7,b:-4096,__proto__:Float32Array,valueOf:"symbol"};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "length", "d", "c", "a", "__proto__"])
const v9 = {c:v7,valueOf:Float32Array,__proto__:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__"])
let v10 = v9;
const v14 = new Int16Array(19873);
// v14 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v16 = v15;
function v19(v20,v21) {
    let v27 = 0;
    const v31 = Uint16Array + 1;
    // v31 = .primitive
    const v33 = Math.hypot(v31);
    // v33 = .number
    let v34 = 0;
    do {
        let v37 = 0;
        do {
            const v38 = v37 + 1;
            // v38 = .primitive
            const v39 = [v38,v38,3];
            // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            v37 = v38;
        } while (v37 < 7);
        const v40 = v34 + 1;
        // v40 = .primitive
        v34 = v40;
    } while (v34 < 8);
    do {
        const v41 = v27 + 1;
        // v41 = .primitive
        v27 = v41;
    } while (v27 < 3);
    const v42 = v14[v27];
    // v42 = .unknown
    const v43 = v42[v16];
    // v43 = .unknown
    return v43;
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v47 = v46;
const v48 = v19(v47);
// v48 = .unknown
const v49 = v19(1024,4.0);
// v49 = .unknown
const v50 = v19(v49,v47);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
