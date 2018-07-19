package com.mia.wskafka.kafka;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Offer{
	@JsonProperty("stoken")
	private String stoken;
	@JsonProperty("offerId")
	private String offerId;
	
	public String getStoken() {
		return stoken;
	}
	public void setStoken(String stoken) {
		this.stoken = stoken;
	}
	public String getOfferId() {
		return offerId;
	}
	public void setOfferId(String offerId) {
		this.offerId = offerId;
	}
	
}
