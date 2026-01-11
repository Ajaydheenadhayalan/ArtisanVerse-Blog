# ArtisanVerse - React Blog Website

**ArtisanVerse** is a modern, responsive blog website dedicated to empowering traditional artisans through technology. It is built using **React**, **Vite**, and **Tailwind CSS**, featuring a clean UI, dark mode support, and seamless navigation.

## 🚀 Technologies Used

-   **Framework**: [React](https://react.dev/) (v18+)
-   **Build Tool**: [Vite](https://vitejs.dev/) (Fast & Lightweight)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
-   **Routing**: [React Router DOM](https://reactrouter.com/) (Client-side routing)
-   **Icons**: [Lucide React](https://lucide.dev/) (Beautiful & consistent icons)
-   **Typography**: `@tailwindcss/typography` plugin for beautiful prose styling.

## 📂 Project Structure

```
Blog Website/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Images and global static files
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx       # Responsive navigation with Dark Mode toggle
│   │   ├── Footer.jsx       # Site footer
│   │   ├── HeroSection.jsx  # Landing page hero
│   │   └── BlogCard.jsx     # Card component for post previews
│   ├── data/            # Mock data (posts.js)
│   ├── hooks/           # Custom hooks (useTheme.js)
│   ├── layouts/         # Layout wrappers (MainLayout.jsx)
│   ├── pages/           # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── BlogListing.jsx  # Searchable blog list
│   │   ├── BlogDetail.jsx   # Individual blog post view
│   │   └── About.jsx        # About Us page
│   ├── App.jsx          # Main application component & Routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML entry point
├── package.json         # Dependencies & scripts
├── tailwind.config.js   # Tailwind Configuration
├── postcss.config.js    # PostCSS Configuration
└── vite.config.js       # Vite Configuration
```

## ✨ Key Features

1.  **Modern Design**:
    *   Clean, professional aesthetic using an Amber/Orange color palette suitable for an "Artisan" theme.
    *   Fully responsive layout for Mobile, Tablet, and Desktop.
    *   Glassmorphism effects on the Navbar.

2.  **Dark Mode**:
    *   Built-in dark mode support that persists via `localStorage`.
    *   Seamless transition between Light and Dark themes.

3.  **Blog Functionality**:
    *   **Listing**: Grid layout of blog posts with search functionality.
    *   **Detail View**: Full-page article view with author info, reading time, and rich text formatting (via Tailwind Typography).
    *   **Search**: Filter articles by title, category, or content.

4.  **Routing**:
    *   SPA (Single Page Application) navigation using React Router.
    *   Dynamic routing for individual blog posts (`/blog/:id`).

## 🛠️ Setup & Workflow

Follow these steps to set up and run the project locally.

### Prerequisites
-   Node.js (v16 or higher)
-   npm (or yarn/pnpm)

### Installation

1.  **Clone the repository** (or navigate to the project folder):
    ```bash
    cd "Blog Website"
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Development

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```
The output will be in the `dist/` folder, ready for deployment.

### Linting

To check for code quality issues:

```bash
npm run lint
```

## 🎨 Customization

-   **Colors**: Edit `tailwind.config.js` or change the color classes (e.g., `text-amber-600`) in the components.
-   **Content**: Update `src/data/posts.js` to add or modify blog posts.
-   **Logo**: Update the text in `src/components/Navbar.jsx`.

## 📜 License

This project is open-source and available for educational and personal use.
