---
sidebar_position: 1
---

# Chapter 8: Collaborative Editing

## Overview

Collaborative editing is one of the most popular applications of CRDTs. It enables multiple users to edit the same document simultaneously while maintaining consistency and resolving conflicts automatically.

## Text CRDTs

### Operational Transformation vs. CRDTs

Traditional collaborative editing often uses Operational Transformation (OT), but CRDTs provide several advantages:

- **No Central Server**: CRDTs work in peer-to-peer scenarios
- **Automatic Conflict Resolution**: Conflicts are resolved deterministically
- **Offline Support**: Users can continue editing without network connectivity

### Yjs: A Popular Text CRDT

Yjs is a high-performance CRDT implementation for collaborative editing.

#### Basic Usage

```javascript
import * as Y from 'yjs'

// Create a new document
const doc = new Y.Doc()

// Create a text type
const text = doc.getText('content')

// Insert text
text.insert(0, 'Hello, World!')

// Observe changes
text.observe(event => {
  console.log('Text changed:', event.changes)
})

// Get the current content
console.log(text.toString())
```

#### Collaborative Editing

```javascript
// User A
const docA = new Y.Doc()
const textA = docA.getText('content')
textA.insert(0, 'Hello')

// User B
const docB = new Y.Doc()
const textB = docB.getText('content')
textB.insert(0, 'Hi')

// Synchronize (simplified)
// In practice, you'd use a provider like WebSocket or WebRTC
docA.merge(docB)
docB.merge(docA)

// Both documents now contain "HiHello" or "HelloHi"
```

## Rich Text Editing

### Quill.js Integration

```javascript
import Quill from 'quill'
import QuillCursors from 'quill-cursors'
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'

Quill.register('modules/cursors', QuillCursors)

const doc = new Y.Doc()
const text = doc.getText('quill')

const quill = new Quill('#editor', {
  modules: {
    cursors: true,
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['link', 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  }
})

const binding = new QuillBinding(text, quill, doc)
```

## Code Editing

### Monaco Editor Integration

```javascript
import * as monaco from 'monaco-editor'
import * as Y from 'yjs'
import { MonacoBinding } from 'y-monaco'

const doc = new Y.Doc()
const text = doc.getText('monaco')

const editor = monaco.editor.create(document.getElementById('editor'), {
  value: '',
  language: 'javascript',
  theme: 'vs-dark'
})

const binding = new MonacoBinding(text, editor.getModel(), new Set([editor]), doc)
```

## Conflict Resolution Strategies

### Last-Write-Wins (LWW)

Simple but can lose user input:

```javascript
class LWWRegister {
  constructor() {
    this.value = null
    this.timestamp = 0
  }

  set(value, timestamp) {
    if (timestamp > this.timestamp) {
      this.value = value
      this.timestamp = timestamp
    }
  }

  merge(other) {
    if (other.timestamp > this.timestamp) {
      this.value = other.value
      this.timestamp = other.timestamp
    }
  }
}
```

### Add-Wins Set

Preserves all additions:

```javascript
class AddWinsSet {
  constructor() {
    this.elements = new Map() // element -> timestamp
  }

  add(element, timestamp) {
    const existing = this.elements.get(element)
    if (!existing || timestamp > existing) {
      this.elements.set(element, timestamp)
    }
  }

  remove(element) {
    this.elements.delete(element)
  }

  merge(other) {
    for (const [element, timestamp] of other.elements) {
      const existing = this.elements.get(element)
      if (!existing || timestamp > existing) {
        this.elements.set(element, timestamp)
      }
    }
  }
}
```

## Performance Considerations

### Delta Compression

Instead of sending full documents, send only changes:

```javascript
class DeltaCompressor {
  static compress(changes) {
    // Compress changes to minimize network traffic
    return changes.map(change => ({
      type: change.type,
      position: change.position,
      content: change.content,
      timestamp: change.timestamp
    }))
  }

  static decompress(compressed) {
    // Decompress changes back to full format
    return compressed.map(change => ({
      type: change.type,
      position: change.position,
      content: change.content,
      timestamp: change.timestamp
    }))
  }
}
```

### Batching Updates

Group multiple changes to reduce synchronization overhead:

```javascript
class UpdateBatcher {
  constructor(delay = 100) {
    this.pendingUpdates = []
    this.timer = null
    this.delay = delay
  }

  addUpdate(update) {
    this.pendingUpdates.push(update)
    
    if (this.timer) {
      clearTimeout(this.timer)
    }
    
    this.timer = setTimeout(() => {
      this.flush()
    }, this.delay)
  }

  flush() {
    if (this.pendingUpdates.length > 0) {
      // Send batched updates
      this.sendUpdates(this.pendingUpdates)
      this.pendingUpdates = []
    }
  }
}
```

## Testing Collaborative Editing

### Conflict Simulation

```javascript
function simulateConflict() {
  const docA = new Y.Doc()
  const docB = new Y.Doc()
  
  const textA = docA.getText('content')
  const textB = docB.getText('content')
  
  // Simulate concurrent edits
  textA.insert(0, 'Hello')
  textB.insert(0, 'Hi')
  
  // Simulate network delay
  setTimeout(() => {
    docA.merge(docB)
    docB.merge(docA)
    
    console.log('Document A:', textA.toString())
    console.log('Document B:', textB.toString())
  }, 100)
}
```

## Next Steps

In the next chapter, we'll explore how CRDTs integrate with distributed databases. 