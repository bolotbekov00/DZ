const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

const tagCounts = {};

for (const tag of tags) {
    if (tagCounts[tag]) {
        tagCounts[tag] += 1;
    } else {
        tagCounts[tag] = 1;
    }
}

console.log(tagCounts);

