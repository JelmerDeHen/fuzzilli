function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v29 = new Int16Array(19873);
// v29 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
function v44(v45,v46,v47,v48,...v49) {
    for (const v50 in v49) {
        with ("number") {
            length = v46;
            const v51 = {toString:Int16Array,a:v29,b:1337,valueOf:v50,length:13.37};
            // v51 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "b", "toString", "valueOf"])
        }
        const v52 = v45(v49,v50,v47,v4);
        // v52 = .unknown
        v52.toString = v50;
        v52.__proto__ = v52;
        const v58 = eval(1337);
        // v58 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    }
    return v47;
}
const v59 = v44(1337);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
