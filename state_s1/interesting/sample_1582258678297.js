function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = v2;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
function v11(v12,v13) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            const v31 = [];
            // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v32 = {valueOf:v31,length:13.37,d:127,e:127};
            // v32 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "length", "__proto__", "e"])
            let v33 = v32;
            let v36 = 0;
            while (v36 < 10) {
                const v37 = v31.reduceRight(v11,v33);
                // v37 = .unknown
                const v38 = v36 + 1;
                // v38 = .primitive
                v36 = v38;
            }
            for (let v42 = 0; v42 < 0; v42++) {
            }
            const v48 = v21 + 1;
            // v48 = .primitive
            v21 = v48;
        } while (v21 < 8);
    }
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v52 = v51;
const v53 = v11(v52);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
