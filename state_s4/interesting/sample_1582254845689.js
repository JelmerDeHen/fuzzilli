function main() {
function v2(v3,v4) {
    const v5 = v3 in v2;
    // v5 = .boolean
    const v11 = [3156875969,3156875969,1337,DataView];
    // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v12 = {constructor:v11,c:v11,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "e", "d", "c"])
    const v13 = {e:DataView,constructor:1337,valueOf:1337,d:v11};
    // v13 = .object(ofGroup: Object, withProperties: ["d", "constructor", "valueOf", "__proto__", "e"])
    for (let v19 = 0; v19 < 10; v19++) {
    }
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            try {
                let v29 = 0;
                do {
                    const v30 = v29 + 1;
                    // v30 = .primitive
                    v29 = v30;
                } while (v29 < 7);
            } catch(v31) {
                let v34 = 0;
                while (v34 < 10) {
                    for (let v37 = DataView; v37 < 0; v37++) {
                    }
                }
                try {
                } catch(v38) {
                }
            }
            const v39 = v26 + 1;
            // v39 = .primitive
            v26 = v39;
        } while (v26 < 8);
    }
    do {
        const v40 = v22 + 1;
        // v40 = .primitive
        v22 = v40;
    } while (v22 < 3);
    for (const v42 in "object") {
    }
    return 13.37;
}
const v47 = [13.37,13.37,13.37];
// v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v49 = [1337,1337];
// v49 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v50 = [v49,v49,v49];
// v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v51 = {d:"undefined",e:v47,__proto__:v49,c:v49,toString:v50};
// v51 = .object(ofGroup: Object, withProperties: ["toString", "c", "d", "__proto__", "e"])
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v53 = v52;
const v54 = v2(v53);
// v54 = .unknown
const v55 = v2();
// v55 = .unknown
const v56 = v2("undefined",4.0);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();