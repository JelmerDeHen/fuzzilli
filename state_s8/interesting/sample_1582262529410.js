function main() {
function v1(v2,v3) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v12 = eval(1337);
            // v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            const v15 = [13.37,13.37,13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v16 = {__proto__:"hasInstance",d:v15};
            // v16 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
            const v18 = {call:v16};
            // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
            const v20 = v9 % 0;
            // v20 = .number
            const v21 = new Proxy(Array,v18);
            // v21 = .unknown
            const v22 = v9 + 1;
            // v22 = .primitive
            v9 = v22;
        } while (v9 < 8);
    }
}
const v23 = ["object"];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v24 = v23;
const v25 = v1(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
