# How to Add Project Images

1. **Add your image files** to the `public/projects/` directory
   - Supported formats: `.jpg`, `.png`, `.webp`, `.svg`
   - Recommended size: 16:9 aspect ratio (e.g., 800x450px)
   - Keep file sizes under 500KB for best performance

2. **Update your project** in `content/projects.md`:
   ```yaml
   - title: "My Awesome Project"
     description: "Description of the project"
     technologies: ["React", "TypeScript"]
     githubUrl: "https://github.com/username/project"
     liveUrl: "https://project.vercel.app"
     image: "/projects/my-project.jpg"  # <- Add this line
   ```

3. **File naming suggestions**:
   - Use lowercase and hyphens: `my-project.jpg`
   - Be descriptive: `portfolio-website.png`
   - Match your project title: `todo-app.jpg`

4. **If no image is available**:
   - Simply omit the `image` field or set it to `null`
   - A placeholder will be shown automatically

## Example Directory Structure
```
public/
  projects/
    portfolio-website.jpg
    todo-app.png
    ecommerce-store.webp
```
