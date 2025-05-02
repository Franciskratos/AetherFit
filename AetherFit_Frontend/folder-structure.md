# 📁 Folder Structure

This document outlines the folder structure to be followed across the project. It promotes a consistent and scalable organization for shared and feature-specific code.

---

## 🧩 APP

src/

└── app/ # Main app of the project

---

## ♻️ SHARED

Shared modules are placed under `src/` and are available throughout the entire project.

src/

├── assets/ # Static files (e.g. images, fonts) shared across the project

├── components/ # Reusable UI components scoped to the entire project

├── hooks/ # Custom React hooks shared across the project

├── lib/ # Utility libraries and core logic shared across the project

├── types/ # Global TypeScript type definitions

└── utils/ # Shared utility functions

---

## 🧱 FEATURE-SPECIFIC

Each feature lives under `src/features/{feature-name}` and is self-contained.

src/features/{feature-name}/

├── api/ # API requests and related hooks for the feature

├── assets/ # Static files used specifically in this feature

├── components/ # UI components scoped to this feature

├── hooks/ # Custom hooks used only within this feature

├── stores/ # State management (e.g. Zustand, Redux slices) for the feature

├── types/ # TypeScript types used exclusively in this feature

└── utils/ # Utility functions specific to this feature

This structure promotes separation of concerns and improves maintainability as the project grows
