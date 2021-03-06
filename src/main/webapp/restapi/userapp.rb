#
# 
#
# Generated by <a href="http://enunciate.webcohesion.com">Enunciate</a>.
#
require 'json'

# adding necessary json serialization methods to standard classes.
class Object
  def to_jaxb_json_hash
    return self
  end
  def self.from_json o
    return o
  end
end

class String
  def self.from_json o
    return o
  end
end

class Boolean
  def self.from_json o
    return o
  end
end

class Numeric
  def self.from_json o
    return o
  end
end

class Time
  #json time is represented as number of milliseconds since epoch
  def to_jaxb_json_hash
    return (to_i * 1000) + (usec / 1000)
  end
  def self.from_json o
    if o.nil?
      return nil
    else
      return Time.at(o / 1000, (o % 1000) * 1000)
    end
  end
end

class Array
  def to_jaxb_json_hash
    a = Array.new
    each { | _item | a.push _item.to_jaxb_json_hash }
    return a
  end
end

class Hash
  def to_jaxb_json_hash
    h = Hash.new
    each { | _key, _value | h[_key.to_jaxb_json_hash] = _value.to_jaxb_json_hash }
    return h
  end
end

module EnunciateHelpers
  LAMB_CLASS_AWARE = ->(_item) do
    java_clazz = _item['@class']
    clazz_array_parts = java_clazz.split('.')
    short_clazz = clazz_array_parts.pop
    clazz_package = clazz_array_parts.map do |e| e[0] = e.first.capitalize; e end.join("::")
    clazz = clazz_package + "::" + short_clazz
    Object.const_get(clazz).send(:from_json, _item)
  end
end


module Com

module Pmk

module App

module Dao

  # (no documentation provided)
  class DAOBean 

    # (no documentation provided)
    attr_accessor :id
    # (no documentation provided)
    attr_accessor :createDt
    # (no documentation provided)
    attr_accessor :updateDt
    # (no documentation provided)
    attr_accessor :updateBy
    # (no documentation provided)
    attr_accessor :deleteDt

    # the json hash for this DAOBean
    def to_jaxb_json_hash
      _h = {}
      _h['id'] = id.to_jaxb_json_hash unless id.nil?
      _h['createDt'] = createDt.to_jaxb_json_hash unless createDt.nil?
      _h['updateDt'] = updateDt.to_jaxb_json_hash unless updateDt.nil?
      _h['updateBy'] = updateBy.to_jaxb_json_hash unless updateBy.nil?
      _h['deleteDt'] = deleteDt.to_jaxb_json_hash unless deleteDt.nil?
      return _h
    end

    # the json (string form) for this DAOBean
    def to_json
      to_jaxb_json_hash.to_json
    end

    #initializes this DAOBean with a json hash
    def init_jaxb_json_hash(_o)
        if !_o['id'].nil?
          _oa = _o['id']
            if(_oa.is_a? Hash)
              @id = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @id =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @id = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @id.push String.from_json(_item)
                 else
                   @id.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @id = _oa
            end
          end
        if !_o['createDt'].nil?
          _oa = _o['createDt']
            if(_oa.is_a? Hash)
              @createDt = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @createDt =  Time.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @createDt = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @createDt.push Time.from_json(_item)
                 else
                   @createDt.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @createDt = _oa
            end
          end
        if !_o['updateDt'].nil?
          _oa = _o['updateDt']
            if(_oa.is_a? Hash)
              @updateDt = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @updateDt =  Time.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @updateDt = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @updateDt.push Time.from_json(_item)
                 else
                   @updateDt.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @updateDt = _oa
            end
          end
        if !_o['updateBy'].nil?
          _oa = _o['updateBy']
            if(_oa.is_a? Hash)
              @updateBy = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @updateBy =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @updateBy = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @updateBy.push String.from_json(_item)
                 else
                   @updateBy.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @updateBy = _oa
            end
          end
        if !_o['deleteDt'].nil?
          _oa = _o['deleteDt']
            if(_oa.is_a? Hash)
              @deleteDt = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @deleteDt =  Time.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @deleteDt = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @deleteDt.push Time.from_json(_item)
                 else
                   @deleteDt.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @deleteDt = _oa
            end
          end
    end

    # constructs a DAOBean from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

module Com

module Pmk

module App

