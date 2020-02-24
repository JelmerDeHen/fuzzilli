function main() {
const v3 = Symbol.unscopables;
// v3 = .unknown
const v4 = Object[v3];
// v4 = .unknown
try {
    const v5 = Object.defineProperties(isNaN,v4);
    // v5 = .undefined
} catch(v6) {
}
}
%NeverOptimizeFunction(main);
main();
