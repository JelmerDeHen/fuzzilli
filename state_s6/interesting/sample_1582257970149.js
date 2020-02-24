function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {d:v4,__proto__:"iterator",toString:v2,length:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "length"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = {b:v11,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v12 = .object(ofGroup: Object, withProperties: ["a", "e", "b", "valueOf", "length", "__proto__"])
const v13 = new Uint16Array(v4);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v5[v2] = 4294967297;
const v15 = [1337,1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v16 in v12) {
    v5[v2] = v16;
}
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
function v22(v23,v24) {
    const v25 = new Uint16Array(v24);
    // v25 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
    const v26 = v25[-4294967295];
    // v26 = .unknown
    for (const v28 in "boolean") {
        let v31 = 0;
        do {
            let v34 = 0;
            const v35 = v34 + 1;
            // v35 = .primitive
            v34 = v35;
            const v36 = v31 + 1;
            // v36 = .primitive
            v31 = v36;
        } while (v31 < 8);
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v40 = v39;
const v41 = v22(v40);
// v41 = .unknown
const v42 = v22();
// v42 = .unknown
const v43 = v22("undefined",4.0);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
