import { useSelector, useDispatch } from 'react-redux';
import { drinkUpdate } from '../redux/actions';
import Drink from '../components/Drink';

const DrinkInventory = () => {
  const dispatch = useDispatch();
  const drinkData = useSelector((state) => state.drinkReducer.drinkData);
  console.log(drinkData);

  const handleQuantity = (operator, id) => {
    dispatch(drinkUpdate(operator, id));
  };

  return (
    <>
      <h1>Drink Department</h1>
      <div className="row">
        <div className="card-group">
          {drinkData.length > 0 &&
            drinkData.map((drink) => (
              <Drink key={drink.id} drink={drink} handleQuantity={handleQuantity} />
            ))}
        </div>
      </div>
    </>
  );
};

export default DrinkInventory;

// arai@yoku.co.jp
