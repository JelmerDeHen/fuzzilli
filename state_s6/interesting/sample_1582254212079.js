function main() {
let v3 = 0;
do {
    function v4(v5,v6,v7,v8,v9) {
    }
    const v10 = v4 + 1;
    // v10 = .primitive
    v3 = v10;
} while (v3 < 7);
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
let v17 = 0;
const v18 = 13.37 + 1;
// v18 = .primitive
v17 = v18;
}
%NeverOptimizeFunction(main);
main();
