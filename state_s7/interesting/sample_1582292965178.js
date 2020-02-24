function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = [v4];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {length:1337,__proto__:1337,constructor:13.37,valueOf:gc};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["valueOf"])
const v10 = {d:v7,c:10000};
// v10 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "c"])
let v11 = 10000;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
function v16(v17,v18) {
    for (const v20 in "boolean") {
        const v23 = [13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v26 = 0;
        const v27 = v23.includes();
        // v27 = .boolean
        const v28 = v26 + 1;
        // v28 = .primitive
        v26 = v28;
        let v29 = v23;
        v29[5] = 0;
        let v32 = 0;
        do {
            let v34 = 0;
            const v35 = v34 - 1;
            // v35 = .primitive
            const v38 = eval(1337);
            // v38 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v39 = v32 + 1;
            // v39 = .primitive
            v32 = v39;
        } while (v32 <= 8);
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v42 = v41;
const v43 = v16(v42);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
