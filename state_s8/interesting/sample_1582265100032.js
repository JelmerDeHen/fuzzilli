function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1598087699,v4,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {c:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = {valueOf:1598087699,c:v6,d:DataView,a:1337,length:"undefined",toString:1337,b:1598087699};
// v9 = .object(ofGroup: Object, withProperties: ["b", "a", "c", "valueOf", "__proto__", "length", "toString", "d"])
let v10 = v9;
function v12(v13,v14) {
    let v20 = 0;
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            for (const v35 of "pvU0UUjoya") {
            }
            const v36 = v24 + 1;
            // v36 = .primitive
            v24 = v36;
        } while (v24 < 8);
    }
    const v37 = v20 + 1;
    // v37 = .primitive
    v20 = v37;
    const v38 = v20 + "boolean";
    // v38 = .primitive
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v42 = v41;
const v43 = v12(v42);
// v43 = .unknown
const v44 = v12(1024,4.0);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
