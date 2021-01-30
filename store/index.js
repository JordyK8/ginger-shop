export const state = () => ({
    cart: {
        items: [
            
        ]
    }
})
export const mutations = {
    addItem(state, itemInfo) {
        console.log(itemInfo);
        const existingItem = state.cart.items.find(item => item.title == itemInfo.title)
        if (existingItem) {
            existingItem.amount += itemInfo.amount
        } else {
            state.cart.items.push(itemInfo)
        }
    },
    subtractOne(state, itemInfo) {
        const existingItem = state.cart.items.find(item => item.title == itemInfo.title)
        existingItem.amount--
        if (existingItem.amount < 1) {
            state.cart.items.splice(state.cart.items.findIndex(v => v.title === itemInfo.title), 1)
        }
    },
   addOne(state, itemInfo) { 
        const existingItem = state.cart.items.find(item => item.title == itemInfo.title)
        console.log(existingItem);
        existingItem.amount++
    }
}
export const actions = {
    addItem(context, payload) {
        context.commit('addItem', payload)
    },
    subtractOne(context, payload) { 
        context.commit('subtractOne', payload)
    },
    addOne(context, payload) { 
        console.log(payload);
        context.commit('addOne', payload)
    }
}