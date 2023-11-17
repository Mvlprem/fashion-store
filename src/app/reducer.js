export const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
  DELETE: 'delete',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return addToCart(state, action.product, action.quantity)
    }
    case ACTIONS.REMOVE: {
      return removeFromCart(state, action.product, action.quantity)
    }
    case ACTIONS.DELETE: {
      return deleteFromCart(state, action.product)
    }
    default: {
      return state
    }
  }
}

/* add to cart Logic */
const addToCart = (cart, product, quantity) => {
  const duplicateProduct = cart.some(
    (element) => element.node.id === product.id
  )
  const newProduct = { node: product, quantity: quantity }

  if (!duplicateProduct) {
    return [...cart, newProduct]
  } else if (duplicateProduct) {
    return cart.map((element) => {
      if (element.node.id === product.id) {
        return { node: element.node, quantity: element.quantity + quantity }
      } else return element
    })
  } else return cart
}

/* remove from cart Logic */
const removeFromCart = (cart, product, quantity) => {
  if (quantity < 2) return deleteFromCart(cart, product)
  else
    return cart.map((element) => {
      if (element.node.id === product.id) {
        return { node: element.node, quantity: element.quantity - 1 }
      } else return element
    })
}

/* delete from cart Logic */
const deleteFromCart = (cart, product) => {
  return cart.filter((element) => element.node.id !== product.id)
}

export default reducer
