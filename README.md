# My Recipe Box

A personal recipe collection

## 🚀 Project Structure

```text
recipes/
├── public/           # Static assets (images)
├── src/
│   ├── content/
│   │   ├── config.ts    # Content collection schema
│   │   └── recipes/     # Recipe markdown files
│   ├── layouts/
│   │   └── RecipeLayout.astro
│   └── pages/
│       ├── index.astro      # Homepage with recipe grid
│       └── recipes/
│           └── [slug].astro # Dynamic recipe pages
└── package.json
```

## 🧑‍🍳 Adding Recipes

Recipes are stored as markdown files in `src/content/recipes/`. Each recipe includes:

```yaml
---
title: "Recipe Name"
description: "Brief description"
servings: 4
prepTime: 15  # minutes
cookTime: 30  # minutes
categories: ["dinner", "italian"]
difficulty: "easy"  # easy, medium, or hard
cuisine: "Italian"
image: "/recipe-image.jpg"  # optional
---

## Ingredients
- List ingredients here

## Steps
1. Step-by-step instructions
```

## 🧞 Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally                  |

## 🎯 Roadmap

- [x] Basic Astro setup
- [x] Recipe content collections
- [x] Mobile-responsive design
- [x] Recipe migration
- [x] Tailwind CSS styling
- [ ] Search functionality (Pagefind)
- [ ] Category filtering
- [ ] Recipe submission form
- [ ] GitHub Actions deployment
- [ ] Print-friendly views

## 🚀 Getting Started

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:4321

## 📝 License

This is a personal project for managing family recipes.
