# CRDT for Drawing Documentation Site

This website provides comprehensive technical documentation for implementing Conflict-Free Replicated Data Types (CRDTs) in collaborative drawing tools and real-time diagram editors, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## About CRDTs for Drawing

Conflict-Free Replicated Data Types are data structures that can be replicated across multiple nodes in a distributed system and updated independently without coordination, while ensuring eventual consistency and conflict resolution. In drawing applications, CRDTs enable seamless real-time collaboration where multiple users can draw, edit shapes, and modify diagrams simultaneously without conflicts.

## Site Features

- **Drawing-Specific CRDT Theory**: From basic concepts to advanced patterns for vector graphics and geometric operations
- **Practical Drawing Tool Implementation**: Code examples for shapes, paths, layers, and real-time synchronization
- **Real-Time Drawing Applications**: Collaborative design platforms, diagram editors, and multi-user drawing sessions
- **Performance Optimization**: Best practices for production drawing tools and scalable collaboration
- **Multi-language Support**: Available in English, Chinese, Spanish, French, German, Japanese, Korean, and Portuguese

## Documentation Structure

### Part One: Drawing CRDT Fundamentals
- Introduction to collaborative drawing systems
- Vector graphics synchronization principles
- Geometric conflict resolution strategies
- Core CRDT principles for drawing applications

### Part Two: Drawing Tool Implementation
- State-based CRDTs for shapes and paths
- Operation-based CRDTs for real-time drawing
- Layer management and composition
- Advanced patterns for complex drawing operations

### Part Three: Drawing Applications
- Collaborative design platforms
- Real-time diagram editors
- Multi-user drawing sessions
- Production deployment strategies for drawing tools

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Site Information

- **URL**: https://crdt.drawmotive.com
- **Repository**: https://github.com/drawmotive/crdt
- **Focus**: Technical documentation for implementing CRDTs in collaborative drawing tools and real-time design applications
- **Technology**: Built with Docusaurus 3.7.0

## Contributing

This documentation is open source. Feel free to contribute by:
- Reporting issues
- Suggesting improvements
- Submitting pull requests
- Adding new drawing-specific examples or use cases
- Contributing code examples for drawing tool implementations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
