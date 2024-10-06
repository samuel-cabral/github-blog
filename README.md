# Github Blog

A React-based web application for displaying and interacting with GitHub-related content.

## Technologies Used

- React
- TypeScript
- Vite
- Styled Components
- React Router DOM
- FontAwesome

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- pnpm (preferred package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/github-blog.git
   cd github-blog
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

### Running the Application

To start the development server:

```
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/`: Source code
  - `components/`: Reusable React components
  - `pages/`: Page components
  - `layouts/`: Layout components
  - `styles/`: Global styles and theme definitions
  - `@types/`: TypeScript type definitions
- `public/`: Static assets

## Styling

This project uses Styled Components for styling. The global styles and theme are defined in `src/styles/`.

## Routing

React Router is used for routing. The main routes are defined in `src/Router.tsx`.

## Develop the project

This project is a challenge to create a blog application using GitHub's API. The main features include:

1. Displaying your GitHub profile information (image, number of followers, name, etc.)
2. Listing and filtering issues from a repository with a brief summary of their content
3. Creating a page to display a full post (issue)

To develop this project, you'll need to:

1. Create a public GitHub repository where you'll create issues that will serve as blog posts.
2. Use the following GitHub APIs:
   - [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user)
   - [GitHub Search API](https://docs.github.com/pt/rest/search)
   - [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue)

3. Implement dynamic routing using react-router-dom to display full post pages.
4. Use the `useParams` hook from react-router-dom to fetch specific issue data.
5. Format the markdown content of issues to HTML using a library like [react-markdown](https://github.com/remarkjs/react-markdown).

Note: Be aware of GitHub API rate limits. You can increase your limit by configuring a private key.

Key concepts to remember:

- Fetch / Axios for API calls
- React Router DOM for routing
- Form handling

Follow the provided layout in the attached images for the application's design.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
