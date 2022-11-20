# A Discord clone built with React, Node and Socket.io

... IN PROGRESS ...

## Table of contents

1. [Overview](#overview)
2. [Learning Objectives](#objectives)
3. [Process](#process)
4. [Next Steps](#next-steps)

<a id="overview"></a>

## 1. Overview

Repetition is key to learning, so I am building my second messaging app

The teck stack for this build is: React, Redux, Node, Express, Socket.io, Passport, MongoDB, Material UI

- Login with Firebase authentication
- Users can connect to different namespaces (discord servers) and join rooms (discord channels)
- Messages are sent and received in real-time
- Persistent data stored in Firebase storage

<a id="objectives"></a>

## 2. Learning Objectives

- Gain a better understanding of Socket.io: introduction to namespaces
- Implement authentication using existing libraries
- Basics of Redux: first introduction
- Store data in a non-relational database, I'll use Firebase. So far I have been using Prisma/PostgreSQL for all my projects with a DB requirement, I want to see what are the main differences

<a id="process"></a>

## 3. Process

- FE: Designed the UI with placeholder data
- FE: Added a socket client that can be reused by components
- BE: Created Namespace and Room classes and instatiated a few in a seed file (replace later with a DB)
- BE: Created the server Socket and confirmed the connection from the client socket to the main namespace ("/")
- FE: Created a redux store
- BE/FE: Sent namespaces data on connection to the main namespace, stored it on redux store and used this data to replace placeholders on the servers sidebar
- FE: Added the functionality to connect to different namespaces, receive the data specific to that namespace (title, rooms) and replace the channels sidebar placeholders
- <span style="background: yellow; color: black;"><strong>Problem:</strong></span> When joining a different namespace, I am opening a new client socket. Because this socket will not be the same throughout time I had to think about a different way to store and share this connection between components. I thought I could store it in my redux store, but found out that only serializable data should be stored in it. Found some articles suggesting to set this up with the help of middleware functions but couldn't grasp the explanations/code fully. My solution was to create a socket manager component to keep the sockets state and mount event listeners, then share the sockets with components using React's Context API. I plan to refactor this when I understand how to set it up with middleware.
- FE/BE: Updated the headers of the channels sidebar and main to show the current server and channel the user is connected to
- FE/BE: Added the functionality to send messages to the server, emit them to all clients and update their UIs
- FE/BE: Started sending the room history when a user joins a room, this was we have access to the messages sent before joining
- FE/BE: The user count in each channel is updated every time a user enters or leaves the channel
- FE: Added the functionality to filter messages by its text
- FE/BE: User can login with their google account. Replaced hardcoded username and avatar
- FE: Changed the authentication process. Using Firebase services now with Google and GitHub login enabled

<a id="next-steps"></a>

## 4. Next Steps

- Connect to Firebase storage and store messages permanently. Currently they are stored in memory only: the history property of Room classes and Redux
- User added servers/channels
- Improve the looks of the app (not a priority)
- Add voice channels
- Integrate with Tenor API, to allow users to share some GIFs
