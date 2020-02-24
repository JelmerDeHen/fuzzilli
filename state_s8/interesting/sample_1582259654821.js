function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {d:-2,constructor:v4,c:1337,a:"q/+K04Gt.w",b:v7,__proto__:-2,valueOf:-2,e:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "c", "constructor", "valueOf", "a", "d"])
const v9 = {constructor:1337,__proto__:"q/+K04Gt.w"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
let v10 = v7;
let v13 = 0;
function v14(v15,v16) {
    const v17 = v15 in v14;
    // v17 = .boolean
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            for (const v27 of "pvU0UUjoya") {
            }
            const v28 = v22 + 1;
            // v28 = .primitive
            v22 = v28;
        } while (v22 < 8);
    }
    const v32 = [13.37,13.37,13.37,13.37,13.37];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    for (const v34 in "object") {
        const v35 = ~v17;
        // v35 = .boolean
    }
    const v38 = 1337 == 13.37;
    // v38 = .boolean
    const v40 = Object();
    // v40 = .object()
    let v48 = 0;
    return v32;
    const v49 = v48 + 1;
    // v49 = .primitive
    v48 = v49;
}
do {
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    let v55 = "function";
    v52 = v53;
    const v56 = {};
    // v56 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v59 = Object.freeze(v56);
    // v59 = .undefined
    const v60 = v13 + 1;
    // v60 = .primitive
    v13 = v60;
} while (v13 < 8);
const v61 = v8 | 0;
// v61 = .integer
const v62 = v8 - 1;
// v62 = .primitive
const v63 = v10.every(v14,v10);
// v63 = .boolean
v7.valueOf = v14;
for (const v64 in v7) {
    const v65 = ~v8;
    // v65 = .boolean
}
const v66 = v14(v14,v9);
// v66 = .unknown
}
%NeverOptimizeFunction(main);
main();
