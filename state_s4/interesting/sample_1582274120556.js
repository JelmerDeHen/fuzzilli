function main() {
let v3 = 0;
const v6 = new Int16Array(19873);
// v6 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
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
                // v33 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            } while (v30 < 7);
            const v34 = v27 + 1;
            // v34 = .primitive
            v27 = v34;
        } while (v27 < 8);
    }
}
const v36 = [-138567527];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v37 = v36;
const v38 = v20(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
