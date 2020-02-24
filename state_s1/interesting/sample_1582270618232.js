function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [13.37,9,"Blv+6nqKk3"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:v7,toString:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "length", "__proto__"])
const v9 = {d:v6,__proto__:v7,e:Uint32Array,constructor:v7,length:"Blv+6nqKk3",b:v8,toString:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["d", "e", "constructor", "__proto__", "b", "length", "toString"])
let v10 = v6;
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            let v23 = 0;
            do {
                const v26 = new Float32Array("hasInstance");
                // v26 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
                for (const v27 in v26) {
                }
                const v28 = v23 + 1;
                // v28 = .primitive
                const v29 = v23 / -851138.6232036713;
                // v29 = .number
                v23 = v28;
                const v30 = "__proto__".slice(v29,v15);
                // v30 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            } while (v23 < 7);
            const v31 = v20 + 1;
            // v31 = .primitive
            v20 = v31;
        } while (v20 < 8);
    }
    return "boolean";
}
const v33 = [7];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v34 = v33;
const v35 = v13(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
