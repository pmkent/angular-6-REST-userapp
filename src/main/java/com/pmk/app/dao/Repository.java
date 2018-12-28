package com.pmk.app.dao;

import java.util.List;

/**
 * 2018-12-21
 */
public interface Repository<T> {
    public List<T> fetchAll();
    public T fetchOne(String id);
    public void upsert(T object);
    public void delete(T object);
}
