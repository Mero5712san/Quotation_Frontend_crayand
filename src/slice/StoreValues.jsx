import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unit_id: null,
    pricingtable: {
        primary: {
            oumvalue: null,
            revenuetype: null,
        },
        secondary: {
            oumvalue: null,
            revenuetype: null,
        },
        otm_charges: {
            oumvalue: null,
            revenuetype: null,
        },
        refundable: {
            oumvalue: null,
            revenuetype: null,
        },
        inventory: {
            oumvalue: null,
            revenuetype: null,
        },
        parking: {
            oumvalue: null,
            revenuetype: null,
        },
        discount: 0,
        discount_type: null,
        total_pricing_value: 0,
    },
    amenities: {
        id: [],
        amount: 0,
        is_free: null,
        discount_amenities: 0,
        total_amount_amenities: 0,
    },
    utilities: {
        id: [],
        amount: 0,
        is_free: null,
        discount_type: null,
        discount_utilitues: 0,
        total_amount_utilities: 0,
    },
    grandAmount: 0,
    grandDiscountValue: 0,
    grandTotalValue: 0,
    grandTaxValue: 0,
};

const Storevalues = createSlice({
    name: "allStates",
    initialState: initialState,
    reducers: {
        setPrimaryValue(state, action) {
            const { oumValue, revenueType } = action.payload;
            state.pricingtable.primary.oumvalue = oumValue;
            state.pricingtable.primary.revenuetype = revenueType;

            state.pricingtable.total_pricing_value += oumValue;
        },
        setSeconadryValue(state, action) {
            const { oumValue, revenueType } = action.payload;
            state.pricingtable.secondary.oumvalue = oumValue;
            state.pricingtable.secondary.revenuetype = revenueType;

            state.pricingtable.total_pricing_value += oumValue;
        },
        setotmChargesValue(state, action) {
            const { oumValue, revenueType } = action.payload;
            state.pricingtable.otm_charges.oumvalue = oumValue;
            state.pricingtable.otm_charges.revenuetype = revenueType;

            state.pricingtable.total_pricing_value += oumValue;
        },
        setRefundableValue(state, action) {
            const { oumValue, revenueType } = action.payload;
            state.pricingtable.refundable.oumvalue = oumValue;
            state.pricingtable.refundable.revenuetype = revenueType;

            state.pricingtable.total_pricing_value += oumValue;
        },
        setInventoryValue(state, action) {
            const { oumValue, revenueType } = action.payload;
            state.pricingtable.inventory.oumvalue = oumValue;
            state.pricingtable.inventory.revenuetype = revenueType;

            state.pricingtable.total_pricing_value += oumValue;
        },
        setParkingValue(state, action) {
            const { oumValue, revenueType } = action.payload;
            state.pricingtable.parking.oumvalue = oumValue;
            state.pricingtable.parking.revenuetype = revenueType;

            state.pricingtable.total_pricing_value += oumValue;
        },
        setAmenitiesvalue(state, action) {
            const { Id, Amount, is_Free } = action.payload;
            state.amenities.id = addId(Id);
            state.amenities.amount = Amount;
            state.amenities.is_free = is_Free;
            state.amenities.total_amount_amenities += Amount;
        },
        setUtiltiesValue(state, action) {
            const { Id, Amount, is_Free } = action.payload;
            state.utilities.id = addId(Id);
            state.utilities.amount = Amount;
            state.utilities.is_free = is_Free;
            state.utilities.total_amount_utilities += Amount;
        },
        setGrandTotalValues(state, action) {
            const pricingAmount = state.pricingtable.total_pricing_value;
            const utilitiesAmount = state.utilities.total_amount_utilities;
            const amenitiesAmount = state.amenities.total_amount_amenities;

            const pricingDiscount = state.pricingtable.discount;
            const amenityDiscount = state.amenities.discount_amenities;
            const utilityDiscount = state.utilities.discount_utilitues;

            const total = pricingAmount + utilitiesAmount + amenitiesAmount;
            const discount =
                pricingDiscount + amenityDiscount + utilityDiscount;
            const tax =
                ((pricingAmount + utilitiesAmount + amenitiesAmount) / 10) *
                100;
            state.grandAmount = total;
            state.grandDiscountValue = discount;
            state.grandTaxValue = tax;
            state.grandTotalValue = total + tax - discount;
        },
    },
});

const addId = (id) => {
    return id;
};

export const {
    setPrimaryValue,
    setSeconadryValue,
    setotmChargesValue,
    setRefundableValue,
    setInventoryValue,
    setParkingValue,
    setAmenitiesvalue,
    setUtiltiesValue,
    setGrandTotalValues,
} = Storevalues.actions;

export const StoreValue = Storevalues.reducer;
