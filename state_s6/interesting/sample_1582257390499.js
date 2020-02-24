function main() {
function v2(v3,v4) {
    let v9 = 0;
    for (const v10 in "boolean") {
        const v13 = [13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        with (v13) {
            with (v13) {
            }
        }
        const v17 = {valueOf:1337,c:13.37};
        // v17 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__"])
        function v18(v19,v20) {
            const v22 = {length:"N0Xx92zvHQ"};
            // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            try {
                const v23 = RegExp.caller;
                // v23 = .object(ofGroup: Function, withProperties: ["arguments", "__proto__", "prototype", "constructor", "length", "caller", "name"], withMethods: ["bind", "call", "apply"]) + .function([.anything...] => .unknown) + .constructor([.anything...] => .unknown)
                const v24 = {__proto__:v4,valueOf:"number",d:Boolean,b:10,length:v4,a:v23};
                // v24 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "length"], withMethods: ["a", "d"])
            } catch(v25) {
            }
        }
        const v26 = v18(v17);
        // v26 = .unknown
        let v29 = 0;
        let v32 = 0;
        const v33 = v32 + 1;
        // v33 = .primitive
        v32 = v33;
        const v34 = v29 + 1;
        // v34 = .primitive
        v29 = v34;
    }
    const v35 = v9 + 1;
    // v35 = .primitive
    v9 = v35;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v40 = v39;
const v41 = v2(v40);
// v41 = .unknown
const v42 = v2(1024,4.0);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
