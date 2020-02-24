function main() {
const v4 = {e:13.37,d:"d"};
// v4 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
const v5 = {e:v4,d:1337};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
let v6 = v5;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v9(v10,v11) {
    const v15 = [3156875969,3156875969,1337,DataView];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            const v22 = v15.constructor;
            // v22 = .object(ofGroup: Function, withProperties: ["__proto__", "name", "constructor", "prototype", "length", "arguments", "caller"], withMethods: ["call", "bind", "apply"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"]))
            const v23 = v22.bind(v8,gc,8);
            // v23 = .unknown
            for (let v28 = 0; v28 < 10; v28++) {
                const v29 = "d".indexOf(v28,8);
                // v29 = .integer
            }
            v21 = v23;
            let v30 = v8;
            if (v21) {
                v6[0] = v15;
            } else {
            }
            v4[0] = 13.37;
            let v32 = 0;
            do {
                const v33 = v32 + 1;
                // v33 = .primitive
                v32 = v33;
            } while (v32 < 7);
            const v34 = v21 + 1;
            // v34 = .primitive
        } while (v21 < 8);
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v37 = v36;
const v38 = v9(v37);
// v38 = .unknown
let v41 = 0;
const v42 = "d".endsWith(v38,1337);
// v42 = .boolean
const v43 = v9(v42,9007199254740993);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
