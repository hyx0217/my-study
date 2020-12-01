class eventBus{
  cache={}
  on (eventName,fn) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn)
  }
  emit (eventName) {
    this.cache[eventName].forEach(fn=> {
      fn()
    });
  }
  off (eventName,fn) {
    const i = this.cache[eventName].indexOf(fn);
    if (index === -1) return;
    this.cache[eventName].splice(index,1)
  }
}