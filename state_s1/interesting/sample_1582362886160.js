function main() {
function v1(v2,v3) {
    for (const v6 in "boolean") {
        const v12 = [1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v13 = [3,1337,1337,3];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v14 = {toString:13.37,b:v13,length:WeakSet,__proto__:3,c:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["toString", "b", "c", "__proto__", "length"])
        const v15 = {constructor:v14,length:v12,valueOf:"object",e:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "constructor", "e", "__proto__"])
        const v16 = v13.entries();
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
