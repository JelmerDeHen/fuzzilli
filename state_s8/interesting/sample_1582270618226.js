function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [13.37,9,"Blv+6nqKk3"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {length:v7,toString:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length"])
const v9 = {d:v6,__proto__:v7,e:Uint32Array,constructor:v7,length:"Blv+6nqKk3",b:v8,toString:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "e", "toString", "d", "length"])
let v10 = v6;
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            let v23 = 0;
            do {
                const v26 = new Float32Array("hasInstance");
                // v26 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
                for (const v27 in v26) {
                }
                const v28 = v23 + 1;
                // v28 = .primitive
                const v29 = v23 / -851138.6232036713;
                // v29 = .number
                v23 = v28;
                const v30 = "__proto__".slice(v29,v15);
                // v30 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            } while (v23 < 7);
            const v31 = v20 + 1;
            // v31 = .primitive
            v20 = v31;
        } while (v20 < 8);
    }
    return "boolean";
}
const v33 = [7];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v34 = v33;
const v35 = v13(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
