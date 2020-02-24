function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = ["undefined",13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {b:2147483647};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v9 = {__proto__:Uint8Array,a:v8,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__", "b", "constructor", "a"])
let v10 = Uint8Array;
function v11(v12,v13) {
    const v14 = v12 in v11;
    // v14 = .boolean
    let v45 = 0;
    const v46 = v45 + 1;
    // v46 = .primitive
    v45 = v46;
    const v48 = [1337,1337];
    // v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    for (const v71 in "boolean") {
        let v74 = 0;
        do {
            let v77 = 0;
            do {
                const v78 = v77 + 1;
                // v78 = .primitive
                v77 = v78;
            } while (v77 < 7);
            const v84 = v74 + 1;
            // v84 = .primitive
            v74 = v84;
        } while (v74 < 8);
    }
    return 2147483647;
}
const v88 = [1337];
// v88 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v89 = v88;
const v90 = v11(v89);
// v90 = .unknown
let v93 = 0;
const v94 = v93 + 1;
// v94 = .primitive
v93 = v94;
const v95 = v11("boolean");
// v95 = .unknown
for (const v96 of v6) {
    v96.__proto__ = "boolean";
}
const v98 = v11(v95,v7);
// v98 = .unknown
}
%NeverOptimizeFunction(main);
main();
