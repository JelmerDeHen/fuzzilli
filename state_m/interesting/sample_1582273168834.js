function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4) {
    for (const v6 in "prototype") {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            v9 = v10;
        } while (v9 < 8);
    }
    const v14 = new Int16Array(19873);
    // v14 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v20 = [1337,1337,1337,1337,1337];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v21 = {a:4294967295,c:v20,__proto__:13.37,e:4294967295,constructor:Set,toString:Set};
    // v21 = .object(ofGroup: Object, withProperties: ["e", "toString", "constructor", "a", "__proto__", "c"])
    let v23 = undefined;
    const v25 = Object.preventExtensions(v21);
    // v25 = .object()
    v21.e = v23;
    const v32 = [1337,1337];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v33 = {b:13.37,d:1607264097,e:1607264097,constructor:v32,valueOf:WeakSet};
    // v33 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "b", "constructor", "e", "__proto__"])
    const v37 = [1337,1337];
    // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v38 = {b:455742.6896635834,d:1607264097,e:1607264097,constructor:v37,valueOf:WeakSet};
    // v38 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "d", "__proto__", "e", "constructor"])
    for (const v39 of v14) {
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v42 = v41;
const v43 = v2(v42);
// v43 = .unknown
const v44 = v2();
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
