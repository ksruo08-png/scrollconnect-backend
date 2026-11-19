NestJS Students CRUD API

A simple NestJS backend project demonstrating basic CRUD operations using Controllers, Services, and Modules.

Features:

- Get a student by ID
- Create a student
- Update a student
- Delete a student
- In-memory data storage
- Proper HTTP status codes

Tech Stack:

- NestJS
- Node.js
- TypeScript
- Thunder Client

Installation:

git clone https://github.com/ksruo08-png/scrollconnect-backend.git
cd scrollconnect-backend
npm install

Run the Project:

npm run start:dev

Server runs at: "http://localhost:3000"

API Endpoints:

Method| Endpoint| Description
GET| /students| Get all students
GET| /students/:id| Get student by ID
POST| /students| Create student
PUT| /students/:id| Update student
DELETE| /students/:id| Delete student

Testing:

All endpoints were tested using Thunder Client.

Learning Objectives:

- Understanding NestJS architecture
- Working with Controllers, Services and Modules
- Implementing CRUD operations
- Testing REST APIs