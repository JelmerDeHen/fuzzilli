function main() {
const v2 = {b:1337,constructor:RegExp,valueOf:1337,__proto__:1337,length:RegExp,d:RegExp};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b"], withMethods: ["length", "d", "constructor"])
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
    // v15 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v19 = new Int16Array(19873);
    // v19 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    let v21 = "object";
    const v26 = [1337,1337];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v27 = {b:13.37,d:1607264097,e:1607264097,constructor:v26,valueOf:WeakSet};
    // v27 = .object(ofGroup: Object, withProperties: ["e", "b", "d", "__proto__", "valueOf", "constructor"])
    for (const v28 in v27) {
        for (const v29 of v19) {
            for (const v30 in Object) {
                v21 = v2;
            }
        }
    }
    const v34 = [1337,1337];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v35 = {b:13.37,d:1607264097,e:1607264097,constructor:v34,valueOf:WeakSet};
    // v35 = .object(ofGroup: Object, withProperties: ["b", "e", "constructor", "valueOf", "__proto__", "d"])
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v38 = v37;
const v39 = v3(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
