function main() {
for (let v7 = 0; v7 < 3; v7++) {
    let v10 = 0;
    while (v10 < 9) {
        const v11 = v10 % 9;
        // v11 = .number
        const v12 = v10 + 1;
        // v12 = .primitive
        v10 = v12;
    }
}
let v16 = 0;
while (v16 < 7) {
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
}
for (const v18 in "object") {
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v21 = v20[1337];
// v21 = .unknown
const v23 = [13.37,13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v24 = v23;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v33 = [13.37,13.37,13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v36 = {b:v35,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v36 = .object(ofGroup: Object, withProperties: ["a", "b", "length", "e", "__proto__", "valueOf"])
let v37 = v33;
v36[-65537] = v37;
const v38 = v33[v24];
// v38 = .unknown
let v41 = 0;
}
%NeverOptimizeFunction(main);
main();
