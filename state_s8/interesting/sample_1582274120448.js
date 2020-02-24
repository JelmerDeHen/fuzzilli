function main() {
let v3 = 0;
const v6 = new Int16Array(19873);
// v6 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
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
                // v33 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            } while (v30 < 7);
            const v34 = v27 + 1;
            // v34 = .primitive
            v27 = v34;
        } while (v27 < 8);
    }
}
const v36 = [-138567527];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v37 = v36;
const v38 = v20(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
