function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {a:v4,d:1337,b:v4,valueOf:-536870912,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "d", "a"])
let v6 = v5;
function v7(v8,v9) {
    const v13 = Map || 0;
    // v13 = .boolean
    if (v13) {
        const v14 = v6.__proto__;
        // v14 = .object()
    } else {
    }
    let v24 = 0;
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
}
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v7();
    // v33 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
