function main() {
let v2 = undefined;
for (const v4 in "boolean") {
    let v7 = 0;
    do {
        const v13 = {b:2147483647};
        // v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
        const v14 = {__proto__:Uint8Array,a:v13,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
        // v14 = .object(ofGroup: Object, withProperties: ["a", "constructor", "b", "d", "valueOf", "__proto__"])
        const v17 = [13.37,13.37,13.37,13.37,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v19 = [1337];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v20 = [v17,v19,Uint16Array];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        v14[-2] = v20;
        const v21 = v7 + 1;
        // v21 = .primitive
        v7 = v21;
    } while (v7 < 8);
}
}
%NeverOptimizeFunction(main);
main();
