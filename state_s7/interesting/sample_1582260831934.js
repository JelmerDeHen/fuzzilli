function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = ["c",1337,3488870410];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {constructor:Uint32Array,c:v6};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__"])
function v11(v12,v13) {
    let v16 = 0;
    do {
        let v19 = 0;
        do {
            const v20 = v19 + 1;
            // v20 = .primitive
            const v21 = {constructor:3156875969,...v20,...8};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v19 = v20;
        } while (v19 < 7);
        const v22 = v16 + 1;
        // v22 = .primitive
        v16 = v22;
    } while (v16 < 8);
    const v23 = "c".slice();
    // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    return v7;
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v26 = v25;
const v27 = v11(v26);
// v27 = .unknown
const v28 = v11(1024,4.0);
// v28 = .unknown
const v29 = v11(v28,v26);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();