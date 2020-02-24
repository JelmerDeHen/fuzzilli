function main() {
Object.prototype = "length";
}
%NeverOptimizeFunction(main);
main();
