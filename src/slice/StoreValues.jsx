import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unit_id: null,
    pricingtable: {
        primary: {
            oumvalue: null,
            revenuetype: null,
            discount: null,
            discount_type: null,
        },
        secondary: {
            oumvalue: null,
            revenuetype: null,
            discount: null,
            discount_type: null,
        },
        otm_charges: {
            oumvalue: null,
            revenuetype: null,
            discount: null,
            discount_type: null,
        },
        refundable: {
            oumvalue: null,
            revenuetype: null,
            discount: null,
            discount_type: null,
        },
        inventory: {
            oumvalue: null,
            revenuetype: null,
            discount: null,
            discount_type: null,
        },
        parking: {
            oumvalue: null,
            revenuetype: null,
            discount: null,
            discount_type: null,
        },
        discount: 0,
        discount_type: null,
        total_pricing_value: 0,
    },
    amenities: {
        amenity: [],
        discount_type: 0,
        discount_amenities: 0,
        total_amount_amenities: 0,
    },
    utilities: {
        utility: [],
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
            const { oumValue, activeRevenueType, Discount, discount_type } =
                action.payload;
            // console.log("primary", oumValue, activeRevenueType);
            if (oumValue) {
                state.pricingtable.primary.oumvalue = oumValue || 0;
            }

            if (activeRevenueType) {
                state.pricingtable.primary.revenuetype =
                    activeRevenueType || null;
            }
            if (Discount) {
                state.pricingtable.primary.discount = Discount || 0;
            }
            if (discount_type) {
                state.pricingtable.primary.discount_type =
                    discount_type || null;
            }
            state.pricingtable.total_pricing_value += oumValue || 0;
        },
        setSeconadryValue(state, action) {
            const { oumValue, activeRevenue, Discount, discount_type } =
                action.payload;
            // console.log("Secondary", oumValue, activeRevenue);
            if (oumValue) {
                state.pricingtable.secondary.oumvalue = oumValue || 0;
            }
            if (activeRevenue) {
                state.pricingtable.secondary.revenuetype =
                    activeRevenue || null;
            }
            if (Discount) {
                state.pricingtable.secondary.discount = Discount || 0;
            }
            if (discount_type) {
                state.pricingtable.secondary.discount_type =
                    discount_type || null;
            }

            state.pricingtable.total_pricing_value += oumValue || 0;
        },
        setotmChargesValue(state, action) {
            const { oumValue, activeRevenue, Discount, discount_type } =
                action.payload;
            // console.log("charges", oumValue, activeRevenue);
            if (oumValue) {
                state.pricingtable.otm_charges.oumvalue = oumValue || 0;
            }
            if (activeRevenue) {
                state.pricingtable.otm_charges.revenuetype =
                    activeRevenue || null;
            }
            if (Discount) {
                state.pricingtable.otm_charges.discount = Discount || 0;
            }
            if (discount_type) {
                state.pricingtable.otm_charges.discount_type =
                    discount_type || null;
            }
            state.pricingtable.total_pricing_value += oumValue || 0;
        },
        setRefundableValue(state, action) {
            const { oumValue, activeRevenue, Discount, discount_type } =
                action.payload;
            // console.log("refundables", oumValue, activeRevenue);
            if (oumValue) {
                state.pricingtable.refundable.oumvalue = oumValue || 0;
            }
            if (activeRevenue) {
                state.pricingtable.refundable.revenuetype =
                    activeRevenue || null;
            }
            if (Discount) {
                state.pricingtable.refundable.discount = Discount || 0;
            }
            if (discount_type) {
                state.pricingtable.refundable.discount_type =
                    discount_type || null;
            }
            state.pricingtable.total_pricing_value += oumValue || 0;
        },
        setInventoryValue(state, action) {
            const { oumValue, activeRevenue, Discount, discount_type } =
                action.payload;
            // console.log("Inventory", oumValue, activeRevenue);
            if (oumValue) {
                state.pricingtable.inventory.oumvalue = oumValue || 0;
            }
            if (activeRevenue) {
                state.pricingtable.inventory.revenuetype =
                    activeRevenue || null;
            }
            if (Discount) {
                state.pricingtable.inventory.discount = Discount || 0;
            }
            if (discount_type) {
                state.pricingtable.inventory.discount_type =
                    discount_type || null;
            }

            state.pricingtable.total_pricing_value += oumValue || 0;
        },
        setParkingValue(state, action) {
            const { oumValue, activeRevenue, Discount, discount_type } =
                action.payload;
            // console.log("parking", oumValue, activeRevenue);
            if (oumValue) {
                state.pricingtable.parking.oumvalue = oumValue || 0;
            }
            if (activeRevenue) {
                state.pricingtable.parking.revenuetype = activeRevenue || null;
            }
            if (Discount) {
                state.pricingtable.parking.discount = Discount || 0;
            }
            if (discount_type) {
                state.pricingtable.parking.discount_type =
                    discount_type || null;
            }

            state.pricingtable.total_pricing_value += oumValue || 0;
        },
        setAmenitiesvalue(state, action) {
            const {
                selectedAmenities,
                discount_type,
                discount_amenities,
                selectedAmount,
            } = action.payload;
            // console.log(action.payload);
            if (selectedAmenities) {
                state.amenities.amenity = selectedAmenities || [];
            }
            if (discount_type) {
                state.amenities.discount_type = discount_type || null;
            }
            if (discount_amenities) {
                state.amenities.discount_amenities = discount_amenities || 0;
            }
            if (selectedAmount) {
                state.amenities.total_amount_amenities += selectedAmount || 0;
            }
        },
        setUtiltiesValue(state, action) {
            const {
                selectedUtilityIds,
                discount_type,
                discount_utilities,
                selectedAmount,
            } = action.payload;
            if (selectedUtilityIds) {
                state.utilities.utility = selectedUtilityIds || [];
            }
            if (discount_type) {
                state.utilities.discount_type = discount_type || null;
            }
            if (discount_utilities) {
                state.utilities.discount_utilitues = discount_utilities || 0;
            }
            if (selectedAmount) {
                state.utilities.total_amount_utilities += selectedAmount || 0;
            }
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
            const tax = parseFloat(
                (
                    (pricingAmount + utilitiesAmount + amenitiesAmount) *
                    0.1
                ).toFixed(2)
            );

            state.grandAmount = total;
            state.grandDiscountValue = discount;
            state.grandTaxValue = tax;
            state.grandTotalValue = total + tax - discount;
        },
    },
});

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
