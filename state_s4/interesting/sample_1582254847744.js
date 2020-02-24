function main() {
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v19 = 0;
do {
    const v20 = v19 + 1;
    // v20 = .primitive
    function v21(v22,v23) {
        const v24 = v22 in v21;
        // v24 = .boolean
        const v30 = [3156875969,3156875969,1337,DataView];
        // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v31 = {constructor:v30,c:v30,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
        // v31 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "constructor", "e", "d"])
        const v32 = {e:DataView,constructor:1337,valueOf:1337,d:v30};
        // v32 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "constructor", "d"])
        for (let v37 = 0; v37 < 10; v37++) {
            let v39 = 0;
            const v40 = v39 + 1;
            // v40 = .primitive
        }
        let v43 = 0;
        for (const v44 in "boolean") {
            let v47 = 0;
            do {
                try {
                    let v50 = 0;
                    do {
                        const v51 = v50 + 1;
                        // v51 = .primitive
                        v50 = v51;
                    } while (v50 < 7);
                } catch(v52) {
                    let v55 = 0;
                    while (v55 < 10) {
                    }
                }
                const v59 = v47 + 1;
                // v59 = .primitive
                v47 = v59;
            } while (v47 < 8);
        }
        do {
            const v60 = v43 + 1;
            // v60 = .primitive
            v43 = v60;
        } while (v43 < 3);
        for (const v62 in "object") {
        }
    }
    const v64 = [1337];
    // v64 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v65 = v64;
    const v66 = v21(v65);
    // v66 = .unknown
    v19 = v20;
} while (v19 < 7);
let v68 = 4294967297;
const v69 = gc();
// v69 = .undefined
}
%NeverOptimizeFunction(main);
main();
