function main() {
let v2 = 0;
do {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    const v7 = {};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v10 = Object.freeze(v7);
    // v10 = .undefined
    const v11 = v2 + 1;
    // v11 = .primitive
    v2 = v11;
} while (v2 < 8);
}
%NeverOptimizeFunction(main);
main();
