import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
    {
      id: 3,
      title: "What do you call a bear with no teeth?",
      content: "A gummy bear!",
    },
    {
      id: 4,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems!",
    },
    {
      id: 5,
      title: "How does a penguin build its house?",
      content: "Igloos it together!",
    },
  ];
  res.send(jokes);
  console.log(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
