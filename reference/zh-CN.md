# CRDT 参考

## 核心概念

### CRDT 类型

- **基于状态 (CvRDT)**: 合并完整状态
- **基于操作 (CmRDT)**: 交换操作/命令

### 基础 CRDT

- **G-Counter**: 只增计数器
- **PN-Counter**: 正负计数器
- **G-Set**: 只增集合
- **2P-Set**: 两阶段集合
- **LWW-Register**: 最后写入获胜寄存器

### 属性

- **交换性**: 操作可以按任意顺序应用
- **幂等性**: 操作可以多次应用
- **收敛性**: 所有副本最终达到相同状态

## 实现模式

### 状态合并

```javascript
merge(other) {
  for (const [key, value] of Object.entries(other.state)) {
    this.state[key] = Math.max(this.state[key] || 0, value)
  }
}
```

### 操作广播

```javascript
broadcast(operation) {
  this.operations.push(operation)
  this.network.send(operation)
}
```

## 最佳实践

1. **为您的用例选择正确的 CRDT 类型**
2. **优雅地处理网络故障**
3. **根据特定需求优化** (延迟 vs. 一致性)
4. **彻底测试并发操作**
5. **在生产环境中监控性能**
