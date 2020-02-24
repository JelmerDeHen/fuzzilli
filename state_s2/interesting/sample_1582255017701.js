function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = ["a",-9007199254740992,-9007199254740992];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = (1337)[RegExp];
// v8 = .unknown
const v9 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "c", "a", "valueOf", "toString", "__proto__"])
const v10 = {toString:v4,valueOf:v9,d:1337,constructor:-9007199254740992};
// v10 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "constructor", "valueOf"])
let v11 = 1337;
const v13 = [13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v14(v15,v16) {
    const v17 = v15 in v14;
    // v17 = .boolean
    const v23 = [3156875969,3156875969,1337,DataView];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v24 = {constructor:v23,c:v23,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v24 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "d", "a", "e"])
    const v25 = {e:DataView,constructor:1337,valueOf:1337,d:v23};
    // v25 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "e", "d", "__proto__"])
    for (let v30 = 0; v30 < 10; v30++) {
        let v33 = 0;
        const v34 = v33 + 1;
        // v34 = .primitive
        v33 = v34;
    }
    let v37 = 0;
    for (const v38 in "boolean") {
        let v41 = 0;
        do {
            try {
                let v44 = 0;
                do {
                    const v45 = v44 + 1;
                    // v45 = .primitive
                    v44 = v45;
                } while (v44 < 7);
            } catch(v46) {
                let v49 = 0;
                while (v49 < 10) {
                    for (let v53 = 0; v53 < 0; v53++) {
                        const v54 = 0 & 10;
                        // v54 = .integer
                        break;
                        v11 = Math;
                    }
                }
                try {
                } catch(v56) {
                }
            }
            const v57 = v41 + 1;
            // v57 = .primitive
            v41 = v57;
        } while (v41 < 8);
    }
    do {
        const v58 = v37 + 1;
        // v58 = .primitive
        v37 = v58;
    } while (v37 < 3);
    for (const v60 in "object") {
    }
    return DataView;
}
const v62 = [1337];
// v62 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v63 = v62;
const v64 = v14(v63);
// v64 = .unknown
const v65 = v14();
// v65 = .unknown
}
%NeverOptimizeFunction(main);
main();
