function main() {
function v11(v12,v13,v14,v15,...v16) {
    for (const v17 in v16) {
    }
}
const v18 = v11(1337);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
