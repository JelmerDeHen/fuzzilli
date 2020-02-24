function main() {
let v3 = 0;
const v6 = new Int16Array(19873);
// v6 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
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
                // v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            } while (v30 < 7);
            const v34 = v27 + 1;
            // v34 = .primitive
            v27 = v34;
        } while (v27 < 8);
    }
}
const v36 = [-138567527];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v37 = v36;
const v38 = v20(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
