function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v7 = {e:v4,d:"d"};
// v7 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
function v8(v9,v10) {
    let v14 = -128;
    while (v14 < 5) {
        const v15 = v7 <= 0;
        // v15 = .boolean
        const v16 = v14 + 1;
        // v16 = .primitive
        const v17 = v15 + v14;
        // v17 = .primitive
        const v18 = v14 + v17;
        // v18 = .primitive
        v14 = v16;
        let v19 = 1337;
        const v20 = v17 + 1;
        // v20 = .primitive
        const v21 = "pvU0UUjoya"[v20];
        // v21 = .unknown
        delete v18[v19];
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v24 = v23;
const v25 = v8(v24);
// v25 = .unknown
const v26 = v8(1337,1337);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
