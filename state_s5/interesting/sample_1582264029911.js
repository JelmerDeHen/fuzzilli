function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "e", "d", "valueOf"])
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
            // v29 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
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
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v36 = v35;
const v37 = v9(v36);
// v37 = .unknown
const v39 = eval("undefined");
// v39 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
