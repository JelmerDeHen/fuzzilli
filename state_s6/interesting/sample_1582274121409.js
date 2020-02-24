function main() {
let v3 = 0;
const v6 = new Int16Array(19873);
// v6 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
let v10 = 0;
let v13 = 0;
let v15 = 1337;
function v20(v21,v22) {
    for (const v24 in "boolean") {
        let v27 = 0;
        do {
            let v30 = -1;
            do {
                const v31 = v30 + 1;
                // v31 = .primitive
                const v32 = v30 % v31;
                // v32 = .number
                v30 = v31;
                const v33 = "__proto__".slice(v32,v22);
                // v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            } while (v30 < 7);
            const v34 = v27 + 1;
            // v34 = .primitive
            v27 = v34;
        } while (v27 < 8);
    }
}
const v36 = [-138567527];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v37 = v36;
const v38 = v20(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
