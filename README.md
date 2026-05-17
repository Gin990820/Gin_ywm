# Personal Academic Homepage

A clean static academic homepage for GitHub Pages. It includes:

- Profile hero with title, photo, and quick facts
- About section and basic personal information
- Research interests
- Selected papers
- Education and experience timeline
- Contact links

## Edit Your Information

Most page content lives in [`app.js`](app.js). Update the `siteData` object to change your name, title, bio, links, papers, timeline, and contact information.

To use a real photo, place your image in the `assets` folder, for example:

```text
assets/profile.jpg
```

Then update this line in `app.js`:

```js
photo: "assets/profile.jpg",
```

## Preview

Open [`index.html`](index.html) in your browser. No build step is required.

## Deploy With GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set the source to the main branch and the root folder.
4. Save, then wait for GitHub Pages to publish the site.
