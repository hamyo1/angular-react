
import * as React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Diamond, DiamondsList } from 'src/app/shared/models/diamond.model';
//props..
interface Props {
  setTheArray:(arg: DiamondsList) => void,
  diamondsList:DiamondsList
}

const AddDiamondCompnent = ({setTheArray,diamondsList}:Props) => {
  const [clarity, setclarityValue] = useState('');
  const [color, setcolorValue] = useState('');
  const [list_price, setlist_priceValue] = useState('');
  const [price, setpriceValue] = useState('');
  const [shape, setshapeValue] = useState('');
  const [size, setsizeValue] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    var eventInputHndler = event.target.id == 'clarityId' ? setclarityValue(event.target.value) : true;
    eventInputHndler = event.target.id == 'colorId' ? setcolorValue(event.target.value) : true;
    eventInputHndler = event.target.id == 'list_priceId' ? setlist_priceValue(event.target.value) : true;
    eventInputHndler = event.target.id == 'priceId' ? setpriceValue(event.target.value) : true;
    eventInputHndler = event.target.id == 'shapeId' ? setshapeValue(event.target.value) : true;
    eventInputHndler = event.target.id == 'sizeId' ? setsizeValue(event.target.value) : true;
  };

  const postNewDiamond: React.FormEventHandler<HTMLFormElement> = (event) => {
    try {
      event.preventDefault();// not rendering this component again helps to the toast messages and why to do it if not nessery?..
      if (clarity != '' && color != '' && list_price != '' && price != '' && shape != '' && size != '') {
        var diamond: Diamond = { clarity: clarity, color: color, list_price: Number(list_price), price: Number(price), shape: shape, size: Number(size) };
        fetch('http://localhost:4200/PostNewDiamond', {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify(diamond)
        })
          .then(res => {
            if (res.ok) return res.statusText;
            throw res.statusText;
          })
          .then(resp => {
            toast.success('Successfully post New Diamond!');
            var diamondsList1: DiamondsList=[]

            for (const key in diamondsList) {
              diamondsList1.push(diamondsList[key]);
            }
            diamondsList1.push(diamond)
            setTheArray(diamondsList1); // (rendering the react_GridAllDiamondsCompnent again..)
          })
          .catch(err =>{
            toast.error('error in post New Diamond');
            console.log(`error in postNewDiamond: ${err}`);
          } );
      }
    }
    catch (ex) {
      console.log("error in postNewDiamond: invaild prameter ${ex.message}");
    }

  };


  return (
    <div className= "p-2 bg-light border"><form className= "p-2 border" onSubmit={postNewDiamond} style={{backgroundColor:'#cfe2f3'}}>
      <div className='row'>
      <div className="form-group col-lg-4 col-md-12">
        <label htmlFor="clarityId" className="col-sm-2 col-form-label fw-bold">Clarity</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clarityId" placeholder="Clarity" value={clarity} onChange={handleInputChange} required/>
        </div>
      </div>
      <div className="form-group col-lg-4 col-md-6">
        <label htmlFor="colorId" className="col-sm-2 col-form-label fw-bold">Color</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="colorId" placeholder="color" value={color} onChange={handleInputChange} required/>
        </div>
      </div>
      <div className="form-group col-lg-4 col-md-6">
        <label htmlFor="list_priceId" className="col-sm-2 col-form-label fw-bold">List Price</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="list_priceId" placeholder="list priceId" value={list_price} onChange={handleInputChange} required/>
        </div>
      </div>
      </div>
      <div className='row'>
      <div className="form-group col-lg-4 col-md-12">
        <label htmlFor="priceId" className="col-sm-2 col-form-label fw-bold">Price</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="priceId" placeholder="Price" value={price} onChange={handleInputChange} required/>
        </div>
      </div>
      <div className="form-group col-lg-4 col-md-6">
        <label htmlFor="shapeId" className="col-sm-2 col-form-label fw-bold">Shape</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="shapeId" placeholder="shape" value={shape} onChange={handleInputChange} required/>
        </div>
      </div>
      <div className="form-group col-lg-4 col-md-6">
        <label htmlFor="sizeId" className="col-sm-2 col-form-label fw-bold">Size</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="sizeId" placeholder="size" value={size} onChange={handleInputChange} required/>
        </div>
      </div>
      </div>
      <fieldset className="form-group">
      </fieldset>
      <div className="form-group row">
        <div className="p-2 col-md-12 text-center">
        <button type="submit" className="btn btn-primary">Add a new Diamond</button>
        </div>
      </div>
    </form>
      </div>
  )
}

export default AddDiamondCompnent;


