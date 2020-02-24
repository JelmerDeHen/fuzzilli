function main() {
const v5 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["b", "constructor", "a", "c", "__proto__"], withMethods: ["d"])
let v6 = v5;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v9 = v8;
let v11 = undefined;
for (const v13 in "boolean") {
    let v16 = 0;
    try {
        const v18 = [1337];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v19 = v18;
        let v21 = undefined;
        let v24 = 0;
        const v25 = v6.__proto__;
        // v25 = .object()
        v6 = v25;
        for (let v29 = 0; v29 < 3; v29++) {
            for (const v31 in "object") {
            }
        }
    } catch(v32) {
    }
    const v33 = v16 + 1;
    // v33 = .primitive
    v16 = v33;
}
}
%NeverOptimizeFunction(main);
main();
