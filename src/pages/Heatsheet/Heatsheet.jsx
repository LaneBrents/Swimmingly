import React from 'react';
import heatsheet from '../../../models/heatsheet';
import Heatsheet from '../../../models/heatsheet';
import PageHeader from "../../components/Header/Header";
import AddHeatsheetForm from '../../components/HeatsheetInput/HeatsheetInput';

export default function HeatsheetPage() {
    return (
        <>
            <PageHeader />
            <h1>Heatsheet Form:</h1>
            <Heatsheet heatsheet={heatsheet} />
        </>
    );
}