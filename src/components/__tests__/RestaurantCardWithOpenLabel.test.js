import { withOpenLabel } from '../RestaurantCard';
import  RestaurantCard  from '../RestaurantCard';
import { render } from '@testing-library/react';
import MOCK_RES_DATA from './mocks';

const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);

test("Should load Restaurant Card with Open Label", ()=>{
    render(<RestaurantCardWithOpenLabel resData={MOCK_RES_DATA} />);

})