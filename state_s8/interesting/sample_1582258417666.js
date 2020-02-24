function main() {
let v8 = 0;
let v11 = 0;
let v13 = undefined;
Math.valueOf = v13;
Math[1337] = -1047157526;
}
%NeverOptimizeFunction(main);
main();
