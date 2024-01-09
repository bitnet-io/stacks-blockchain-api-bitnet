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
import {
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierFromJSONTyped,
    NetworkIdentifierToJSON,
    RosettaSignature,
    RosettaSignatureFromJSON,
    RosettaSignatureFromJSONTyped,
    RosettaSignatureToJSON,
} from './';

/**
 * RosettaConstructionCombineRequest is the input to the /construction/combine endpoint. It contains the unsigned transaction blob returned by /construction/payloads and all required signatures to create a network transaction.
 * @export
 * @interface RosettaConstructionCombineRequest
 */
export interface RosettaConstructionCombineRequest {
    /**
     * 
     * @type {NetworkIdentifier}
     * @memberof RosettaConstructionCombineRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * 
     * @type {string}
     * @memberof RosettaConstructionCombineRequest
     */
    unsigned_transaction: string;
    /**
     * 
     * @type {Array<RosettaSignature>}
     * @memberof RosettaConstructionCombineRequest
     */
    signatures: Array<RosettaSignature>;
}

export function RosettaConstructionCombineRequestFromJSON(json: any): RosettaConstructionCombineRequest {
    return RosettaConstructionCombineRequestFromJSONTyped(json, false);
}

export function RosettaConstructionCombineRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaConstructionCombineRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network_identifier': NetworkIdentifierFromJSON(json['network_identifier']),
        'unsigned_transaction': json['unsigned_transaction'],
        'signatures': ((json['signatures'] as Array<any>).map(RosettaSignatureFromJSON)),
    };
}

export function RosettaConstructionCombineRequestToJSON(value?: RosettaConstructionCombineRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network_identifier': NetworkIdentifierToJSON(value.network_identifier),
        'unsigned_transaction': value.unsigned_transaction,
        'signatures': ((value.signatures as Array<any>).map(RosettaSignatureToJSON)),
    };
}

