/**
 * @title :Inspect Nested Object
 */

const js = {
  name: "Javascript: All You Need To Know",
  author: {
    name: "Nayem",
    email: "nayem@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
  },
};

const node = {
  name: "Dive into NodeJS",
  author: {
    name: "Nayem",
    email: "nayem@gmail.com",
  },
  contents: {
    video: {
      count: 234,
    },
  },
};

const react = {
  name: "Understand React Core Features",
  author: {
    name: "Nayem",
    email: "nayem@gmail.com",
  },
  contents: {
    video: {
      count: 234,
    },
    article: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};

const inspectArticle = (course) => {
  const path = "contents.article.count";
  return path.split(".").reduce((acc, field) => {
    if (acc) {
      return acc[field];
    }
    return 0;
  }, course);
};

const courses = [js, node, react];
courses.forEach((course) => {
  console.log(`${course.name} has - Article: ${inspectArticle(course)}`);
});
