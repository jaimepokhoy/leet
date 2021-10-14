const asteroidCollision = asteroids => {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const a = asteroids[i];

        if ((!stack.length || stack[stack.length - 1]) && a < 0) {
            stack.push(a);
        } else if (a > 0) {
            stack.push(a)
        } else {
            const pop = stack.pop();

            if (Math.abs(pop) > Math.abs(a)) {
                stack.push(pop);
            } else if (Math.abs(pop) < Math.abs(a)) {
                i--;
            } else {
                continue;
            }
        }
    }

    return stack;
}