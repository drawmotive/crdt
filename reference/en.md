# CRDT Reference

## Core Concepts

### CRDT Types

- **State-Based (CvRDT)**: Merge complete states
- **Operation-Based (CmRDT)**: Exchange operations/commands

### Basic CRDTs

- **G-Counter**: Grow-only counter
- **PN-Counter**: Positive-negative counter
- **G-Set**: Grow-only set
- **2P-Set**: Two-phase set
- **LWW-Register**: Last-write-wins register

### Properties

- **Commutativity**: Operations can be applied in any order
- **Idempotency**: Operations can be applied multiple times
- **Convergence**: All replicas eventually reach the same state

## Implementation Patterns

### State Merging

```javascript
merge(other) {
  for (const [key, value] of Object.entries(other.state)) {
    this.state[key] = Math.max(this.state[key] || 0, value)
  }
}
```

### Operation Broadcasting

```javascript
broadcast(operation) {
  this.operations.push(operation)
  this.network.send(operation)
}
```

## Best Practices

1. **Choose the right CRDT type** for your use case
2. **Handle network failures** gracefully
3. **Optimize for your specific requirements** (latency vs. consistency)
4. **Test thoroughly** with concurrent operations
5. **Monitor performance** in production
