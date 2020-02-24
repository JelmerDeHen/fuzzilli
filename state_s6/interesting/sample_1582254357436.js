function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    v3 = v4;
} while (v3 < 7);
let v9 = 0;
while (v9 < 7) {
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
}
for (const v11 in "object") {
}
let v14 = 0;
while (v14 < 9) {
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
}
let v18 = 0;
do {
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
} while (v18 < 9);
for (let v23 = 0; v23 < 9; v23++) {
}
for (const v24 of "iterator") {
}
const v25 = gc();
// v25 = .undefined
const v26 = [];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v33 = {b:v32,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v33 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "a", "__proto__", "length"])
}
%NeverOptimizeFunction(main);
main();
