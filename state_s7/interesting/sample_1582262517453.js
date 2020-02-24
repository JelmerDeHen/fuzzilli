function main() {
function v1(v2,v3) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v12 = eval(1337);
            // v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v15 = [13.37,13.37,13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v16 = {__proto__:"hasInstance",d:v15};
            // v16 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
            const v18 = {call:v16};
            // v18 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
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
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v24 = v23;
const v25 = v1(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
