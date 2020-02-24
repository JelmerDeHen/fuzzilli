function main() {
function v3(v4,v5) {
    let v8 = 0;
    let v11 = 0;
    let v15 = 0;
    const v19 = v15 + 1;
    // v19 = .primitive
    v15 = v19;
    const v20 = v11 + 1;
    // v20 = .primitive
    v11 = v20;
    function v21(v22,v23) {
        for (const v25 in "boolean") {
            let v28 = 0;
            do {
                const v32 = {toString:"boolean",a:v8,__proto__:v22,d:"number",c:v4,length:13.37};
                // v32 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "a", "d", "c"])
                const v33 = v28 + 1;
                // v33 = .primitive
                v28 = v33;
            } while (v28 < 8);
        }
    }
    const v35 = [1337];
    // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v36 = v35;
    const v37 = v21(v36);
    // v37 = .unknown
    const v38 = v21();
    // v38 = .unknown
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v42 = v41;
const v43 = v3(v42);
// v43 = .unknown
const v44 = v3(1024,4.0);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
