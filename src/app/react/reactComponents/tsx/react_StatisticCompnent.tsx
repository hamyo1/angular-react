import * as React from 'react'
import { DiamondsList } from 'src/app/shared/models/diamond.model'

interface Props {
    diamondsList: DiamondsList;
}

const StatisticCompnent = ({ diamondsList }: Props) => {
    var sumPrice: number = 0;
    var minPrice = diamondsList[0].price;
    var length = 0;
    for (const key in diamondsList) {
        sumPrice = sumPrice + diamondsList[key].price;
        length = length + 1;
        if (diamondsList[key].price < minPrice) {
            minPrice = diamondsList[key].price;
        }
    }
    var avaragePrice = sumPrice / length;

    return (
        <div className="card text-center p-2 bg-light border" >
            <div className="card-header" style={{ backgroundColor: '#cfe2f3' }}>
                <h5>Statistics</h5>
            </div>
            <div className="card-body" style={{ backgroundColor: '#eff5fa' }}>
                <p className="card-text">Average price={avaragePrice}, number of diamonds={length}, min. price={minPrice}</p>
            </div>

        </div>
    )
}

export default StatisticCompnent;
