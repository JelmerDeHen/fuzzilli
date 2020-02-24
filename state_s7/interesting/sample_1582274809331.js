function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {b:"fmvvqiCR3q",constructor:v7,__proto__:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__"])
const v9 = {d:v4,e:"fmvvqiCR3q",b:Uint32Array,length:v6,valueOf:v8};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "e", "b", "__proto__", "d"])
let v10 = 13.37;
let v14 = 0;
const v18 = new Set("asyncIterator");
// v18 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["add", "clear", "keys", "values", "entries", "delete", "forEach", "has"])
let v21 = 0;
const v22 = ["symbol",...v18,v21];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
v14 = v22;
const v23 = JSON.stringify(v14);
// v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
let v26 = 0;
const v27 = JSON.parse(v23,0);
// v27 = .unknown
function v29(v30,v31) {
    let v35 = 0;
    const v37 = v35 + 1;
    // v37 = .primitive
    v35 = v37;
    let v41 = 0;
    do {
        let v43 = v41;
        while (v43 < 512) {
            const v44 = v43 % 512;
            // v44 = .number
            const v45 = v44 + 1;
            // v45 = .primitive
            v43 = v45;
        }
        const v46 = v41 + 1;
        // v46 = .primitive
        v41 = v46;
    } while (v41 < 8);
}
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v49 = v48;
const v50 = v29(v49);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
