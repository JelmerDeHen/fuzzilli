function main() {
const v4 = [-226420.98374689778,-226420.98374689778,-226420.98374689778,-226420.98374689778,-226420.98374689778];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v6 = RegExp;
const v7 = {b:1337,constructor:"symbol",e:-1024,c:-1024,a:v4,valueOf:-226420.98374689778};
// v7 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "valueOf", "b", "e", "__proto__"])
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            try {
                let v22 = v9;
                const v23 = {set:v14};
                // v23 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
                const v24 = v7[1337];
                // v24 = .unknown
                const v25 = v6("symbol");
                // v25 = .object()
                const v26 = v24(v23,1024,0);
                // v26 = .unknown
                with (v6) {
                    v26[v22] = v16;
                }
            } catch(v27) {
            }
            function v28(v29,v30) {
            }
            const v31 = v19 + 1;
            // v31 = .primitive
            v19 = v31;
        } while (v19 < 8);
    }
}
const v33 = v12(1024,4.0);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
