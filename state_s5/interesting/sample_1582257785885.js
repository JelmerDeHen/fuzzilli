function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {valueOf:4294967295,a:v3,b:v3,toString:1337};
// v4 = .object(ofGroup: Object, withProperties: ["a", "b", "valueOf", "toString", "__proto__"])
let v5 = 13.37;
function v6(v7,v8) {
    const v14 = [3156875969,3156875969,1337,DataView];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v15 = {constructor:v14,c:v14,e:5.0,d:1337,a:3156875969,__proto__:"boolean"};
    // v15 = .object(ofGroup: Object, withProperties: ["d", "constructor", "e", "__proto__", "c", "a"])
    let v19 = 0;
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            try {
                const v24 = ~v5;
                // v24 = .boolean
                let v25 = 5.0;
                for (let v29 = 0; v29 < 6; v29++) {
                    const v30 = "boolean".charCodeAt(0);
                    // v30 = .integer
                }
                const v31 = v7.prototype;
                // v31 = .unknown
                let v34 = 0;
                do {
                    const v35 = v34 + 1;
                    // v35 = .primitive
                    v34 = v35;
                } while (v34 < 7);
            } catch(v36) {
                let v39 = 0;
                while (v39 < 10) {
                }
            }
            const v41 = {set:v6};
            // v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
            const v43 = Object.defineProperty(v15,4294967295,v41);
            // v43 = .undefined
            v14.valueOf = Object;
            const v44 = v23 + 1;
            // v44 = .primitive
            v23 = v44;
            v19 = v43;
            let v45 = 3156875969;
        } while (v23 < 8);
    }
}
const v47 = [1337];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v48 = v47;
const v49 = v6(v48);
// v49 = .unknown
let v52 = 0;
const v53 = v52 + 1;
// v53 = .primitive
v52 = v53;
const v54 = v6(v4);
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
