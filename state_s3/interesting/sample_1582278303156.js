function main() {
const v2 = Symbol.unscopables;
// v2 = .unknown
const v3 = Object[v2];
// v3 = .unknown
try {
    const v6 = Object.defineProperties("replace",v3);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
