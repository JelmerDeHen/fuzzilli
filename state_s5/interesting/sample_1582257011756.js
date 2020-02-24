function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [Promise];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {toString:v3,__proto__:"number",valueOf:v4,b:v3,length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b", "length", "valueOf"])
let v6 = 1337;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = v5.__proto__;
            // v15 = .object()
            for (const v16 in v8) {
                const v17 = v15 / v16;
                // v17 = .number
            }
            for (const v19 of "pvU0UUjoya") {
            }
            const v20 = v14 + 1;
            // v20 = .primitive
            v14 = v20;
        } while (v14 < 8);
    }
    return v6;
    let v23 = 0;
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v26 = v25;
const v27 = v7(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
