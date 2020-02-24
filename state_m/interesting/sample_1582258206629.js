function main() {
function v0(v1,v2) {
    for (let v7 = 0; v7 < 100; v7++) {
        const v8 = String.fromCodePoint(v7,v7,0,v7);
        // v8 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    }
    const v16 = [];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v17 = {valueOf:v16,length:13.37,d:127,e:127};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "e", "d"])
    const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
    // v18 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a", "c"], withMethods: ["d"])
    length = v18;
}
const v19 = v0();
// v19 = .unknown
const v20 = v0();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
