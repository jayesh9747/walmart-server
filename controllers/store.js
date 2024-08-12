const store = require('../models/Store');
const distributionCenter = require('../models/DistributionCenter')
const { errorFunction } = require('../utils/errorFunction')

//  fetching from the distribution store 
exports.fetch_stores = async (req, res) => {

    try {
        const dis_centerId = req.store.id;

        if (!dis_centerId) {
            return res.status(400).json(
                errorFunction(false, "You are not Authenticated")
            );
        }

        const distributionCenter = await DistributionCenter.findById(dis_centerId).populate('storeIds');

        if (!distributionCenter) {
            return res.status(404).json(
                errorFunction(false, "Distribution Center not found")
            );
        }

        return res.status(200).json({
            success: true,
            stores: distributionCenter.storeIds
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json(
            errorFunction(false, "An error occurred while fetching stores", error.message)
        );
    }

}

// for the distribution-center
exports.Add_store = async (req, res) => {
    try {
        const dis_centerId = req.store.id;

        if (!dis_centerId) {
            return res.status(400).json(
                errorFunction(false, "You are not Authenticated")
            );
        }

        const { store_id } = req.body;

        if (!store_id) {
            res.status(400).json(
                errorFunction(false, "StoreId must be required")
            )
        }

        const query = {
            _id: store_id
        }

        const result = await store.findOne(query);

        if (!result) {
            res.status(400).json(
                errorFunction(false, "Sorry ,Store is Unavailable to add")
            )
        }

        const updatedDistributionCenter = await DistributionCenter.findOneAndUpdate(
            { _id: dis_centerId },
            { $addToSet: { storeIds: store_id } },
            { new: true }
        );

        if (!updatedDistributionCenter) {
            return res.status(400).json(
                errorFunction(false, "Failed to update distribution center")
            );
        }

        return res.status(200).json({
            success: true,
            message: "Store successfully added to the distribution center",
            data: updatedDistributionCenter
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json(
            errorFunction(false, "An error occurred while adding the store", error.message)
        );
    }
}

// fetch the inventory of perticular store 
exports.Inventories = async (req, res) => {

}
