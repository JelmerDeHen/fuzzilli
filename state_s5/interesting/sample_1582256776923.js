function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,536870912];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = ["matchAll",v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {e:v6,c:WeakSet,length:v4,toString:v7,__proto__:"matchAll",d:v7,a:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "d", "e", "length", "toString"])
let v9 = v8;
function v12(v13,v14) {
    const v15 = v13 in v12;
    // v15 = .boolean
    const v19 = [3156875969,3156875969,1337,DataView];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            try {
                let v28 = 0;
                do {
                    const v29 = v28 + 1;
                    // v29 = .primitive
                    const v30 = 1337 / 8;
                    // v30 = .number
                    const v31 = v29 - 1;
                    // v31 = .primitive
                    const v34 = [13.37,13.37,13.37,13.37,13.37];
                    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                    const v35 = v22 << 1024;
                    // v35 = .integer
                    const v36 = v12(v9,7);
                    // v36 = .unknown
                    const v37 = 13.37 + 0;
                    // v37 = .primitive
                    function v38(v39,v40) {
                    }
                    let v43 = 0;
                    let v46 = 0;
                    for (let v49 = 0; v49 < 4; v49++) {
                    }
                } while (v28 < 7);
            } catch(v50) {
            }
            const v51 = v25 + 1;
            // v51 = .primitive
            v25 = v51;
        } while (v25 < 8);
    }
    for (const v52 in v19) {
    }
}
const v54 = [1337];
// v54 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v55 = v54;
const v56 = v12(v55);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
