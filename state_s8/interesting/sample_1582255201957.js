function main() {
const v3 = Symbol.unscopables;
// v3 = .unknown
const v4 = Object[v3];
// v4 = .unknown
for (const v8 in "object") {
    for (const v10 in "replace") {
    }
}
try {
    v4.length = 1337;
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
