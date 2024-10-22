import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    MasterAmenitie,
    MasterOption,
    MasterPricingTable,
    MasterQuotationDetail,
    MasterRevenueType,
    MasterUnit,
    MasterUnitDetail,
    MasterUnitGallery,
    MasterUser,
    MasterUtilitie,
} from "../slice/MasterAPISlice";

const Rootreducer = combineReducers({
    masterUser: MasterUser,
    masterUnit: MasterUnit,
    masterquotationDetail: MasterQuotationDetail,
    masteroption: MasterOption,
    masterpricingtable: MasterPricingTable,
    masterrevenuetype: MasterRevenueType,
    masteramenitie: MasterAmenitie,
    masterutilitie: MasterUtilitie,
    masterunitdetail: MasterUnitDetail,
    masterunitgallery: MasterUnitGallery,

});

export const Store = configureStore({
    reducer: Rootreducer,
});
