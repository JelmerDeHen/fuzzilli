function main() {
try {
    const v4 = DataView("boolean",8,1337);
    // v4 = .unknown
} catch(v5) {
}
const v7 = gc();
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
