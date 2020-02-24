function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,16,13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {toString:v7,c:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "c"])
const v9 = {b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
let v10 = v7;
const v16 = Math.hypot(-1970853828,13.37,1337,DataView);
// v16 = .number
let v22 = 0;
do {
    let v25 = 0;
    while (v25 < 4) {
        const v26 = v4.push(v22);
        // v26 = .integer
        const v27 = v25 + 1;
        // v27 = .primitive
        v25 = v27;
    }
} while (v22 < 0);
}
%NeverOptimizeFunction(main);
main();
