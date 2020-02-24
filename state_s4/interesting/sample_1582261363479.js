function main() {
let v1 = RegExp;
let v3 = undefined;
const v4 = v1(v3);
// v4 = .object()
const v7 = {b:1337,e:1337,toString:Uint16Array,__proto__:Uint16Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "toString"])
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v18 = Symbol.species;
            // v18 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v19 = v7[v18];
            // v19 = .unknown
            let v21 = 0;
            const v22 = v15 + 1;
            // v22 = .primitive
            v15 = v22;
        } while (v15 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v25 = v24;
const v26 = v8(v25);
// v26 = .unknown
const v27 = v8();
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
