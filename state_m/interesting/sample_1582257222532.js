function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7) {
    const v8 = v6 in v5;
    // v8 = .boolean
    const v14 = [3156875969,3156875969,1337,DataView];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v15 = {constructor:v14,c:v14,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v15 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "d", "e", "constructor", "c"])
    for (let v19 = 0; v19 < 10; v19 = v19 + v6) {
    }
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                v29 = v30;
            } while (v29 < 7);
            let v33 = 0;
            const v37 = v26 + 1;
            // v37 = .primitive
            v26 = v37;
        } while (v26 < 8);
    }
    const v38 = v22 + 1;
    // v38 = .primitive
    v22 = v38;
}
const v41 = [v1];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v42 = v41;
const v43 = v5(v42);
// v43 = .unknown
const v44 = v5(1024,4.0);
// v44 = .unknown
const v45 = v5(v3,v5);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
