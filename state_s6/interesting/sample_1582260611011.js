function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {length:"boolean",c:13.37,constructor:"boolean",d:v2};
// v4 = .object(ofGroup: Object, withProperties: ["c", "length", "__proto__", "d", "constructor"])
const v7 = [1337,1337,1337,"EXkcpBKht7"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
