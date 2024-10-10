const mongoose = require("mongoose");

const JobEntrySchema = new mongoose.Schema({
  job: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  fee: {
    type: Number,
    required: true,
  },
  contractDate: {
    type: String,
    required: true,
  },
  deliveredDate: {
    type: String,
    required: true,
  },

  feeCollectedDate: {
    type: String,
    required: true,
  },
  feeCollected: {
    type: Number,
    required: true,
  },
  paymentTerms: {
    type: String,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
  expensesTerms: {
    type: String,
    required: true,
  },

  subContractor: {
    type: String,
    required: true,
  },
  subContractorFee: {
    type: Number,
    required: true,
  },
  modumFee: {
    type: Number,
    required: true,
  },
  netFee: {
    type: Number,
    required: true,
  },
  internalReview: {
    type: String,
    required: true,
  },

  corporateInPercentage: {
    type: Number,
    required: true,
  },
  corporateInDollar: {
    type: Number,
    required: true,
  },
  productionInPercentage: {
    type: Number,
    required: true,
  },
  productionInDollar: {
    type: Number,
    required: true,
  },

  appraiser_1: {
    type: String,
    required: true,
  },
  appraiser_1InPercentage: {
    type: Number,
    required: true,
  },
  appraiser_1InDollar: {
    type: Number,
    required: true,
  },

  appraiser_2: {
    type: String,
    required: true,
  },
  appraiser_2InPercentage: {
    type: Number,
    required: true,
  },
  appraiser_2InDollar: {
    type: Number,
    required: true,
  },

  appraiser_3: {
    type: String,
    required: true,
  },
  appraiser_3InPercentage: {
    type: Number,
    required: true,
  },
  appraiser_3InDollar: {
    type: Number,
    required: true,
  },

  irInPercentage: {
    type: Number,
    required: true,
  },
  irInDollar: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },

  hourlyCharger: {
    type: Boolean,
    default: false,
  },

  archived: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("jobEntry", JobEntrySchema);
