import React from 'react'
import DropDownController from '../DropDownController';

const BlockChain = () => {
    const blockchainDevelopmentProps = {
        pageTitle: "WizInoa: Blockchain Solutions in Madurai - Software & Tools",
        descriptionName: "blockchain solutions",
        descriptionContent: "Explore WizInoa's advanced blockchain solutions & software tools in Madurai. Enhance your business with customizable blockchain solutions tailored to your requirements."
        ,
        heading: 'Blockchain Development Solutions',
        para: 'WizInoa specializes in blockchain development, serving as your strategic partner in creating secure, transparent, and decentralized applications using blockchain technology.',
        svgSrc: 'https://www.svgrepo.com/show/374088/solidity.svg',
        smallHeading: 'Our blockchain development services cover a diverse range of technologies, ensuring the implementation of robust and innovative solutions in the decentralized space.',
        services: [
            { title: 'Smart Contract Development (Solidity)', description: 'Create self-executing contracts with our smart contract development services, utilizing Solidity programming language for building secure and autonomous contracts on blockchain platforms like Ethereum.' },
            { title: 'Decentralized Application (DApp) Development', description: 'Build decentralized applications with our DApp development services, leveraging technologies such as Web3.js and frameworks like Truffle for creating seamless and user-friendly blockchain applications.' },
            { title: 'Blockchain Platforms (Ethereum, Binance Smart Chain)', description: 'Explore various blockchain platforms with our expertise, focusing on popular platforms like Ethereum and Binance Smart Chain for developing and deploying blockchain solutions.' },
            { title: 'Consensus Algorithms (Proof of Work, Proof of Stake)', description: 'Implement secure and efficient consensus mechanisms with our consensus algorithm services, choosing between Proof of Work or Proof of Stake depending on the requirements of your blockchain project.' },
            { title: 'Tokenization and Cryptocurrency Development', description: 'Create custom tokens and cryptocurrencies with our tokenization and cryptocurrency development services, ensuring compliance and security in the issuance and management of digital assets.' },
        ],
    };

    return (
        <div><DropDownController {...blockchainDevelopmentProps} /></div>
    )
}

export default BlockChain