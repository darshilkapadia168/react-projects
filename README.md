# 🧠 React Projects – Practice React Concepts

This repository is a collection of my React practice projects where I explore and apply different React concepts through small, focused applications. Each mini project is designed to help me strengthen my understanding of React fundamentals, UI structure, and modern design patterns.

---

## 🚀 Projects Overview

### 1️⃣ Mini Project – *Understanding Props*
In this project, I practiced the **concept of props** — how to pass data from one component to another.  
This helped me understand how React handles one-way data flow and reusable components.

**Concepts Used:**  
- Props  
- Component reusability  
- Dynamic rendering  

---

### 2️⃣ UI Project – *Components & Atomic Design*
This project focuses on building UI components using the **Atomic and Featuristic Design** approach.  
I learned how to break down a UI into smaller, reusable parts for better scalability and maintainability.

**Concepts Used:**  
- Component-based architecture  
- Atomic design structure (Atoms, Molecules, Organisms)  
- Reusable UI patterns  

---

### 3️⃣ Notes App – *Working with Hooks*
In this app, I explored **React Hooks**, especially `useState`, to manage and update data dynamically.  
It’s a simple notes-taking application where users can **add notes with a title and details**, and also **delete notes** when no longer needed.

**Concepts Used:**  
- `useState` Hook for state management  
- Handling user input  
- Rendering list of notes dynamically  
- Add and delete functionality  

---

### 4️⃣ Docs Mini App – *Props + Animations with Framer Motion*
This project combines **Props** and **Framer Motion** — an animation library for React.  
I learned how to animate components and make them **draggable** with smooth transitions.

**Concepts Used:**  
- Props  
- Framer Motion (React animation library)  
- Drag and drop interactions  
- Motion transitions  

---

### 5️⃣ Gallery Project – *useEffect + API Integration*
In this project, I practiced using **React Hooks (`useState`, `useEffect`)** along with **Axios** to fetch data from an external API.  
It displays images from the **Picsum API** with pagination using "Prev" and "Next" buttons.

**Concepts Used:**  
- `useState` and `useEffect` Hooks  
- Fetching data using **Axios**  
- Conditional rendering (loading state)  
- Pagination logic  
- Component composition (Card component)

**Core Logic Example:**
```javascript
useEffect(() => {
  getData()
}, [Index])
