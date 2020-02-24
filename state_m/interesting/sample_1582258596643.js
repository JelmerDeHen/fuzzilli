function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v13 = 0;
            const v14 = v9 << v13;
            // v14 = .integer
            const v15 = v13 + 1;
            // v15 = .primitive
            v13 = v15;
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
            } while (v17 < 7);
            const v19 = v9 + 1;
            // v19 = .primitive
            v9 = v19;
        } while (v9 < 8);
    }
}
let v23 = 0;
let v26 = 0;
const v27 = v2(v1);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
