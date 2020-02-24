function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
            // v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v32 = {valueOf:v31,length:13.37,d:127,e:127};
            // v32 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "valueOf", "__proto__"])
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
// v51 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v52 = v51;
const v53 = v11(v52);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
