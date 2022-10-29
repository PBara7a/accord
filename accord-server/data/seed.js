const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");
const { v4: uuidv4 } = require("uuid");

// Set up namespaces
const namespaces = [];

const csgoNs = new Namespace(
  uuidv4(),
  "CS:GO",
  "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1641233427",
  "/csgo"
);

const bunsenHoneyNs = new Namespace(
  uuidv4(),
  "Dr. Bunsen Honeydew",
  "https://upload.wikimedia.org/wikipedia/en/d/dd/Dr._Bunsen_Honeydew.jpg",
  "/melons"
);

const reactNs = new Namespace(
  uuidv4(),
  "React",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  "/react"
);

namespaces.push(csgoNs, bunsenHoneyNs, reactNs);

// Set up rooms
csgoNs.addRoom(new Room(uuidv4(), "General", "CS:GO"));
csgoNs.addRoom(new Room(uuidv4(), "Terrorists", "CS:GO"));
csgoNs.addRoom(new Room(uuidv4(), "Counter-Terrorists", "CS:GO"));

bunsenHoneyNs.addRoom(new Room(uuidv4(), "General", "Dr. Bunsen Honeydew"));
bunsenHoneyNs.addRoom(new Room(uuidv4(), "Gif-Wars", "Dr. Bunsen Honeydew"));

reactNs.addRoom(new Room(uuidv4(), "General", "React"));
reactNs.addRoom(new Room(uuidv4(), "Foo", "React"));
reactNs.addRoom(new Room(uuidv4(), "Bar", "React"));

module.exports = namespaces;
