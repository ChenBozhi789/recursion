function hanoi(n, src, des, aux) {
    if (n < 1) {
        throw "Invalid parameter: n must >= 1";
    }

    if (n == 1) {
        console.log(" From " + src + " to " + des);
        return;
    }

    if (n > 1) {
        hanoi(n-1, src, aux, des);
        console.log(" From " + src + " to " + des);
        hanoi(n-1, aux, des, src);
    }
}

hanoi(1, "A", "C", "B");
console.log("------------");
hanoi(2, "A", "C", "B");
console.log("------------");
hanoi(3, "A", "C", "B");
console.log("------------");
hanoi(4, "A", "C", "B");