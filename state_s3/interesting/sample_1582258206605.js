function main() {
function v0(v1,v2) {
    for (let v7 = 0; v7 < 100; v7++) {
        const v8 = String.fromCodePoint(v7,v7,0,v7);
        // v8 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
    const v16 = [];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v17 = {valueOf:v16,length:13.37,d:127,e:127};
    // v17 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "valueOf", "__proto__"])
    const v18 = {c:v16,valueOf:v17,d:Array,a:1337};
    // v18 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "__proto__"], withMethods: ["d"])
    length = v18;
}
const v19 = v0();
// v19 = .unknown
const v20 = v0();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
