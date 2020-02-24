function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {a:v4,d:1337,b:v4,valueOf:-536870912,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "b", "d"])
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
