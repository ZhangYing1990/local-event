/**
 * Created by ZhiyuanSun on 16/9/21.
 */

class Address{
  constructor(lng, lat, province, city, district, street, streetNumber){
    this.lng = lng;
    this.lat = lat;
    this.province = province;
    this.city = city;
    this.district = district;
    this.street = street;
    this.streetNumber = streetNumber;
  }

  getAddress(){
    let address = "";
    if(this.province){
      address += this.province;
    }
    else
      return address;

    if(this.city)
      address += this.city;
    else
      return address;

    if(this.district)
      address += this.district;
    else
      return address;

    if(this.street)
      address += this.street;
    else
      return address;

    if(this.streetNumber)
      address += this.streetNumber;
    else
      return address;

    return address;
  }
}

module.exports = Address;