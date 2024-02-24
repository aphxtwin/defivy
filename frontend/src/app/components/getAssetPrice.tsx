'use client';
import { useState } from 'react';
import Web3 from 'web3';

// Import the AaveOracle ABI
import IPriceOracleGetter from '../ABIs/IPriceOracleGetter.json';
import PoolAddressProvider from '../ABIs/PoolAddressProvider.json';


const ALCHEMY_API_KEY = process.env.ALCHEMY_KEY;
const INFURA_KEY = process.env.INFURA_KEY;


const ButtonComponent = () => {
    const [price, setPrice] = useState<number | null>(null);
    const getPriceFromAaveOracle = async () => {
        try {
            // Connect to the Ethereum network
            console.log(ALCHEMY_API_KEY)
            const web3 = new Web3(`https://sepolia.infura.io/v3/${INFURA_KEY}`);
            
            // Get the latest PriceOracle address
            const providerAddress = new web3.eth.Contract(PoolAddressProvider, '0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A');
            const priceOracleAddress = await providerAddress.methods
                .getPriceOracle()
                .call()
                .catch((error: any) => {
                    console.error('Error fetching price oracle address:', error);
                });

            // Get the fucking prices
            const priceOracleContract = new web3.eth.Contract(IPriceOracleGetter, priceOracleAddress);
            const prices = await priceOracleContract.methods
                .getAssetsPrices([ providerAddress ])
                .call()
                .catch((e) => {
                    throw Error(`Error getting priceOracle prices: ${e.message}`)
                });
            setPrice(prices);
        } catch (error) {
            console.error('Error fetching price from AaveOracle:', error);
        }
    };

    return (
        <div>
            <button className='bg-blue-900' onClick={getPriceFromAaveOracle}>Get Price</button>
            {price !== null && <p className='text-white'> Price: {price}</p>}
        </div>
    );
};

export default ButtonComponent;