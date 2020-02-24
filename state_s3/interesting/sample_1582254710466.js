function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:"symbol",length:9007199254740993};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v9;
function v13(v14,v15) {
    const v16 = v14 in v13;
    // v16 = .boolean
    const v22 = [3156875969,3156875969,1337,DataView];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v23 = {constructor:v22,c:v22,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "d", "a", "c"])
    const v24 = {e:DataView,constructor:1337,valueOf:1337,d:v22};
    // v24 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "valueOf", "e"])
    for (let v29 = 0; v29 < 10; v29++) {
    }
    const v31 = [1337];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v34 = 0;
    for (const v35 in "boolean") {
        let v38 = 0;
        do {
            try {
                let v41 = 0;
                do {
                    const v42 = v41 + 1;
                    // v42 = .primitive
                    v41 = v42;
                } while (v41 < 7);
            } catch(v43) {
                let v46 = 0;
                while (v46 < -65536) {
                    for (let v50 = 0; v50 < 0; v50++) {
                    }
                }
                try {
                } catch(v51) {
                }
            }
            const v52 = v38 + 1;
            // v52 = .primitive
            v38 = v52;
        } while (v38 < 8);
    }
    do {
        const v53 = v34 + 1;
        // v53 = .primitive
        v34 = v53;
    } while (v34 < 3);
    for (const v55 in "object") {
    }
    return 3156875969;
}
const v58 = [1337];
// v58 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v59 = v58;
const v60 = v13(v59);
// v60 = .unknown
const v61 = v13(1024,4.0);
// v61 = .unknown
}
%NeverOptimizeFunction(main);
main();
