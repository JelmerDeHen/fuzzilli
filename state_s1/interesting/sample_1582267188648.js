function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v29 = new Int16Array(19873);
// v29 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
function v44(v45,v46,v47,v48,...v49) {
    for (const v50 in v49) {
        with ("number") {
            length = v46;
            const v51 = {toString:Int16Array,a:v29,b:1337,valueOf:v50,length:13.37};
            // v51 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "a", "toString", "b"])
        }
        const v52 = v45(v49,v50,v47,v4);
        // v52 = .unknown
        v52.toString = v50;
        v52.__proto__ = v52;
        const v58 = eval(1337);
        // v58 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    }
    return v47;
}
const v59 = v44(1337);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
