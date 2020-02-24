function main() {
let v3 = 0;
const v6 = new Int16Array(19873);
// v6 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
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
                // v33 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            } while (v30 < 7);
            const v34 = v27 + 1;
            // v34 = .primitive
            v27 = v34;
        } while (v27 < 8);
    }
}
const v36 = [-138567527];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v37 = v36;
const v38 = v20(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
