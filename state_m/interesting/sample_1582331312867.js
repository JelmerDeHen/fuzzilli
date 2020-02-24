function main() {
const v2 = {e:13.37,d:"__proto__"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v3(v4,v5) {
    let v9 = -128;
    while (v9 < 5) {
        const v10 = v2 === 0;
        // v10 = .boolean
        const v11 = v9 + 1;
        // v11 = .primitive
        const v12 = v10 << v11;
        // v12 = .integer
        const v13 = "__proto__" & v12;
        // v13 = .integer
        v9 = v11;
    }
}
let v14 = "__proto__";
const v15 = v3(v14);
// v15 = .unknown
let v18 = -128;
}
%NeverOptimizeFunction(main);
main();
