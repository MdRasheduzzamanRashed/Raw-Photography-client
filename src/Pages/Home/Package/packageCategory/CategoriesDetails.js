import React from 'react';
import GoldPack from './GoldPack';
import PlatinumPack from './PlatinumPack';
import SilverPack from './SilverPack';

const CategoriesDetails = () => {
    return (
        <div>
            <SilverPack></SilverPack>
            <GoldPack></GoldPack>
            <PlatinumPack></PlatinumPack>
        </div>
    );
};

export default CategoriesDetails;