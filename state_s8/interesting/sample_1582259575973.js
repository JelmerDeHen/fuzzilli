function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {e:13.37,d:"d"};
// v4 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
const v5 = {e:v4,d:1337};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
let v6 = v5;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v16 = 0;
            let v17 = "boolean";
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            const v19 = v17[3];
            // v19 = .unknown
            let v21 = 13.37;
            if (v19) {
                v21 = v6;
            } else {
            }
            let v24 = 0;
            for (let v28 = 0; v28 < 6; v28++) {
                const v29 = "undefined".indexOf(v14,v16);
                // v29 = .integer
            }
            const v30 = v2.__proto__;
            // v30 = .object()
            const v31 = v24 + 1;
            // v31 = .primitive
            v24 = v31;
            const v33 = v14 + 1;
            // v33 = .primitive
            v14 = v33;
        } while (v14 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v7(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
