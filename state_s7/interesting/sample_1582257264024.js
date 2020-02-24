function main() {
let v3 = 0;
while (v3 < 8) {
    const v4 = v3 + 1;
    // v4 = .primitive
    v3 = v4;
    Reflect.constructor = NaN;
}
}
%NeverOptimizeFunction(main);
main();
