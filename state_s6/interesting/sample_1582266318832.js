function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {valueOf:4294967295,a:v6,b:v6,toString:1337};
// v7 = .object(ofGroup: Object, withProperties: ["a", "toString", "__proto__", "b", "valueOf"])
let v8 = 13.37;
function v9(v10,v11) {
    const v17 = [3156875969,3156875969,1337,DataView];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v18 = {constructor:v17,c:v17,e:5.0,d:1337,a:3156875969,__proto__:"boolean"};
    // v18 = .object(ofGroup: Object, withProperties: ["d", "a", "e", "c", "__proto__", "constructor"])
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            try {
                const v27 = ~v8;
                // v27 = .boolean
                let v28 = 5.0;
                for (let v32 = 0; v32 < 6; v32++) {
                    const v33 = "boolean".charCodeAt(0);
                    // v33 = .integer
                }
                const v34 = v10.prototype;
                // v34 = .unknown
                let v38 = 0;
                const v39 = v38 + 1;
                // v39 = .primitive
                let v40 = 0;
                do {
                    const v41 = 1337 + 1;
                    // v41 = .primitive
                    v40 = v41;
                } while (v40 < 7);
            } catch(v42) {
                let v45 = 0;
                while (v45 < 10) {
                }
            }
            const v47 = {set:v9};
            // v47 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
            const v49 = Object.defineProperty(v18,4294967295,v47);
            // v49 = .undefined
            v17.valueOf = Object;
            const v50 = v26 + 1;
            // v50 = .primitive
            v26 = v50;
            v22 = v49;
            let v51 = 3156875969;
        } while (v26 < 8);
    }
    return v2;
}
const v53 = [1337];
// v53 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v54 = v53;
const v55 = v9(v54);
// v55 = .unknown
const v56 = v9(v7);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
