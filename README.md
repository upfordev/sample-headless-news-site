# Sample Headless News Site

## Overview

This project is a Proof of Concept demonstrating how to connect a headless Arc XP View API with an Astro frontend. It showcases a modern, responsive news website that simulates fetching content from Arc XP's content management system.

## Background

This project was inspired by [this YouTube tutorial](https://www.youtube.com/watch?v=17zY9JcWAbI) and was primarily developed using the Windsurf code editor. The goal was to create a functional prototype that demonstrates how a news organization could leverage Arc XP's headless CMS capabilities with a modern frontend framework like Astro.

## Features

- **Responsive Homepage Layout**: Features a hero section, featured stories grid, and category sections
- **Article Detail Pages**: Dynamic article pages with rich content elements
- **Mock Arc XP View API**: Simulates the Arc XP content API with realistic mock data
- **TypeScript Integration**: Full TypeScript support with interfaces for the ANS content model
- **Flexible URL Structure**: Supports various URL patterns for articles

## Technology Stack

- **[Astro](https://astro.build/)**: Fast, modern static site generator with component islands
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling
- **Arc XP Content Model**: Based on the Arc Native Specification (ANS)

## Key Concepts

### Arc Native Specification (ANS)

This project implements a simplified version of the Arc Native Specification (ANS), which is the content model used by Arc XP. The model includes:

- **Articles**: News stories with headlines, content elements, and metadata
- **Collections**: Groups of articles organized by section or topic
- **Content Elements**: Various types of content like text, images, lists, quotes, and tables

### Mock API Service

The project includes a mock implementation of the Arc XP View API that provides:

- Article retrieval by ID, section, or URL
- Collection retrieval
- Navigation data

In a production environment, these would be replaced with actual API calls to the Arc XP Content API.

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sample-headless-news-site.git
cd sample-headless-news-site

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Future Enhancements

- Integration with actual Arc XP Content API
- Authentication and authorization
- Content personalization
- Search functionality
- Comments and social sharing

## Resources

- [Arc XP Documentation](https://dev.arcxp.com/)
- [Astro Documentation](https://docs.astro.build)
- [ANS Schema Repository](https://github.com/washingtonpost/ans-schema)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
