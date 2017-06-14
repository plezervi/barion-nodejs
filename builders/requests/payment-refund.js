/**
 * @file Barion Payment/Refund request builder
 * @author Viktor István Plézer <viktorplezer@gmail.com>
 * @version 1.0 
 */

/**
 * @typedef {Object} BarionPaymentRefundRequest
 * @property {String} POSKey - The secret API key of the shop, generated by Barion. 
 * @property {String} PaymentId - The identifier of the payment in the Barion system.
 * @property {BarionTransactionToRefund[]} TransactionsToRefund - An array containing the payment transactions to refund.
 */

/**
 * Creates an empty Barion Payment/Refund request
 * @constructor
 * @see https://docs.barion.com/Payment-Refund-v2
 */
function BarionPaymentRefundRequestBuilder() {

    this.request = {};

	/**
	 * Sets the POSKey field for the request.
	 * @param posKey {String} The secret API key of the shop, generated by Barion.
	 * @returns {BarionPaymentRefundRequestBuilder} The BarionPaymentRefundRequestBuilder object
	 */
	this.setPOSKey = function(posKey) {
		this.request.POSKey = posKey;
		return this;
	};

	/**
	 * Sets the PaymentId field for the request.
	 * @param paymentId {String} The identifier of the payment in the Barion system.
	 * @returns {BarionPaymentRefundRequestBuilder} The BarionPaymentRefundRequestBuilder object
	 */
	this.setPaymentId = function(paymentId) {
		this.request.PaymentId = paymentId;
		return this;
	};

    /**
	 * Sets the TransactionsToRefund field for the request.
	 * @param transactionsToRefund {BarionTransactionToRefund[]} An array containing the payment transactions to refund.
	 * @returns {BarionPaymentRefundRequestBuilder} The BarionPaymentRefundRequestBuilder object
	 */
	this.setTransactionsToRefund = function(transactionsToRefund) {
		this.request.TransactionsToRefund = transactionsToRefund;
		return this;
	};

    /**
     * Adds a refund transaction to the TransactionsToRefund field for the request.
     * @param transactionToRefund {BarionTransactionToRefund} A payment transaction to refund.
     * @returns {BarionPaymentRefundRequestBuilder} The BarionPaymentRefundRequestBuilder object
     */
	this.addTransactionToRefund = function(transactionToRefund) {
		if(this.request.TransactionsToRefund === undefined) {
			this.request.TransactionsToRefund = [];
		}
		this.request.TransactionsToRefund.push(transactionToRefund);
		return this;
	};

	/**
    * Build and returns the request for the Payment/Refund API call.
    * @returns {BarionPaymentRefundRequestBuilder} The request object
    */
	this.build = function() {
		return this.request;
	};
}

BarionPaymentRefundRequestBuilder.prototype.BarionTransactionToRefundBuilder  = require('../objects/payment-transactiontorefund.js');

module.exports = BarionPaymentRefundRequestBuilder;