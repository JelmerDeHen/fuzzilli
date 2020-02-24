function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
    // v14 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v20 = [1337,1337,1337,1337,1337];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v21 = {a:4294967295,c:v20,__proto__:13.37,e:4294967295,constructor:Set,toString:Set};
    // v21 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "c", "__proto__", "a", "e"])
    let v23 = undefined;
    const v25 = Object.preventExtensions(v21);
    // v25 = .object()
    v21.e = v23;
    const v32 = [1337,1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v33 = {b:13.37,d:1607264097,e:1607264097,constructor:v32,valueOf:WeakSet};
    // v33 = .object(ofGroup: Object, withProperties: ["e", "d", "b", "valueOf", "__proto__", "constructor"])
    const v37 = [1337,1337];
    // v37 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v38 = {b:455742.6896635834,d:1607264097,e:1607264097,constructor:v37,valueOf:WeakSet};
    // v38 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "__proto__", "b", "d", "e"])
    for (const v39 of v14) {
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v42 = v41;
const v43 = v2(v42);
// v43 = .unknown
const v44 = v2();
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
