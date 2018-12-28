package com.pmk.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pmk.app.dao.DAOBean;

/**
 * 2018-12-21
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Email extends DAOBean {
    private int emailId;
    private String type;
    private String value;
    private boolean primary;

    public Email() {}

    public int getEmailId() { return emailId; }
    public void setEmailId(int emailId) { this.emailId = emailId; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }

    public boolean isPrimary() { return primary; }
    public void setPrimary(boolean primary) { this.primary = primary; }

    @Override
    public String toString() {
        return "Email [id="+getId()+", emailId="+emailId+", type="+type+", value="+value+", primary="+primary+"]";
    }
}
