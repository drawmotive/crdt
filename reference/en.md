# CRDT for Drawing Reference

## Core Concepts for Drawing Applications

### Drawing CRDT Types

- **State-Based (CvRDT)**: Merge complete drawing states
- **Operation-Based (CmRDT)**: Exchange drawing operations/commands

### Drawing-Specific CRDTs

- **Shape CRDT**: Rectangles, circles, polygons with automatic conflict resolution
- **Path CRDT**: Vector paths and curves with point-by-point synchronization
- **Layer CRDT**: Hierarchical layer management with ordering consistency
- **Style CRDT**: Color, stroke, fill properties with last-writer-wins semantics
- **Composition CRDT**: Complex shapes built from primitive elements

### Drawing Properties

- **Geometric Commutativity**: Drawing operations can be applied in any order
- **Visual Idempotency**: Drawing operations can be applied multiple times without visual changes
- **Spatial Convergence**: All drawing replicas eventually reach the same visual state

## Drawing Implementation Patterns

### Shape Merging

```javascript
mergeShapes(other) {
  for (const [id, shape] of Object.entries(other.shapes)) {
    if (!this.shapes[id] || this.shapes[id].version < shape.version) {
      this.shapes[id] = shape
    }
  }
}
```

### Drawing Operation Broadcasting

```javascript
broadcastDrawingOperation(operation) {
  this.operations.push(operation)
  this.network.send(operation)
  this.applyLocally(operation)
}
```

### Layer Management

```javascript
updateLayerOrder(layerId, newIndex) {
  const layer = this.layers.find(l => l.id === layerId)
  if (layer) {
    layer.order = newIndex
    this.broadcastLayerUpdate(layer)
  }
}
```

## Drawing-Specific Best Practices

1. **Choose the right drawing CRDT type** for your visual elements (shapes, paths, layers)
2. **Handle geometric conflicts** gracefully (overlapping shapes, intersecting paths)
3. **Optimize for real-time collaboration** (latency vs. visual consistency)
4. **Test thoroughly** with concurrent drawing operations
5. **Monitor visual performance** in production drawing tools
6. **Implement efficient rendering** for complex drawing states
7. **Handle large numbers of drawing objects** without performance degradation
