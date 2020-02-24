function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            for (const v10 of "pvU0UUjoya") {
            }
            const v11 = v8 + 1;
            // v11 = .primitive
            v8 = v11;
        } while (v8 < 8);
    }
    let v13 = 1337;
    function v14(v15,v16) {
        v14.prototype = 1337;
        return v14;
    }
    const v18 = v14();
    // v18 = .unknown
    v18.toString = v13;
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v21 = v20;
const v22 = v1(v21);
// v22 = .unknown
const v23 = v1(1024,1024);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
