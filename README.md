# Pokedex pet project
> #### Template: Microservices dashboard by Lomray Software

<details>
  <summary>Documentation</summary>
  
  Install it and run (development):

```bash
npm ci
npm start
```

## Structure
- `constants/index` - configure application constants
- `constants/menu` - configure site menu
- `constants/routes` - configure site routes

## SSR (isomorphic, root: @server/document) - current
```bash
npm run build
npm run start:prod
```

## SPA (root: ./src/index.html)
```bash
npm run build:spa
serve -s build/public
```

## SSG (root: each .html in build/public)
```typescript
/**
 * NOTE: Please uncomment lines with ssg comment in:
 * @see asyncRouteComponentWrapper
 */
```
```bash
npm run build
serve build/public
```
</details>


