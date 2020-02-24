function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v9 = {e:13.37,d:"d"};
        // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
        const v10 = {e:v9,d:1337};
        // v10 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
        let v11 = v10;
        let v15 = "symbol";
        const v16 = {isExtensible:Array,ownKeys:v15};
        // v16 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["isExtensible"])
        let v17 = "boolean";
        const v18 = v17[3];
        // v18 = .unknown
        let v19 = 13.37;
        if (v18) {
            v19 = v11;
        } else {
        }
        let v20 = 0;
        const v23 = eval(1337);
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        let v26 = 0;
        do {
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                v29 = v30;
            } while (v29 < 7);
            const v31 = v26 + 1;
            // v31 = .primitive
            v26 = v31;
        } while (v26 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