module Model

  # (no documentation provided)
  class User < Com::Pmk::App::Dao::DAOBean 

    # (no documentation provided)
    attr_accessor :userId
    # (no documentation provided)
    attr_accessor :username
    # (no documentation provided)
    attr_accessor :firstName
    # (no documentation provided)
    attr_accessor :lastName
    # (no documentation provided)
    attr_accessor :password
    # (no documentation provided)
    attr_accessor :token
    # (no documentation provided)
    attr_accessor :addresses
    # (no documentation provided)
    attr_accessor :roles
    # (no documentation provided)
    attr_accessor :country
    # (no documentation provided)
    attr_accessor :website
    # (no documentation provided)
    attr_accessor :phones
    # (no documentation provided)
    attr_accessor :emails
    # (no documentation provided)
    attr_accessor :showpassword

    # the json hash for this User
    def to_jaxb_json_hash
      _h = super
      _h['userId'] = userId.to_jaxb_json_hash unless userId.nil?
      _h['username'] = username.to_jaxb_json_hash unless username.nil?
      _h['firstName'] = firstName.to_jaxb_json_hash unless firstName.nil?
      _h['lastName'] = lastName.to_jaxb_json_hash unless lastName.nil?
      _h['password'] = password.to_jaxb_json_hash unless password.nil?
      _h['token'] = token.to_jaxb_json_hash unless token.nil?
      if !addresses.nil?
        _ha = Array.new
        addresses.each { | _item | _ha.push _item.to_jaxb_json_hash }
        _h['addresses'] = _ha
      end
      if !roles.nil?
        _ha = Array.new
        roles.each { | _item | _ha.push _item.to_jaxb_json_hash }
        _h['roles'] = _ha
      end
      _h['country'] = country.to_jaxb_json_hash unless country.nil?
      _h['website'] = website.to_jaxb_json_hash unless website.nil?
      if !phones.nil?
        _ha = Array.new
        phones.each { | _item | _ha.push _item.to_jaxb_json_hash }
        _h['phones'] = _ha
      end
      if !emails.nil?
        _ha = Array.new
        emails.each { | _item | _ha.push _item.to_jaxb_json_hash }
        _h['emails'] = _ha
      end
      _h['showpassword'] = showpassword.to_jaxb_json_hash unless showpassword.nil?
      return _h
    end

    #initializes this User with a json hash
    def init_jaxb_json_hash(_o)
      super _o
        if !_o['userId'].nil?
          _oa = _o['userId']
            if(_oa.is_a? Hash)
              @userId = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @userId =  Fixnum.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @userId = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @userId.push Fixnum.from_json(_item)
                 else
                   @userId.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @userId = _oa
            end
          end
        if !_o['username'].nil?
          _oa = _o['username']
            if(_oa.is_a? Hash)
              @username = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @username =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @username = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @username.push String.from_json(_item)
                 else
                   @username.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @username = _oa
            end
          end
        if !_o['firstName'].nil?
          _oa = _o['firstName']
            if(_oa.is_a? Hash)
              @firstName = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @firstName =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @firstName = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @firstName.push String.from_json(_item)
                 else
                   @firstName.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @firstName = _oa
            end
          end
        if !_o['lastName'].nil?
          _oa = _o['lastName']
            if(_oa.is_a? Hash)
              @lastName = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @lastName =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @lastName = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @lastName.push String.from_json(_item)
                 else
                   @lastName.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @lastName = _oa
            end
          end
        if !_o['password'].nil?
          _oa = _o['password']
            if(_oa.is_a? Hash)
              @password = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @password =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @password = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @password.push String.from_json(_item)
                 else
                   @password.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @password = _oa
            end
          end
        if !_o['token'].nil?
          _oa = _o['token']
            if(_oa.is_a? Hash)
              @token = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @token =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @token = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @token.push String.from_json(_item)
                 else
                   @token.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @token = _oa
            end
          end
        if !_o['addresses'].nil?
          _oa = _o['addresses']
            if(_oa.is_a? Hash)
              @addresses = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @addresses =  Com::Pmk::App::Model::Address.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @addresses = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @addresses.push Com::Pmk::App::Model::Address.from_json(_item)
                 else
                   @addresses.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @addresses = _oa
            end
          end
        if !_o['roles'].nil?
          _oa = _o['roles']
            if(_oa.is_a? Hash)
              @roles = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @roles =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @roles = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @roles.push String.from_json(_item)
                 else
                   @roles.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @roles = _oa
            end
          end
        if !_o['country'].nil?
          _oa = _o['country']
            if(_oa.is_a? Hash)
              @country = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @country =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @country = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @country.push String.from_json(_item)
                 else
                   @country.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @country = _oa
            end
          end
        if !_o['website'].nil?
          _oa = _o['website']
            if(_oa.is_a? Hash)
              @website = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @website =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @website = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @website.push String.from_json(_item)
                 else
                   @website.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @website = _oa
            end
          end
        if !_o['phones'].nil?
          _oa = _o['phones']
            if(_oa.is_a? Hash)
              @phones = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @phones =  Com::Pmk::App::Model::Phone.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @phones = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @phones.push Com::Pmk::App::Model::Phone.from_json(_item)
                 else
                   @phones.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @phones = _oa
            end
          end
        if !_o['emails'].nil?
          _oa = _o['emails']
            if(_oa.is_a? Hash)
              @emails = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @emails =  Com::Pmk::App::Model::Email.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @emails = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @emails.push Com::Pmk::App::Model::Email.from_json(_item)
                 else
                   @emails.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @emails = _oa
            end
          end
        if !_o['showpassword'].nil?
          _oa = _o['showpassword']
            if(_oa.is_a? Hash)
              @showpassword = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @showpassword =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @showpassword = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @showpassword.push String.from_json(_item)
                 else
                   @showpassword.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @showpassword = _oa
            end
          end
    end

    # constructs a User from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

