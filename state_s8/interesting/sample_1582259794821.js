function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = [1000.0];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v13 = [v12,v10];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = {d:-2,constructor:v10,c:1337,a:"q/+K04Gt.w",b:v13,__proto__:-2,valueOf:-2,e:1000.0};
// v14 = .object(ofGroup: Object, withProperties: ["c", "constructor", "d", "a", "valueOf", "e", "__proto__", "b"])
let v15 = v13;
for (let v19 = 0; v19 < 8; v19++) {
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
    let v25 = 0;
    do {
        let v27 = "string";
        const v31 = (512).__proto__;
        // v31 = .unknown
        const v33 = v31.toLocaleString(0);
        // v33 = .unknown
        const v35 = [13.37,13.37];
        // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v36 = v35[1024];
        // v36 = .unknown
        const v37 = v25 + 1;
        // v37 = .primitive
        v25 = v37;
    } while (v25 < 8);
}
}
%NeverOptimizeFunction(main);
main();
