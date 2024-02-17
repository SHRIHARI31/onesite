import React from 'react'
import DropDownController from '../DropDownController'

const LogistcSoftware = () => {
    const logisticsSoftwareProps = {
        pageTitle: "WizInoa: Logistic Software Solutions in Madurai - Software & Tools",
        descriptionName: "logistic software solutions",
        descriptionContent: "Explore WizInoa's advanced logistic software solutions and tools in Madurai. Enhance your logistics management with customizable logistic software tailored to your requirements."
        ,
        heading: 'Logistics Software Solutions',
        para: 'WizInoa provides comprehensive logistics software solutions, serving as your strategic partner in optimizing supply chain operations, improving visibility, and enhancing efficiency in logistics management.',
        svgSrc: 'https://www.svgrepo.com/show/402672/ship.svg',
        smallHeading: 'Our logistics software services cover a diverse range of features, enabling seamless coordination, tracking, and optimization of transportation, warehousing, and overall logistics processes.',
        services: [
            { title: 'Transportation Management System (TMS)', description: 'Optimize and streamline transportation operations with our TMS, facilitating route planning, load optimization, and real-time tracking of shipments.' },
            { title: 'Warehouse Management System (WMS)', description: 'Enhance warehouse efficiency with our WMS, managing inventory, order fulfillment, and optimizing warehouse processes for increased productivity.' },
            { title: 'Order Tracking and Visibility', description: 'Provide real-time visibility into order status and shipment tracking, improving communication and transparency throughout the supply chain.' },
            { title: 'Route Optimization', description: 'Optimize delivery routes to minimize costs, reduce delivery times, and enhance overall logistics efficiency using advanced routing algorithms.' },
            { title: 'Inventory Management', description: 'Efficiently manage inventory levels, track stock movements, and automate inventory replenishment processes to ensure optimal stock levels.' },
        ],
    };

    return (
        <div><DropDownController {...logisticsSoftwareProps} /></div>
    )
}

export default LogistcSoftware