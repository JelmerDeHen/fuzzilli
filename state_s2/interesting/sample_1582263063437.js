function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            for (const v11 of "pvU0UUjoya") {
            }
            const v12 = v9 + 1;
            // v12 = .primitive
            v9 = v12;
        } while (v9 < 8);
    }
    const v14 = "boolean" * "boolean";
    // v14 = .number
    const v15 = 1337 & v14;
    // v15 = .integer
}
let v17 = Infinity;
const v18 = v2(v17);
// v18 = .unknown
const v19 = v2(1024,4.0);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
