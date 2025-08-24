---
sidebar_position: 3
---

# Chapter 3: CRDT Basics

## Overview

Conflict-Free Replicated Data Types (CRDTs) are data structures designed to work in distributed environments where replicas can be updated independently and concurrently.

## Core Principles

### 1. Commutativity

Operations in CRDTs must commute, meaning the order in which they are applied doesn't affect the final result.

**Example**: Adding items to a set
- Replica A adds item "X", then "Y"
- Replica B adds item "Y", then "X"
- Both replicas end up with the same set: {"X", "Y"}

### 2. Idempotency

Operations can be applied multiple times without changing the result beyond the first application.

**Example**: Setting a value
- Setting a register to "5" multiple times still results in "5"
- The operation is safe to replay during synchronization

### 3. Convergence

All replicas will eventually reach the same state, regardless of the order of operations or network delays.

## CRDT Categories

### State-Based CRDTs (CvRDTs)

Also known as Convergent Replicated Data Types, these CRDTs merge states directly.

**Characteristics**:
- Replicas exchange their complete state
- Merge function combines states deterministically
- Simpler to implement but larger message sizes

**Examples**:
- G-Counter (Grow-only Counter)
- PN-Counter (Positive-Negative Counter)
- G-Set (Grow-only Set)

### Operation-Based CRDTs (CmRDTs)

Also known as Commutative Replicated Data Types, these CRDTs exchange operations.

**Characteristics**:
- Replicas exchange operations/commands
- Operations must commute and be idempotent
- Smaller message sizes but more complex implementation

**Examples**:
- LWW-Register (Last-Write-Wins Register)
- Add-Wins Set
- Remove-Wins Set

## Basic CRDT Types

### Counters

**G-Counter (Grow-only Counter)**
- Only supports increment operations
- Each replica maintains a vector of increments
- Final value is the sum of all increments

**PN-Counter (Positive-Negative Counter)**
- Supports both increment and decrement
- Maintains separate positive and negative counts
- Final value is positive sum minus negative sum

### Sets

**G-Set (Grow-only Set)**
- Only supports add operations
- Once an element is added, it cannot be removed
- Final set is the union of all added elements

**2P-Set (Two-Phase Set)**
- Supports both add and remove operations
- Removed elements cannot be re-added
- Final set is added elements minus removed elements

## Implementation Considerations

### Message Delivery

CRDTs require reliable message delivery, but not necessarily ordered delivery. Messages can be:
- **At-least-once**: Messages may be delivered multiple times
- **At-most-once**: Messages are delivered at most once
- **Exactly-once**: Messages are delivered exactly once

### Vector Clocks

Vector clocks help track causality between operations and ensure proper ordering when needed.

## Next Steps

In the next section, we'll explore practical implementations of these CRDT types with code examples. 