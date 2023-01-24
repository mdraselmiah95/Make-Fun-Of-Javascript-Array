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

const inspectObj = (obj, path, returnValue = 0) => {
  return path.split(".").reduce((acc, field) => {
    if (acc) {
      return acc[field];
    }
    return returnValue;
  }, obj);
};

const courses = [js, node, react];
courses.forEach((course) => {
  //   console.log(
  //     `${course.name} has - Article: ${inspectObj(
  //       course,
  //       "contents.article.count"
  //     )}`
  //   );
});

courses.forEach((course) => {
  const countVideo = inspectObj(course, "contents.video.count");
  const countArticle = inspectObj(course, "contents.article.count");
  const countQuiz = inspectObj(course, "contents.quiz.count");

  console.log(
    `Total Video= ${countVideo}, Article= ${countArticle}, and Quiz= ${countQuiz}`
  );
});
