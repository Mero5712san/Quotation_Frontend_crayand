import { createSlice } from "@reduxjs/toolkit";

const users = [];
const units = [];
const quotationdetails = [];
const options = [];
const pricingtable = [];
const revenuetype = [];
const amenities = [];
const utilities = [];
const unitdetails = [];
const unitgallery = [];

const MasterUsers = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        addMasterUsers(state, action) {
            return action.payload;
        },
    },
});

const MasterUnits = createSlice({
    name: "units",
    initialState: units,
    reducers: {
        addMasterUnits(state, action) {
            return action.payload;
        },
    },
});

const MasterQuotationDetails = createSlice({
    name: "quotationdetails",
    initialState: quotationdetails,
    reducers: {
        addMasterQuotationDetails(state, action) {
            return action.payload;
        },
    },
});

const MasterOptions = createSlice({
    name: "options",
    initialState: options,
    reducers: {
        addMasterOptions(state, action) {
            return action.payload;
        },
    },
});

const MasterPricingTables = createSlice({
    name: "pricingtable",
    initialState: pricingtable,
    reducers: {
        addMasterPricingTables(state, action) {
            return action.payload;
        },
    },
});

const MasterRevenueTypes = createSlice({
    name: "revenuetype",
    initialState: revenuetype,
    reducers: {
        addMasterRevenueType(state, action) {
            return action.payload;
        },
    },
});

const MasterAmenities = createSlice({
    name: "amenities",
    initialState: amenities,
    reducers: {
        addMasterAmenities(state, action) {
            return action.payload;
        },
    },
});

const MasterUtilities = createSlice({
    name: "utilities",
    initialState: utilities,
    reducers: {
        addMasterUtilities(state, action) {
            return action.payload;
        },
    },
});

const MasterUnitDetails = createSlice({
    name: "unitdetails",
    initialState: unitdetails,
    reducers: {
        addMasterunitDetails(state, action) {
            return action.payload;
        },
    },
});

const MasterUnitGallerys = createSlice({
    name: "unitgallery",
    initialState: unitgallery,
    reducers: {
        addMasterUnitGallery(state, action) {
            return action.payload;
        },
    },
});

export const { addMasterUsers } = MasterUsers.actions;
export const { addMasterUnits } = MasterUnits.actions;
export const { addMasterQuotationDetails } = MasterQuotationDetails.actions;
export const { addMasterOptions } = MasterOptions.actions;
export const { addMasterPricingTables } = MasterPricingTables.actions;
export const { addMasterRevenueType } = MasterRevenueTypes.actions;
export const { addMasterAmenities } = MasterAmenities.actions;
export const { addMasterUtilities } = MasterUtilities.actions;
export const { addMasterunitDetails } = MasterUnitDetails.actions;
export const { addMasterUnitGallery } = MasterUnitGallerys.actions;

export const MasterUser = MasterUsers.reducer;
export const MasterUnit = MasterUnits.reducer;
export const MasterQuotationDetail = MasterQuotationDetails.reducer;
export const MasterOption = MasterOptions.reducer;
export const MasterPricingTable = MasterPricingTables.reducer;
export const MasterRevenueType = MasterRevenueTypes.reducer;
export const MasterAmenitie = MasterAmenities.reducer;
export const MasterUtilitie = MasterUtilities.reducer;
export const MasterUnitDetail = MasterUnitDetails.reducer;
export const MasterUnitGallery = MasterUnitGallerys.reducer;
