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
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v39 = [255,255,255];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v40 = {a:255,toString:isFinite,c:v37,__proto__:v39,valueOf:"object",constructor:"gM8oAednYn"};
// v40 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "c", "valueOf"], withMethods: ["toString"])
let v43 = RegExp;
let v44 = v43;
const v47 = new Proxy(v44,Object);
// v47 = .unknown
const v48 = Object.freeze(v47);
// v48 = .undefined
const v49 = {toString:v37,valueOf:v40,d:255,constructor:536870912};
// v49 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "constructor", "__proto__", "d"])
const v50 = RegExp.apply(v49,RegExp);
// v50 = .unknown
const v51 = "2IdSaX90v.".replace(v50,v1);
// v51 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
