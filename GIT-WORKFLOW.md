# Git Workflow — Read Before You Start

## The Basic Rule
The main branch is the official, clean version of the project.
No one is allowed to push directly to main.
Everyone must work on their own branch, then request a merge through a Pull Request.

## Steps to Follow

### 1. Clone the project (only once)
git clone <repo-link>
cd <folder-name>
npm install

### 2. Before starting any new task
git checkout main
git pull origin main

### 3. Create a new branch for your task
git checkout -b feature/task-name

Examples: feature/products-page, feature/orders-page, feature/cart-page, feature/login-page

### 4. Work on your code normally

### 5. Save your work
git add .
git commit -m "Short, clear description of what you did"

### 6. Push your branch (NOT main!)
git push -u origin feature/task-name

### 7. Open a Pull Request
Go to the repository page on GitHub, click "Compare & pull request",
write a short description, click "Create pull request",
and wait for the Team Lead to review and approve.

## Important Rules
- Never work directly on main
- One task = one branch
- Commit messages must be clear
- Always run git pull origin main before starting a new branch
- If you hit a conflict, tell the Team Lead

## If you're stuck
Ask the Team Lead before running any command you're not sure about.
