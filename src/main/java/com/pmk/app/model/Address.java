package com.pmk.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pmk.app.dao.DAOBean;

/**
 * 2018-12-21
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Address extends DAOBean {
    private int addressId;
    private String street;
    private String city;
    private String state;
    private String zip;

    public Address() {}

    public int getAddressId() { return addressId; }
    public void setAddressId(int addressId) { this.addressId = addressId; }

    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }

    @Override
    public String toString() {
        return "Address [id="+getId()+",addressId="+addressId+", street="+street+", city="+city+", state="+state+", zip="+zip+"]";
    }
}
