import { config } from './Config'
import {units, amenities, utilities, options, pricing, quotationdetails, revenue, gallery, unitdetails, userdetails} from './EndPoints'

const buildUrl = (path) => `${config.protocol}://${config.host}:${config.port}${path}`

export const GetunitAPI = buildUrl(units)
export const GetamenitiesAPI = buildUrl(amenities)
export const GetutilitiesAPI = buildUrl(utilities)
export const GetoptionsAPI = buildUrl(options)
export const GetpricingAPI = buildUrl(pricing)
export const GetquotationdetailsAPI = buildUrl(quotationdetails)
export const GetrevenueAPI = buildUrl(revenue)
export const GetgalleryAPI = buildUrl(gallery)
export const GetunitdetailsAPI = buildUrl(unitdetails)

export const GetUserDetailsApI =  buildUrl(userdetails)



// console.log(GetunitAPI, GetamenitiesAPI, GetutilitiesAPI, GetoptionsAPI, GetpricingAPI, GetquotationdetailsAPI, GetrevenueAPI, GetgalleryAPI, GetunitdetailsAPI)