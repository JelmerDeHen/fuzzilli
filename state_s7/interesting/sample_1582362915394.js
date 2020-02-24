function main() {
function v1(v2,v3) {
    for (const v6 in "boolean") {
        const v12 = [1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v13 = [3,1337,1337,3];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v14 = {toString:13.37,b:v13,length:WeakSet,__proto__:3,c:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["c", "toString", "b", "length", "__proto__"])
        const v15 = {constructor:v14,length:v12,valueOf:"object",e:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "length", "constructor"])
        const v16 = v13.entries();
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v17 = RegExp.apply(v2,v16);
        // v17 = .unknown
        let v20 = 0;
        do {
            const v21 = v20 + 1;
            // v21 = .primitive
            for (const v23 in "description") {
            }
            v20 = v21;
        } while (v20 < 8);
    }
}
const v25 = v1(RegExp);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
