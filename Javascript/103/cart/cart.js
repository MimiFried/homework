class Cart {
    // 2 - added param items to allow us to recreate cart from items stored in session
    constructor(items) {
      this.items = items || {};
    }
  
    addItem(id, count) {
      const c = this.items[id] || 0;
      this.items[id] = count + c;
    }
  
    getItems() {
      return Object.keys(this.items).map(id => {
      const item = global.items.find(i => i.id === +id);
  
        return {
          item: item,
          count: this.items[id]
        }
      });
    }
  }
  
  module.exports = Cart;