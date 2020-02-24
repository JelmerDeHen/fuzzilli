function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                const v19 = {c:7,length:v11,b:v9,constructor:v18};
                // v19 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "constructor", "c"])
                const v20 = !v14;
                // v20 = .boolean
                const v21 = "boolean" === v18;
                // v21 = .boolean
                v5.toString = v8;
                v17 = v18;
            } while (v17 < 7);
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
            const v31 = [1337];
            // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v32 = v31;
            const v34 = new Float32Array(Float32Array,v32,undefined);
            // v34 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
            const v37 = 1337 == 13.37;
            // v37 = .boolean
            let v38 = v34;
            v38[v24] = v37;
            const v39 = v14 + 1;
            // v39 = .primitive
            v14 = v39;
        } while (v14 < 8);
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v42 = v41;
const v43 = v7(v42);
// v43 = .unknown
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v45 = ["replace"];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v46 = {b:v3,constructor:1337,d:-1107350769};
// v46 = .object(ofGroup: Object, withProperties: ["b", "d", "constructor", "__proto__"])
const v47 = {valueOf:13.37,b:v44,c:v46,constructor:"replace"};
// v47 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "constructor", "b", "__proto__"])
let v48 = -1107350769;
function v49(v50,v51) {
    let v55 = 0;
    do {
        const v60 = eval();
        // v60 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        const v61 = v55 + 1;
        // v61 = .primitive
        v55 = v61;
    } while (v55 < 8);
    return v47;
}
const v63 = [1337];
// v63 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v64 = v63;
const v65 = v49(v64);
// v65 = .unknown
const v67 = [1337,1337,1337,1337];
// v67 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v48 = v3;
const v68 = v7(v48,v64);
// v68 = .unknown
}
%NeverOptimizeFunction(main);
main();
