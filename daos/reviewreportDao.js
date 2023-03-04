const ReviewReport = require("../models/reviewreportModel");
const Create = async (req) => {
    const result = await ReviewReport.create({
        ...req,
        state: false
    });
    return result;
};

module.exports = {Create};