---
sidebar_position: 2
---

# Chapter 2: Consistency Models

## Overview

Consistency models define the rules for how data is shared and synchronized across distributed systems. Understanding these models is crucial for choosing the right approach for your application.

## Strong Consistency

Strong consistency ensures that all nodes see the same data at the same time. This model provides the most intuitive behavior but comes with performance and availability trade-offs.

### Characteristics
- **Linearizability**: Operations appear to execute atomically
- **Sequential Consistency**: Operations appear to execute in some sequential order
- **Causal Consistency**: Causally related operations maintain their order

### Trade-offs
- **Pros**: Simple to reason about, predictable behavior
- **Cons**: Higher latency, reduced availability during partitions

## Eventual Consistency

Eventual consistency allows replicas to temporarily diverge but guarantees they will eventually converge to the same state.

### Characteristics
- **Convergence**: All replicas eventually reach the same state
- **Availability**: Operations can proceed even during network partitions
- **Performance**: Lower latency and higher throughput

### Trade-offs
- **Pros**: High availability, better performance
- **Cons**: Temporary inconsistencies, more complex application logic

## CRDTs and Consistency

CRDTs provide a structured way to achieve eventual consistency by ensuring that:

1. **Concurrent operations commute**: Operations can be applied in any order
2. **Operations are idempotent**: Applying the same operation multiple times has no effect
3. **State converges**: All replicas eventually reach the same final state

## Choosing the Right Model

The choice between consistency models depends on your application requirements:

- **Strong Consistency**: When data accuracy is critical and some latency is acceptable
- **Eventual Consistency**: When availability and performance are more important than immediate consistency
- **CRDTs**: When you need eventual consistency with automatic conflict resolution

## Next Steps

In the next chapter, we'll dive into the fundamentals of CRDTs and how they work. 