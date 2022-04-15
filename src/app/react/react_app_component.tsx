import * as React from 'react'
import { DiamondsList } from '../shared/models/diamond.model'
import GridAllDiamondsCompnent from '../react/reactComponents/tsx/react_GridAllDiamondsCompnent'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import StatisticCompnent from './reactComponents/tsx/react_StatisticCompnent';
import HeaderCompnent from './reactComponents/tsx/react_HeaderCompnent';
import AddDiamondCompnent from './reactComponents/tsx/react_AddDiamondCompnent';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';


const React_App_Component = (diamondsListFirst: DiamondsList) => {

    const [diamondsList, setTheArray] = useState<DiamondsList>(diamondsListFirst);

    return (

        <div className="container-fluid h-100 d-flex flex-column justify-content-start" >
            <HeaderCompnent />
            <StatisticCompnent diamondsList={diamondsList} />
            <GridAllDiamondsCompnent diamondsList={diamondsList} />
            <AddDiamondCompnent setTheArray={setTheArray} diamondsList={diamondsList} />
            <Toaster/>
        </div>
    )
}

export default React_App_Component;
