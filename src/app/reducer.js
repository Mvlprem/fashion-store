export const ACTIONS = {
  ADD: 'add',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      return addToCart(state, action.product, action.quantity)
    }
    default: {
      return state
    }
  }
}

/* Add to cart Logic */
const addToCart = (cart, product, quantity) => {
  const duplicateProduct = cart.some((element) => element.node.id == product.id)
  const newProduct = { node: product, quantity: quantity }

  if (!duplicateProduct) {
    return [...cart, newProduct]
  } else if (duplicateProduct) {
    return cart.map((element) => {
      if (element.node.id == product.id) {
        return { node: element.node, quantity: element.quantity + quantity }
      } else return element
    })
  } else return cart
}

export default reducer
