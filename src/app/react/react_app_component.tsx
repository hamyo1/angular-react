import * as React from 'react'
import { DiamondsList } from '../shared/models/diamond.model'
import GridAllDiamondsCompnent from '../react/reactComponents/tsx/react_GridAllDiamondsCompnent'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import StatisticCompnent from './reactComponents/tsx/react_StatisticCompnent';
import HeaderCompnent from './reactComponents/tsx/react_HeaderCompnent';
import AddDiamondCompnent from './reactComponents/tsx/react_AddDiamondCompnent';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Diamond } from 'angular-react/src/app/shared/models/diamond.model';
import ErrorPageCompnent from './reactComponents/tsx/react_errorPageCompnent';


const React_App_Component = () => {

    const [diamondsList, setTheArray] = useState<DiamondsList>([{} as Diamond]);
    const [pageStatus, setPageStatus] = useState<number>(1);
    
    React.useEffect(() => {
        var diamondsListFromFetch: DiamondsList=[];
        //get all data (the better way to that in big data is by paging)
        fetch('http://localhost:4200/GetAllDiamonds', {
            method: 'get',
            headers: {
              "Accept": "application/json",
              "Content-type": "application/json"
            },
          })
            .then(res => {
              debugger;
              if(res.ok)
              {
                return res.json();
              }
              console.log(`error when trying get data: api return error status: ${res.status}`);
              throw res.statusText;
            })
            .then(resp => {
              resp.forEach((element: Diamond) => {
                diamondsListFromFetch.push(element);
              });
              //(render again)
              setTheArray(diamondsListFromFetch);
              setPageStatus(1);
          }).catch(err =>
            {console.log(`error when trying get data: ${err}`);
            setPageStatus(2);});
      }, []);
    
    //i can send the 'setPageStatus' in props for more error handling (i was do that 'PageStatus' 2 it is 'loadingPage' but from now i choose to delete it)
    //i am considering another way to handle inside dives and not just global
    if(pageStatus==1)//sucsess
    {
        return (
        
            <div className="container-fluid h-100 d-flex flex-column justify-content-start">
                <HeaderCompnent />
                <StatisticCompnent diamondsList={diamondsList} />
                <GridAllDiamondsCompnent diamondsList={diamondsList} />
                <AddDiamondCompnent setTheArray={setTheArray} diamondsList={diamondsList} />
                <Toaster/>
            </div>
        )
    }
    else//error
    {
        return(
        <ErrorPageCompnent/>
        )
    }

}

export default React_App_Component;
