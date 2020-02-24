function main() {
let v64 = 0;
while (v64 < 0) {
    continue;
}
}
%NeverOptimizeFunction(main);
main();
