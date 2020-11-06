using { dataprovider } from '../db/schema';

service CatalogService {
    function getDeliveryDate() returns dataprovider.DeliveryInfo;
}