module Com

module Pmk

module App

module Model

  # (no documentation provided)
  class Phone < Com::Pmk::App::Dao::DAOBean 

    # (no documentation provided)
    attr_accessor :phoneId
    # (no documentation provided)
    attr_accessor :number
    # (no documentation provided)
    attr_accessor :type
    # (no documentation provided)
    attr_accessor :areaCode
    # (no documentation provided)
    attr_accessor :extension
    # (no documentation provided)
    attr_accessor :primary

    # the json hash for this Phone
    def to_jaxb_json_hash
      _h = super
      _h['phoneId'] = phoneId.to_jaxb_json_hash unless phoneId.nil?
      _h['number'] = number.to_jaxb_json_hash unless number.nil?
      _h['type'] = type.to_jaxb_json_hash unless type.nil?
      _h['areaCode'] = areaCode.to_jaxb_json_hash unless areaCode.nil?
      _h['extension'] = extension.to_jaxb_json_hash unless extension.nil?
      _h['primary'] = primary.to_jaxb_json_hash unless primary.nil?
      return _h
    end

    #initializes this Phone with a json hash
    def init_jaxb_json_hash(_o)
      super _o
        if !_o['phoneId'].nil?
          _oa = _o['phoneId']
            if(_oa.is_a? Hash)
              @phoneId = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @phoneId =  Fixnum.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @phoneId = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @phoneId.push Fixnum.from_json(_item)
                 else
                   @phoneId.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @phoneId = _oa
            end
          end
        if !_o['number'].nil?
          _oa = _o['number']
            if(_oa.is_a? Hash)
              @number = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @number =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @number = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @number.push String.from_json(_item)
                 else
                   @number.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @number = _oa
            end
          end
        if !_o['type'].nil?
          _oa = _o['type']
            if(_oa.is_a? Hash)
              @type = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @type =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @type = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @type.push String.from_json(_item)
                 else
                   @type.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @type = _oa
            end
          end
        if !_o['areaCode'].nil?
          _oa = _o['areaCode']
            if(_oa.is_a? Hash)
              @areaCode = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @areaCode =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @areaCode = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @areaCode.push String.from_json(_item)
                 else
                   @areaCode.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @areaCode = _oa
            end
          end
        if !_o['extension'].nil?
          _oa = _o['extension']
            if(_oa.is_a? Hash)
              @extension = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @extension =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @extension = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @extension.push String.from_json(_item)
                 else
                   @extension.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @extension = _oa
            end
          end
        if !_o['primary'].nil?
          _oa = _o['primary']
            if(_oa.is_a? Hash)
              @primary = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @primary =  Boolean.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @primary = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @primary.push Boolean.from_json(_item)
                 else
                   @primary.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @primary = _oa
            end
          end
    end

    # constructs a Phone from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

module Com

module Pmk

module App

