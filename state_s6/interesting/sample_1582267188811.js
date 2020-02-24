function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v29 = new Int16Array(19873);
// v29 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
function v44(v45,v46,v47,v48,...v49) {
    for (const v50 in v49) {
        with ("number") {
            length = v46;
            const v51 = {toString:Int16Array,a:v29,b:1337,valueOf:v50,length:13.37};
            // v51 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "a", "length", "__proto__", "toString"])
        }
        const v52 = v45(v49,v50,v47,v4);
        // v52 = .unknown
        v52.toString = v50;
        v52.__proto__ = v52;
        const v58 = eval(1337);
        // v58 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    }
    return v47;
}
const v59 = v44(1337);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
