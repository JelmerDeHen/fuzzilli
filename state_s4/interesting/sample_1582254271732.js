function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "object") {
    let v8 = 0;
    while (v8 < 9) {
        const v12 = v8 + 1;
        // v12 = .primitive
        v8 = v12;
    }
    let v17 = "string";
    const v19 = (0.0)[v17];
    // v19 = .unknown
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
}
}
%NeverOptimizeFunction(main);
main();