module Model

  # (no documentation provided)
  class Address < Com::Pmk::App::Dao::DAOBean 

    # (no documentation provided)
    attr_accessor :addressId
    # (no documentation provided)
    attr_accessor :street
    # (no documentation provided)
    attr_accessor :city
    # (no documentation provided)
    attr_accessor :state
    # (no documentation provided)
    attr_accessor :zip

    # the json hash for this Address
    def to_jaxb_json_hash
      _h = super
      _h['addressId'] = addressId.to_jaxb_json_hash unless addressId.nil?
      _h['street'] = street.to_jaxb_json_hash unless street.nil?
      _h['city'] = city.to_jaxb_json_hash unless city.nil?
      _h['state'] = state.to_jaxb_json_hash unless state.nil?
      _h['zip'] = zip.to_jaxb_json_hash unless zip.nil?
      return _h
    end

    #initializes this Address with a json hash
    def init_jaxb_json_hash(_o)
      super _o
        if !_o['addressId'].nil?
          _oa = _o['addressId']
            if(_oa.is_a? Hash)
              @addressId = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @addressId =  Fixnum.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @addressId = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @addressId.push Fixnum.from_json(_item)
                 else
                   @addressId.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @addressId = _oa
            end
          end
        if !_o['street'].nil?
          _oa = _o['street']
            if(_oa.is_a? Hash)
              @street = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @street =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @street = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @street.push String.from_json(_item)
                 else
                   @street.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @street = _oa
            end
          end
        if !_o['city'].nil?
          _oa = _o['city']
            if(_oa.is_a? Hash)
              @city = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @city =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @city = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @city.push String.from_json(_item)
                 else
                   @city.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @city = _oa
            end
          end
        if !_o['state'].nil?
          _oa = _o['state']
            if(_oa.is_a? Hash)
              @state = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @state =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @state = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @state.push String.from_json(_item)
                 else
                   @state.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @state = _oa
            end
          end
        if !_o['zip'].nil?
          _oa = _o['zip']
            if(_oa.is_a? Hash)
              @zip = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @zip =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @zip = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @zip.push String.from_json(_item)
                 else
                   @zip.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @zip = _oa
            end
          end
    end

    # constructs a Address from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

module Com

module Pmk

module App

module Model

  # (no documentation provided)
  class Email < Com::Pmk::App::Dao::DAOBean 

    # (no documentation provided)
    attr_accessor :emailId
    # (no documentation provided)
    attr_accessor :type
    # (no documentation provided)
    attr_accessor :value
    # (no documentation provided)
    attr_accessor :primary

    # the json hash for this Email
    def to_jaxb_json_hash
      _h = super
      _h['emailId'] = emailId.to_jaxb_json_hash unless emailId.nil?
      _h['type'] = type.to_jaxb_json_hash unless type.nil?
      _h['value'] = value.to_jaxb_json_hash unless value.nil?
      _h['primary'] = primary.to_jaxb_json_hash unless primary.nil?
      return _h
    end

    #initializes this Email with a json hash
    def init_jaxb_json_hash(_o)
      super _o
        if !_o['emailId'].nil?
          _oa = _o['emailId']
            if(_oa.is_a? Hash)
              @emailId = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @emailId =  Fixnum.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @emailId = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @emailId.push Fixnum.from_json(_item)
                 else
                   @emailId.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @emailId = _oa
            end
          end
        if !_o['type'].nil?
          _oa = _o['type']
            if(_oa.is_a? Hash)
              @type = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @type =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @type = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @type.push String.from_json(_item)
                 else
                   @type.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @type = _oa
            end
          end
        if !_o['value'].nil?
          _oa = _o['value']
            if(_oa.is_a? Hash)
              @value = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @value =  String.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @value = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @value.push String.from_json(_item)
                 else
                   @value.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @value = _oa
            end
          end
        if !_o['primary'].nil?
          _oa = _o['primary']
            if(_oa.is_a? Hash)
              @primary = EnunciateHelpers::LAMB_CLASS_AWARE.call(_oa) if _oa['@class']
              @primary =  Boolean.from_json(_oa) unless _oa['@class']
            elsif (_oa.is_a? Array)
              #an array(of hashes hopefully) or scalar
              @primary = Array.new
              _oa.each { | _item | 
                 if ((_item.nil? || _item['@class'].nil?)rescue true)
                   @primary.push Boolean.from_json(_item)
                 else
                   @primary.push EnunciateHelpers::LAMB_CLASS_AWARE.call(_item)
                 end
               }
            else
                @primary = _oa
            end
          end
    end

    # constructs a Email from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end
