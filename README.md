# CRDT Documentation Site

This website provides comprehensive technical documentation for Conflict-Free Replicated Data Types (CRDTs), built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## About CRDTs

Conflict-Free Replicated Data Types are data structures that can be replicated across multiple nodes in a distributed system and updated independently without coordination, while ensuring eventual consistency and conflict resolution.

## Site Features

- **Comprehensive CRDT Theory**: From basic concepts to advanced patterns
- **Practical Implementation**: Code examples in JavaScript/TypeScript
- **Real-World Applications**: Collaborative editing, distributed databases, real-time systems
- **Performance Optimization**: Best practices for production deployment
- **Multi-language Support**: Available in English, Chinese, Spanish, French, German, Japanese, Korean, and Portuguese

## Documentation Structure

### Part One: CRDT Fundamentals
- Introduction to distributed systems
- Consistency models and trade-offs
- Core CRDT principles and properties

### Part Two: CRDT Implementation
- State-based CRDTs (CvRDTs)
- Operation-based CRDTs (CmRDTs)
- Advanced patterns and optimizations

### Part Three: CRDT Applications
- Collaborative editing systems
- Distributed database integration
- Real-time synchronization
- Production deployment strategies

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
- **Focus**: Technical documentation for CRDT theory, implementation, and applications
- **Technology**: Built with Docusaurus 3.7.0

## Contributing

This documentation is open source. Feel free to contribute by:
- Reporting issues
- Suggesting improvements
- Submitting pull requests
- Adding new examples or use cases

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
