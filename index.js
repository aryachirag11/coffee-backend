require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const githubData = {
  login: "aryachirag11",
  id: 88162504,
  node_id: "MDQ6VXNlcjg4MTYyNTA0",
  avatar_url: "https://avatars.githubusercontent.com/u/88162504?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/aryachirag11",
  html_url: "https://github.com/aryachirag11",
  followers_url: "https://api.github.com/users/aryachirag11/followers",
  following_url:
    "https://api.github.com/users/aryachirag11/following{/other_user}",
  gists_url: "https://api.github.com/users/aryachirag11/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/aryachirag11/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/aryachirag11/subscriptions",
  organizations_url: "https://api.github.com/users/aryachirag11/orgs",
  repos_url: "https://api.github.com/users/aryachirag11/repos",
  events_url: "https://api.github.com/users/aryachirag11/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/aryachirag11/received_events",
  type: "User",
  site_admin: false,
  name: "Chirag Arya",
  company: "Student",
  blog: "https://aryachirag11.github.io/",
  location: "Rohtak,Haryana, India",
  email: null,
  hireable: null,
  bio: "👋 Hello, I'm Chirag\r\n\r\n🎓 Final Year Computer Science Major\r\n🚀 Aspiring MERN Stack Developer\r\n💡 Problem Solver on LeetCode\r\n🌐 Passionate about Frontend",
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-07-29T19:12:53Z",
  updated_at: "2024-02-14T06:07:47Z",
};
app.get("/", (req, res) => {
  res.send("Hello ji, coffee le lo ji");
});
app.get("/instagram", (req, res) => {
  res.send("Hello ji, Welcome to instagram");
});
app.get("/login", (req, res) => {
  res.send("<h1>Chirag Arya(aryachira11): logged in</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Coffee aur code</h2>");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(port, () => {
  console.log(`MyApp is listening on port ${port}`);
});
