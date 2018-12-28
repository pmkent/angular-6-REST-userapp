package com.pmk.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pmk.app.dao.DAOBean;

/**
 * 2018-12-21
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Phone extends DAOBean {
    private int phoneId;
    private String number;
    private String type;
    private String areaCode;
    private String extension;
    private boolean primary;

    public Phone() {}

    public int getPhoneId() { return phoneId; }
    public void setPhoneId(int phoneId) { this.phoneId = phoneId; }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getAreaCode() { return areaCode; }
    public void setAreaCode(String areaCode) { this.areaCode = areaCode; }

    public String getExtension() { return extension; }
    public void setExtension(String extension) { this.extension = extension; }

    public boolean isPrimary() { return primary; }
    public void setPrimary(boolean primary) { this.primary = primary; }

    @Override
    public String toString() {
        return "Phone [id="+getId()+", phoneId="+phoneId+", number="+number+", type="+type+", primary="+primary+"]";
    }
}
