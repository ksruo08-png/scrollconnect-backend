# NestJS Students CRUD API

A simple NestJS backend demonstrating **Controllers, Services & CRUD basics**.

This project implements a basic Students resource with full CRUD operations using NestJS modules, controllers, and services.

## Features

- ✅ Get all students (`GET /students`)
- ✅ Get a single student by ID (`GET /students/:id`)
- ✅ Create a student (`POST /students`)
- ✅ Update a student (`PUT /students/:id`)
- ✅ Delete a student (`DELETE /students/:id`)
- ✅ In-memory data storage (for learning purposes)
- ✅ Proper HTTP status codes (`201 Created`, `200 OK`, etc.)
- ✅ Tested with Thunder Client / Postman

## Tech Stack

- **NestJS** – Progressive Node.js framework
- **TypeScript**
- **Thunder Client** (or Postman) for API testing

## Project Structure
src/
├── students/
│ ├── students.controller.ts
│ ├── students.service.ts
│ ├── students.module.ts
│ └── students.controller.spec.ts
├── app.controller.ts
├── app.module.ts
└── main.ts


## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd scrollconnect-backend   # or your project folder name

# Install dependencies
npm install
Running the Application
Bash
# Development mode
npm run start:dev
The server will start at:
[localhost](http://localhost:3000/)

API Endpoints:

Method	Endpoint	Description	Status
GET	/students	Get all students	200
GET	/students/:id	Get a student by ID	200
POST	/students	Create a new student	201
PUT	/students/:id	Update an existing student	200
DELETE	/students/:id	Delete a student	200


Example Requests:

1. Get Student by ID
GET http://localhost:3000/students/1

2. Create a Student
POST http://localhost:3000/students

JSON
{
  "name": "Srushti",
  "email": "srushti@example.com"
}
3. Update a Student
PUT http://localhost:3000/students/1

JSON
{
  "name": "Srushti Kadam",
  "email": "srushti.kadam@example.com"
}
4. Delete a Student
DELETE http://localhost:3000/students/1

Testing Evidence (Screenshots)
All endpoints were successfully tested using Thunder Client.

Method	Endpoint	      Status	      

GET	    /students/:id	  200 OK	
POST	  /students	      201 Created	
PUT	    /students/:id	  200 OK	
DELETE	/students/:id	  200 OK	
Note: Make sure your screenshot file names match the names used above (get-all.png, create-student.png, etc.). If your file names are different, just update the names in the README.

Learning Objectives Covered:

NestJS project initialization
Understanding Modules, Controllers & Services
Creating a resource module (Students)
Implementing basic GET and POST endpoints
Moving business logic into a Service
Connecting Service with Controller
Testing APIs with Thunder Client
Exploring PUT and DELETE endpoints


Documentation:

Official NestJS Docs: [docs.nestjs.com](https://docs.nestjs.com/)
Backend Team Task – NestJS Controllers, Services & CRUD Basics
Made with ❤️ using NestJS
---