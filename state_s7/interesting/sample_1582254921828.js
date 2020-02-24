function main() {
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
function v11(v12,v13) {
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            try {
                let v24 = 0;
                do {
                    const v25 = v24 + 1;
                    // v25 = .primitive
                    const v26 = [v21,7];
                    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                    const v27 = {a:v18,c:v26,valueOf:v24,constructor:0,b:"N0Xx92zvHQ"};
                    // v27 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "valueOf", "c", "b"])
                    const v29 = {set:v13};
                    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                    const v31 = Object.defineProperty(v27,"d",v29);
                    // v31 = .undefined
                    v24 = v25;
                } while (v24 < 7);
            } catch(v32) {
                let v34 = 0;
            }
            const v35 = v21 + 1;
            // v35 = .primitive
            v21 = v35;
        } while (v21 < 8);
    }
    do {
        const v36 = v17 + 1;
        // v36 = .primitive
        v17 = v36;
    } while (v17 < 3);
    for (const v38 in "object") {
    }
}
const v40 = v11(1024,4.0);
// v40 = .unknown
let v41 = Number;
"N0Xx92zvHQ".__proto__ = v41;
let v44 = 0;
const v45 = "N0Xx92zvHQ"[-65536];
// v45 = .unknown
const v46 = v44 + 1;
// v46 = .primitive
v44 = v46;
}
%NeverOptimizeFunction(main);
main();
