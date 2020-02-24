function main() {
const v1 = {valueOf:"string"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
function v2(v3,v4) {
    for (let v9 = 0; v9 < 100; v9++) {
        const v11 = "boolean".lastIndexOf(v9,1);
        // v11 = .integer
        const v12 = v11 * v9;
        // v12 = .number
    }
}
let v13 = v1;
const v14 = v2(v13);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
