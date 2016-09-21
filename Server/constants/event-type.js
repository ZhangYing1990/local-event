/**
 * Created by zhiyuans on 9/21/2016.
 */
const Enum = require('es6-enum');

const EVENT_TYPE = Enum('YAN_CHANG_HUI', 'HUA_JU', 'ZHAN_LAN', 'HUO_DONG', 'DIAN_YING', 'YIN_YUE_HUI', 'WU_DAO', 'XI_QU');

module.exports = EVENT_TYPE;