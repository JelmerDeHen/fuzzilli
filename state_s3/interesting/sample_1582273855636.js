function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {toString:Set,c:1337};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__"])
const v6 = {b:v5,e:v4,toString:v4,constructor:-3005878662};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "e", "b", "toString", "__proto__"])
const v10 = {e:13.37,d:"xMfpAURUdN"};
// v10 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
const v11 = {e:v10,d:-65536};
// v11 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
let v12 = v11;
function v13(v14,v15) {
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v24 = 0;
            let v27 = 0;
            while (v27 < 5) {
                v4.__proto__ = v3;
                const v28 = v27 + 1;
                // v28 = .primitive
                v27 = v28;
            }
            let v29 = v24;
            let v30 = "boolean";
            const v31 = v30 + 1;
            // v31 = .primitive
            v30 = v31;
            const v32 = v30[3];
            // v32 = .unknown
            let v34 = 13.37;
            if (v32) {
                v34 = v12;
            } else {
            }
            let v36 = 4294967296;
            for (let v40 = 0; v40 < 6; v40++) {
                const v41 = "undefined".indexOf(v22,v24);
                // v41 = .integer
            }
            const v42 = v3.__proto__;
            // v42 = .object()
            const v43 = v36 + 1;
            // v43 = .primitive
            v36 = v43;
            const v44 = v22 + 1;
            // v44 = .primitive
            v22 = v44;
        } while (v22 < 8);
    }
    return v6;
}
let v45 = v10;
const v46 = v13(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
