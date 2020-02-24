function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = ["a",3,3];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v8 = .object(ofGroup: Object, withProperties: ["a", "c", "valueOf", "toString", "constructor", "__proto__"])
const v9 = {toString:v4,valueOf:v8,d:1337,constructor:3};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "valueOf", "__proto__", "d"])
let v10 = 1337;
const v14 = [];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = {valueOf:v14,length:981167.8626414947,d:127,e:127};
// v15 = .object(ofGroup: Object, withProperties: ["length", "e", "valueOf", "d", "__proto__"])
let v16 = v15;
function v19(v20,v21) {
    const v22 = v20 in v19;
    // v22 = .boolean
    const v28 = [3156875969,3156875969,1337,DataView];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v29 = {constructor:v28,c:v28,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v29 = .object(ofGroup: Object, withProperties: ["e", "c", "d", "constructor", "__proto__", "a"])
    const v30 = {e:DataView,constructor:1337,valueOf:1337,d:v28};
    // v30 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "constructor", "__proto__", "d"])
    for (let v35 = 0; v35 < 10; v35++) {
    }
    const v37 = [1337];
    // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v40 = 0;
    let v43 = 0;
    do {
        try {
            let v46 = 0;
            do {
                const v47 = v46 + 1;
                // v47 = .primitive
                const v48 = {constructor:3156875969,...v47,...8};
                // v48 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
                v16 = v28;
                v46 = v47;
            } while (v46 < 7);
        } catch(v49) {
            let v52 = 0;
            for (let v56 = 0; v56 < 0; v56++) {
            }
            for (let v60 = 0; v60 < 100; v60++) {
            }
            const v61 = v30 > v22;
            // v61 = .boolean
        }
        const v62 = v43 + 1;
        // v62 = .primitive
        v43 = v62;
    } while (v43 < 8);
    do {
        const v63 = v40 + 1;
        // v63 = .primitive
        v40 = v63;
    } while (v40 < 3);
    for (const v65 in "object") {
    }
}
const v67 = [1337];
// v67 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v68 = v67;
const v69 = v19(v68);
// v69 = .unknown
const v70 = v19(1024,4.0);
// v70 = .unknown
const v71 = v19(v70,v68);
// v71 = .unknown
}
%NeverOptimizeFunction(main);
main();
