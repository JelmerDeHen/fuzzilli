function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {toString:Set,c:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "c"])
const v6 = {b:v5,e:v4,toString:v4,constructor:-3005878662};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "e", "constructor"])
const v9 = [13.37,13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = {e:13.37,d:"xMfpAURUdN"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
const v12 = {e:v11,d:-65536};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
let v13 = v12;
function v14(v15,v16) {
    let v19 = 0;
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            let v25 = 0;
            let v28 = 0;
            while (v28 < 5) {
                v4.__proto__ = v3;
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
            }
            let v30 = v25;
            let v31 = "boolean";
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
            const v33 = v31[3];
            // v33 = .unknown
            let v35 = 13.37;
            if (v33) {
                v35 = v13;
            } else {
            }
            let v37 = 4294967296;
            for (let v41 = 0; v41 < 6; v41++) {
                const v42 = "undefined".indexOf(v23,v25);
                // v42 = .integer
            }
            const v43 = v9.__proto__;
            // v43 = .object()
            const v44 = v37 + 1;
            // v44 = .primitive
            v37 = v44;
            const v45 = v23 + 1;
            // v45 = .primitive
            v23 = v45;
        } while (v23 < 8);
    }
    return v6;
}
const v47 = [1337];
// v47 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v48 = v47;
const v49 = v14(v48);
// v49 = .unknown
}
%NeverOptimizeFunction(main);
main();
