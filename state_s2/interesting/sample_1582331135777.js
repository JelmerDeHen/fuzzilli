function main() {
function v1(v2,v3) {
}
function v5(v6,v7) {
    const v9 = {__proto__:536870912};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v9) {
        __proto__[0] = v5;
    }
    function v11(v12,v13) {
        for (const v15 in "boolean") {
            for (const v17 in "boolean") {
                function v18(v19,v20) {
                    for (const v22 in "boolean") {
                        function v23(v24,v25) {
                        }
                        const v29 = 1337 || 0;
                        // v29 = .boolean
                    }
                }
            }
        }
    }
}
const v31 = v5(1024,4.0);
// v31 = .unknown
const v37 = [1.7976931348623157e+308];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v39 = [255,255,255];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v40 = {a:255,toString:isFinite,c:v37,__proto__:v39,valueOf:"object",constructor:"gM8oAednYn"};
// v40 = .object(ofGroup: Object, withProperties: ["a", "c", "valueOf", "__proto__", "constructor"], withMethods: ["toString"])
let v43 = RegExp;
let v44 = v43;
const v47 = new Proxy(v44,Object);
// v47 = .unknown
const v48 = Object.freeze(v47);
// v48 = .undefined
const v49 = {toString:v37,valueOf:v40,d:255,constructor:536870912};
// v49 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "constructor", "__proto__", "toString"])
const v50 = RegExp.apply(v49,RegExp);
// v50 = .unknown
const v51 = "2IdSaX90v.".replace(v50,v1);
// v51 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
%NeverOptimizeFunction(main);
main();
