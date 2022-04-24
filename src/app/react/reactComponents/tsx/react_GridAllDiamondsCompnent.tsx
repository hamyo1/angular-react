import * as React from 'react'
import { DiamondsList} from 'src/app/shared/models/diamond.model'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';

interface Props {
    diamondsList: DiamondsList
}

const GridAllDiamondsCompnent = ({ diamondsList }: Props) => {
    var columnDefs1= [
    { headerName: 'clarity', field: 'clarity' },
    { headerName: 'color', field: 'color' },
    { headerName: 'list_price', field: 'list_price' },
    { headerName: 'price', field: 'price' },
    { headerName: 'shape', field: 'shape' },
    { headerName: 'size', field: 'size' }];
    function GetAllDiamonds() {
        var rows = [];
        for (const key in diamondsList) {
            rows.push(<div className="row p-2 border" style={{ backgroundColor: '#eff5fa' }}><div className="col-lg-2 col-md-6 p-2 border">{diamondsList[key].clarity}</div>
                <div className="col-lg-2 col-md-6 p-2 border">{diamondsList[key].color}</div><div className="col-lg-2 col-md-6 p-2 border">{diamondsList[key].list_price}</div><div className="col-lg-2 col-md-6 p-2 border">{diamondsList[key].price}
                </div><div className="col-lg-2 col-md-6 p-2 border">{diamondsList[key].shape}</div><div className="col-lg-2 col-md-6 p-2 border">{diamondsList[key].size}</div></div>);
        }
        return rows;
    }


    return (
        <div className="p-2 border" style={{ backgroundColor: '#cfe2f3'}}>
                <h4 className="p-2 border text-center">Grid with all diamonds</h4>
                <div className="row p-2 border center">
                    <div className="col-lg-2 col-md-6 p-2 border center fw-bold" style={{ backgroundColor: '#7abaf4' }}>Clarity</div>
                    <div className="col-lg-2 col-md-6 p-2 border center fw-bold" style={{ backgroundColor: '#7abaf4' }}>Color</div>
                    <div className="col-lg-2 col-md-6 p-2 border center fw-bold" style={{ backgroundColor: '#7abaf4' }}>List Price</div>
                    <div className="col-lg-2 col-md-6 p-2 border center fw-bold" style={{ backgroundColor: '#7abaf4' }}>Price</div>
                    <div className="col-lg-2 col-md-6 p-2 border center fw-bold" style={{ backgroundColor: '#7abaf4' }}>Shape</div>
                    <div className="col-lg-2 col-md-6 p-2 border center fw-bold" style={{ backgroundColor: '#7abaf4' }}>Size</div>
                </div>
                <div style={{ backgroundColor: '#cfe2f3' , height: 500,  overflow: 'scroll'}}>
                    {GetAllDiamonds()}
                </div>
            </div>
    )
}
export default GridAllDiamondsCompnent;
