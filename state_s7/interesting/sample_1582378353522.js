function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {valueOf:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v5 = {e:v2,d:"hasInstance"};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
function v6(v7,v8) {
    let v12 = 0;
    while (v12 != 4096) {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    }
    let v15 = 5;
    const v16 = v5 <= -9007199254740992;
    // v16 = .boolean
    const v17 = v16 * v15;
    // v17 = .number
    const v18 = 5 + v17;
    // v18 = .primitive
    let v19 = 1337;
    delete v18[v19];
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v6(v22);
// v23 = .unknown
const v24 = v6(1337,v1);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
