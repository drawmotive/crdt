# 绘图 CRDT 参考

## 绘图应用的核心概念

### 绘图 CRDT 类型

- **基于状态 (CvRDT)**：合并完整的绘图状态
- **基于操作 (CmRDT)**：交换绘图操作/命令

### 绘图专用 CRDT

- **形状 CRDT**：矩形、圆形、多边形，具有自动冲突解决
- **路径 CRDT**：矢量路径和曲线，具有逐点同步
- **图层 CRDT**：分层图层管理，具有排序一致性
- **样式 CRDT**：颜色、描边、填充属性，具有最后写入获胜语义
- **组合 CRDT**：由基本元素构建的复杂形状

### 绘图属性

- **几何交换性**：绘图操作可以按任何顺序应用
- **视觉幂等性**：绘图操作可以多次应用而不会产生视觉变化
- **空间收敛性**：所有绘图副本最终都会达到相同的视觉状态

## 绘图实现模式

### 形状合并

```javascript
mergeShapes(other) {
  for (const [id, shape] of Object.entries(other.shapes)) {
    if (!this.shapes[id] || this.shapes[id].version < shape.version) {
      this.shapes[id] = shape
    }
  }
}
```

### 绘图操作广播

```javascript
broadcastDrawingOperation(operation) {
  this.operations.push(operation)
  this.network.send(operation)
  this.applyLocally(operation)
}
```

### 图层管理

```javascript
updateLayerOrder(layerId, newIndex) {
  const layer = this.layers.find(l => l.id === layerId)
  if (layer) {
    layer.order = newIndex
    this.broadcastLayerUpdate(layer)
  }
}
```

## 绘图专用最佳实践

1. **为您的视觉元素选择正确的绘图 CRDT 类型**（形状、路径、图层）
2. **优雅地处理几何冲突**（重叠形状、相交路径）
3. **为实时协作优化**（延迟 vs. 视觉一致性）
4. **彻底测试并发绘图操作**
5. **在生产绘图工具中监控视觉性能**
6. **为复杂绘图状态实现高效渲染**
7. **处理大量绘图对象而不降低性能**
