/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForComplexTypeV4, deserializeComplexTypeV4, FunctionImportRequestBuilderV4, FunctionImportParameter } from '@sap-cloud-sdk/core';
import { DataproviderDeliveryInfo } from './DataproviderDeliveryInfo';

/**
 * Type of the parameters to be passed to [[getDeliveryDate]].
 */
export interface GetDeliveryDateParameters {
}

/**
 * Get Delivery Date.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getDeliveryDate(parameters: GetDeliveryDateParameters): FunctionImportRequestBuilderV4<GetDeliveryDateParameters, DataproviderDeliveryInfo> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/catalog', 'getDeliveryDate', (data) => transformReturnValueForComplexTypeV4(data, (data) => deserializeComplexTypeV4(data, DataproviderDeliveryInfo)), params);
}

export const functionImports = {
  getDeliveryDate
};
