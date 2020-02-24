function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {length:"boolean",c:13.37,constructor:"boolean",d:v2};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor", "length", "d"])
const v7 = [1337,1337,1337,"EXkcpBKht7"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v14 = 0;
        do {
            for (const v15 in v7) {
            }
            const v16 = v14 + 1;
            // v16 = .primitive
            v14 = v16;
        } while (v14 < 1337);
    }
    return v8;
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v19 = v18;
const v20 = v8(v19);
// v20 = .unknown
const v21 = new v20(1337);
// v21 = .object()
const v22 = v8(13.37,v4);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
