# BankDB Manager

A web application for managing a banking system database.  
The project is built with **Node.js (Express) + PostgreSQL + React** and provides an extended set of tools for working with tables, fields, data, transactions, backups, and predefined SQL queries.

---

## ✨ Features

### 🔧 Database Table Management

- View the list of existing tables
- Create new tables
- Delete tables
- Add new fields (columns)
- Modify field properties
- Remove fields

### 📋 Data Management (CRUD)

- Browse table rows with pagination
- Insert new records
- Edit existing records
- Delete records
- Automatic field type detection based on PostgreSQL metadata

### 🔄 Banking Transactions

- Perform money transfers between accounts
- Balance validation
- Atomic operations
- Transaction history logging in the `transactions` table

### 📁 Data Export

- Export any table to **.xlsx**
- Export results of predefined SQL queries
- Local file saving

### 💾 Backup & Restore System

- Full database backup
- Backup of individual tables
- Restore database from backup files
- Restore single tables

### 🧩 SQL Query Management (for Lab 5–6)

- View predefined SQL queries
- Execute queries from the UI
- Save custom SQL queries
- Display results in a table
- Export query results to Excel

### 🖥 Admin Interface

- Browse entities (clients, accounts, employees, branches, transactions)
- Edit any table without writing SQL
- Notification system for operation results

---

## 🏗 Technology Stack

### Backend:

- **Node.js**
- **Express**
- **PostgreSQL**
- **pg / pg-pool**
- **xlsx** (Excel export)
- **fs-extra**
- **dotenv**

### Frontend:

- **React**
- **Axios**
- **React Router**
- **Material UI** (optional)

---
