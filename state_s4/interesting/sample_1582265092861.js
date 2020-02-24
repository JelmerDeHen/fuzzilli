function main() {
function v4(v5,v6) {
    for (const v8 in "boolean") {
        const v13 = Reflect.construct(Uint8Array,Reflect);
        // v13 = .unknown
        let v14 = 0;
        do {
            const v16 = [13.37,13.37,13.37,13.37,13.37];
            // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v17 = v16;
            const v18 = v14 + 1;
            // v18 = .primitive
            const v21 = eval(1337);
            // v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            v14 = v18;
        } while (v14 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v24 = v23;
const v25 = v4(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
