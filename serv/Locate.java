package com.serv;

public class Locate {

	Double lat;
	Double lon;

	public Locate() {
		super();
	}
	
	public Locate(Double lat, Double lon) {
		super();
		this.lat = lat;
		this.lon = lon;
	}
	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLon() {
		return lon;
	}
	public void setLon(Double lon) {
		this.lon = lon;
	}	
}
