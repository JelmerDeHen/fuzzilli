function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v29 = new Int16Array(19873);
// v29 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
function v44(v45,v46,v47,v48,...v49) {
    for (const v50 in v49) {
        with ("number") {
            length = v46;
            const v51 = {toString:Int16Array,a:v29,b:1337,valueOf:v50,length:13.37};
            // v51 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "toString", "valueOf", "a", "b"])
        }
        const v52 = v45(v49,v50,v47,v4);
        // v52 = .unknown
        v52.toString = v50;
        v52.__proto__ = v52;
        const v58 = eval(1337);
        // v58 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
    return v47;
}
const v59 = v44(1337);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
