function main() {
const v2 = {b:1337,constructor:RegExp,valueOf:1337,__proto__:1337,length:RegExp,d:RegExp};
// v2 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__"], withMethods: ["constructor", "length", "d"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
        } while (v10 < 8);
    }
    const v15 = new Int16Array(19873);
    // v15 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
    const v19 = new Int16Array(19873);
    // v19 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
    let v21 = "object";
    const v26 = [1337,1337];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v27 = {b:13.37,d:1607264097,e:1607264097,constructor:v26,valueOf:WeakSet};
    // v27 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "d", "b", "valueOf"])
    for (const v28 in v27) {
        for (const v29 of v19) {
            for (const v30 in Object) {
                v21 = v2;
            }
        }
    }
    const v34 = [1337,1337];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v35 = {b:13.37,d:1607264097,e:1607264097,constructor:v34,valueOf:WeakSet};
    // v35 = .object(ofGroup: Object, withProperties: ["e", "d", "b", "constructor", "__proto__", "valueOf"])
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v38 = v37;
const v39 = v3(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
