function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,v3,"e",v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {valueOf:"e",length:1337,a:v3,b:v3,e:1337};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "b", "length", "__proto__", "e"])
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {valueOf:v9,length:13.37,d:127,e:127};
// v10 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "d"])
let v11 = v10;
function v14(v15,v16) {
    const v20 = [3156875969,3156875969,1337,DataView];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v21 = {e:DataView,constructor:1337,valueOf:1337,d:v20};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "e", "constructor"])
    let v27 = 0;
    let v30 = 0;
    do {
        try {
            let v33 = 0;
            do {
                const v34 = v33 + 1;
                // v34 = .primitive
                const v35 = {constructor:3156875969,...v34,...8};
                // v35 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
                v11 = v20;
                v33 = v34;
            } while (v33 < 7);
            const v36 = v20.keys();
            // v36 = .object()
            v21.__proto__ = v5;
            const v37 = "e".includes(v27,-1024);
            // v37 = .boolean
            v36.valueOf = v15;
            let v40 = 0;
            do {
                const v41 = 0 * v4;
                // v41 = .number
                const v42 = v40 + 1;
                // v42 = .primitive
                v40 = v42;
            } while (v40 < 3);
        } catch(v43) {
            for (let v50 = 0; v50 < 100; v50++) {
            }
        }
        const v51 = v30 + 1;
        // v51 = .primitive
        v30 = v51;
    } while (v30 < 8);
    const v52 = v27 + 1;
    // v52 = .primitive
    v27 = v52;
}
const v55 = [1337];
// v55 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v56 = v55;
const v57 = v14(v56);
// v57 = .unknown
const v58 = v14(1024,4.0);
// v58 = .unknown
const v59 = v14(v58,v56);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
