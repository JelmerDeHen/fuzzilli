function main() {
function v2(v3,v4) {
    let v9 = 0;
    for (const v10 in "boolean") {
        const v13 = [13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        with (v13) {
            with (v13) {
            }
        }
        const v17 = {valueOf:1337,c:13.37};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
        function v18(v19,v20) {
            const v22 = {length:"N0Xx92zvHQ"};
            // v22 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            try {
                const v23 = RegExp.caller;
                // v23 = .object(ofGroup: Function, withProperties: ["name", "constructor", "arguments", "prototype", "caller", "__proto__", "length"], withMethods: ["bind", "apply", "call"]) + .function([.anything...] => .unknown) + .constructor([.anything...] => .unknown)
                const v24 = {__proto__:v4,valueOf:"number",d:Boolean,b:10,length:v4,a:v23};
                // v24 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b"], withMethods: ["a", "d"])
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
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v40 = v39;
const v41 = v2(v40);
// v41 = .unknown
const v42 = v2(1024,4.0);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
