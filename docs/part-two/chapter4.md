---
sidebar_position: 1
---

# Chapter 4: State-Based CRDTs

## Overview

State-Based CRDTs (CvRDTs) merge complete states between replicas. They are simpler to implement but can have larger message sizes due to exchanging full state information.

## G-Counter Implementation

The Grow-only Counter is one of the simplest CRDTs, supporting only increment operations.

### JavaScript Implementation

```javascript
class GCounter {
  constructor(replicaId) {
    this.replicaId = replicaId;
    this.counters = new Map();
    this.counters.set(replicaId, 0);
  }

  increment() {
    const current = this.counters.get(this.replicaId) || 0;
    this.counters.set(this.replicaId, current + 1);
  }

  get value() {
    let sum = 0;
    for (const count of this.counters.values()) {
      sum += count;
    }
    return sum;
  }

  merge(other) {
    for (const [replicaId, count] of other.counters) {
      const current = this.counters.get(replicaId) || 0;
      this.counters.set(replicaId, Math.max(current, count));
    }
  }

  toJSON() {
    return {
      replicaId: this.replicaId,
      counters: Object.fromEntries(this.counters)
    };
  }

  static fromJSON(data) {
    const counter = new GCounter(data.replicaId);
    counter.counters = new Map(Object.entries(data.counters));
    return counter;
  }
}
```

### Usage Example

```javascript
// Create counters for two replicas
const counterA = new GCounter('A');
const counterB = new GCounter('B');

// Increment on replica A
counterA.increment();
counterA.increment();

// Increment on replica B
counterB.increment();

// Merge states
counterA.merge(counterB);
counterB.merge(counterA);

console.log(counterA.value); // 3
console.log(counterB.value); // 3
```

## PN-Counter Implementation

The Positive-Negative Counter supports both increment and decrement operations.

### JavaScript Implementation

```javascript
class PNCounter {
  constructor(replicaId) {
    this.replicaId = replicaId;
    this.positive = new GCounter(replicaId);
    this.negative = new GCounter(replicaId);
  }

  increment() {
    this.positive.increment();
  }

  decrement() {
    this.negative.increment();
  }

  get value() {
    return this.positive.value - this.negative.value;
  }

  merge(other) {
    this.positive.merge(other.positive);
    this.negative.merge(other.negative);
  }

  toJSON() {
    return {
      replicaId: this.replicaId,
      positive: this.positive.toJSON(),
      negative: this.negative.toJSON()
    };
  }

  static fromJSON(data) {
    const counter = new PNCounter(data.replicaId);
    counter.positive = GCounter.fromJSON(data.positive);
    counter.negative = GCounter.fromJSON(data.negative);
    return counter;
  }
}
```

## G-Set Implementation

The Grow-only Set only supports adding elements.

### JavaScript Implementation

```javascript
class GSet {
  constructor() {
    this.elements = new Set();
  }

  add(element) {
    this.elements.add(element);
  }

  has(element) {
    return this.elements.has(element);
  }

  get size() {
    return this.elements.size;
  }

  merge(other) {
    for (const element of other.elements) {
      this.elements.add(element);
    }
  }

  toJSON() {
    return {
      elements: Array.from(this.elements)
    };
  }

  static fromJSON(data) {
    const set = new GSet();
    set.elements = new Set(data.elements);
    return set;
  }
}
```

## Advantages and Disadvantages

### Advantages
- **Simple Implementation**: Easy to understand and implement
- **Deterministic Merging**: Merge operations are straightforward
- **Reliable**: Less prone to implementation errors

### Disadvantages
- **Large Message Sizes**: Full state must be exchanged
- **Memory Usage**: Each replica stores complete state information
- **Network Overhead**: Synchronization can be expensive for large states

## When to Use State-Based CRDTs

State-based CRDTs are ideal when:
- State size is manageable
- Network bandwidth is not a major constraint
- Simplicity is more important than performance
- You need reliable, deterministic merging

## Next Steps

In the next chapter, we'll explore operation-based CRDTs and their trade-offs. 