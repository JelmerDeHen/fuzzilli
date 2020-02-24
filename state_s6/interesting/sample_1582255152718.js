function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["undefined",13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:2147483647};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v9 = {__proto__:Uint8Array,a:v8,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "valueOf", "b", "d"])
let v10 = Uint8Array;
const v15 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v15 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "b", "toString", "e"])
for (let v21 = 0; v21 < 3; v21++) {
    let v24 = 0;
    while (v24 < 9) {
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    }
}
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
}
%NeverOptimizeFunction(main);
main();
