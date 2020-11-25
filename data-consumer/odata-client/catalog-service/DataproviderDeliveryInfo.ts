/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DataproviderDeliveryInfo
 */
export interface DataproviderDeliveryInfo {
  /**
   * Delivery Date.
   * @nullable
   */
  deliveryDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[DataproviderDeliveryInfo.build]] instead.
 */
export function createDataproviderDeliveryInfo(json: any): DataproviderDeliveryInfo {
  return DataproviderDeliveryInfo.build(json);
}

/**
 * DataproviderDeliveryInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DataproviderDeliveryInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DataproviderDeliveryInfo> {
  /**
   * Representation of the [[DataproviderDeliveryInfo.deliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('deliveryDate', this, 'Edm.Date');

  /**
   * Creates an instance of DataproviderDeliveryInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DataproviderDeliveryInfo);
  }
}

export namespace DataproviderDeliveryInfo {
  /**
   * Metadata information on all properties of the `DataproviderDeliveryInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DataproviderDeliveryInfo>[] = [{
    originalName: 'deliveryDate',
    name: 'deliveryDate',
    type: 'Edm.Date',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DataproviderDeliveryInfo {
    return deserializeComplexTypeV4(json, DataproviderDeliveryInfo);
  }
}
