/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * GET request that returns unanchored transactions
 * @export
 * @interface UnanchoredTransactionListResponse
 */
export interface UnanchoredTransactionListResponse {
    /**
     * The number of unanchored transactions available
     * @type {number}
     * @memberof UnanchoredTransactionListResponse
     */
    total: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof UnanchoredTransactionListResponse
     */
    results: Array<object>;
}

export function UnanchoredTransactionListResponseFromJSON(json: any): UnanchoredTransactionListResponse {
    return UnanchoredTransactionListResponseFromJSONTyped(json, false);
}

export function UnanchoredTransactionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnanchoredTransactionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'results': json['results'],
    };
}

export function UnanchoredTransactionListResponseToJSON(value?: UnanchoredTransactionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'results': value.results,
    };
}

