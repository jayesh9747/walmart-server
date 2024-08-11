const store = require('../models/Store');
const Delivery = require('../models/Delivery');
const { errorFunction } = require('../utils/errorFunction');


exports.AssignDelivery = async (req, res) => {
    try {
        const dis_centerId = req.store.id;

        const { deliveryId } = req.params;

        if (!dis_centerId) {
            return res.json(errorFunction(false, "Distribution Center field is required"));
        }

        if (!deliveryId) {
            return res.json(errorFunction(false, "This delivery is not available"));
        }



        const DC = await distribution_center.findOne({ dsId });

        if (!DC) {
            return res.json(errorFunction(false, "Distribution Center Not found"));
        }



    } catch (error) {
        return res.json(
            errorFunction(false, `Some Error in Assign Delivery`, error.message)
        )
    }

}

exports.Deliveries = async (req, res) => {
    try {
        const dis_centerId = req.store.id;
        const { deliveryId } = req.params;
        const { status } = req.query;

        if (!dis_centerId) {
            return res.status(400).json(
                errorFunction(false, "Distribution Center field is required")
            );
        }

        const query = {
            DistributionCenterId: dis_centerId
        };

        if (deliveryId) {
            query._id = deliveryId;
        }

        if (status) {
            query.status = status
        }

        const deliveries = await Delivery.find(query);

        if (deliveryId && deliveries.length === 0) {
            return res.status(404).json(
                errorFunction(false, "Delivery not found")
            );
        }

        return res.json({
            status: true,
            data: deliveries
        })

    } catch (error) {
        return res.status(500).json(
            errorFunction(false, `Some Error in fetch Delivery`, error.message)
        )
    }
}