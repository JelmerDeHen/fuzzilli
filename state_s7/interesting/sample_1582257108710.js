function main() {
let v4 = 0;
const v8 = v4 + 1;
// v8 = .primitive
v4 = v8;
const v9 = 8 >= 3999259790;
// v9 = .boolean
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = ["e",3999259790,v11];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = new Int16Array(19873);
// v15 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
function v16(v17,v18) {
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            const v24 = v12.__proto__;
            // v24 = .object()
            const v25 = v24 + v9;
            // v25 = .primitive
            const v26 = new Int16Array(v15);
            // v26 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            const v27 = typeof v11;
            // v27 = .string
            const v29 = v27 === "undefined";
            // v29 = .boolean
            let v32 = 0;
            do {
                const v33 = v32 + 1;
                // v33 = .primitive
                const v36 = [1337,1337,1337,1337];
                // v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                const v37 = {b:2147483647};
                // v37 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
                function v38(v39,v40) {
                    try {
                        for (const v41 in v36) {
                        }
                    } catch(v42) {
                    }
                    return v20;
                }
                const v43 = 19873 + 1;
                // v43 = .primitive
                const v44 = v36.findIndex(v38,v37);
                // v44 = .integer
                v32 = v33;
            } while (v32 < 7);
            const v45 = v23 + 1;
            // v45 = .primitive
            v23 = v45;
        } while (v23 < 8);
    }
}
const v47 = [1337];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v48 = v47;
const v49 = v16(v48);
// v49 = .unknown
const v50 = v16(Int16Array,v47);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
