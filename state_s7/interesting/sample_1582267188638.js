function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v29 = new Int16Array(19873);
// v29 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
function v44(v45,v46,v47,v48,...v49) {
    for (const v50 in v49) {
        with ("number") {
            length = v46;
            const v51 = {toString:Int16Array,a:v29,b:1337,valueOf:v50,length:13.37};
            // v51 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "toString", "a", "__proto__"])
        }
        const v52 = v45(v49,v50,v47,v4);
        // v52 = .unknown
        v52.toString = v50;
        v52.__proto__ = v52;
        const v58 = eval(1337);
        // v58 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    }
    return v47;
}
const v59 = v44(1337);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
