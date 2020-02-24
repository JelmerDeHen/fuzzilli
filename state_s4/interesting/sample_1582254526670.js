function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
let v12 = 0;
do {
    const v13 = Function("string");
    // v13 = .unknown
    const v14 = v13 + 1;
    // v14 = .primitive
    v12 = v14;
} while (v12 < 10);
}
%NeverOptimizeFunction(main);
main();
