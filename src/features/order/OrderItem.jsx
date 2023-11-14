import { formatCurrency } from '../../util/helpers'

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <span className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(' ,')}
      </span>
    </li>
  )
}

export default OrderItem
