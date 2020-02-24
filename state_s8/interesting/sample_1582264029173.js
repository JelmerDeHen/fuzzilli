function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["e", "length", "valueOf", "d", "__proto__"])
function v9(v10,v11) {
    let v15 = 0;
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            const v20 = v7.findIndex(Array,v8);
            // v20 = .integer
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                const v25 = v24 >> v19;
                // v25 = .integer
                v2.__proto__ = "boolean";
                v23 = v24;
            } while (v23 < 7);
            v8.length = 7;
            const v26 = "boolean" + 0;
            // v26 = .primitive
            v1[1] = v19;
            const v29 = new Int8Array(43013);
            // v29 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
            let v31 = 0;
            const v32 = v19 + 1;
            // v32 = .primitive
            v19 = v32;
        } while (v19 < 8);
    }
    const v33 = v15 + 1;
    // v33 = .primitive
    v15 = v33;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v9(v36);
// v37 = .unknown
const v39 = eval("undefined");
// v39 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
