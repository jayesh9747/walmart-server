const available_driver = require('../models/AvailabilityStatus')
const { errorFunction } = require('../utils/errorFunction')
const distribution_center = require('../models/DistributionCenter');


exports.FetchDriver = async (req, res) => {
    try {

        const dsId = req.store.id;

        if (!dsId) {
            return res.json(errorFunction(false, "Distribution Center field is required"));
        }

        const DC = await distribution_center.findOne({ dsId });

        if (!DC) {
            return res.json(errorFunction(false, "Distribution Center Not found"));
        }

        const { status } = req.query;

        const statusOrder = ['assigned', 'onDelivery', 'available'];

        let filter = { dsId };
        if (status && statusOrder.includes(status)) {
            filter.status = status;
        }

        const allAvailableDriver = available_driver.find(filter);

        return res.status(200).json({
            success: true,
            data: allAvailableDriver,
        })

    } catch (error) {
        return res.status(500).json(errorFunction(false, error.message))
    }
}