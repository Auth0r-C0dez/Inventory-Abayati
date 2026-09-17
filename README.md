# Branch Inventory Management System

A MERN-stack inventory management system designed for businesses with a main store and multiple branches.

## Project Overview

The system manages inventory distribution from a main store to multiple branches while providing role-based access for administrators and cashiers.

### Hierarchy

```text
Main Admin
    │
    ├── Branch Admin
    │      ├── Cashier
    │      └── Cashier
    │
    ├── Branch Admin
    │      ├── Cashier
    │      └── Cashier
    │
    └── Branch Admin
           └── Cashier
```

## Features

* Main store inventory management
* Multiple branch management
* Stock transfers between main store and branches
* Product management
* Branch-wise inventory tracking
* Sales and billing
* Role-based authentication and authorization
* User management
* Inventory history
* Sales history
* Audit logs
* Branch-wise reports

## User Roles

### Main Admin

* Complete system access
* Manage branches
* Manage users
* Manage products
* Manage main inventory
* Transfer inventory to branches
* View all branch inventory
* View all sales and reports
* Manage user credentials

### Branch Admin

* Access only their assigned branch
* Manage branch inventory
* View branch sales
* Manage branch operations
* View assigned cashiers

### Cashier

* Access assigned branch
* Process sales
* View available branch inventory
* Manage billing/sales transactions

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT
* bcrypt
* Role-Based Access Control

## Project Structure

```text
branch-inventory/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
├── PROJECT_PLAN.md
├── README.md
└── .gitignore
```

## Core Modules

```text
Authentication
      ↓
User Management
      ↓
Branch Management
      ↓
Product Management
      ↓
Inventory Management
      ↓
Stock Transfers
      ↓
Sales & Billing
      ↓
Reports & Audit Logs
```

## Inventory Flow

```text
                MAIN STORE
                    │
                    │
              Stock Transfer
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Branch A    Branch B    Branch C
        │           │           │
        ↓           ↓           ↓
      Sales       Sales       Sales
        │           │           │
        └───────────┼───────────┘
                    ↓
             Inventory Update
```

## Development Status

* [x] Project planning
* [x] MERN project structure
* [x] Express server setup
* [ ] MongoDB connection
* [ ] Database models
* [ ] Authentication
* [ ] Role-based authorization
* [ ] Branch management
* [ ] Product management
* [ ] Inventory management
* [ ] Stock transfers
* [ ] Sales and billing
* [ ] Reports
* [ ] Audit logs
* [ ] Frontend integration
* [ ] Testing
* [ ] Deployment

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd branch-inventory
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

## Running the Project

### Frontend

```bash
cd client
npm run dev
```

### Backend

```bash
cd server
node index.js
```

## Environment Variables

Environment variables will be added as the project develops.

Example:

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

## Future Improvements

* Low-stock notifications
* Advanced inventory analytics
* Sales dashboards
* Export reports
* Barcode scanning
* Product search and filtering
* Automated stock alerts
* Cloud deployment

## License

This project is being developed as a personal learning and portfolio project.
