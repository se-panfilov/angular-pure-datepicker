/*START.DEV_ONLY*/
var module = {
  /*END.DEV_ONLY*/

  DateModel: function (DateUtils) {
    /*START.DEV_ONLY*/
    'use strict';
    /*END.DEV_ONLY*/

    function DateModel(dt) {
      //TODO (S.Panfilov) throwed error must be a const
      if (!dt || Number.isNaN(+dt) || !Number.isFinite(+dt)) throw 'NaN or null';
      this.d = DateUtils.getDay(+dt);
      this.dow = DateUtils.getDayOfWeek(+dt);
      this.m = DateUtils.getMonth(+dt);
      this.y = DateUtils.getYear(+dt);
      this.dt = +dt;
      this.tz = new Date(+dt).getTimezoneOffset();

      return this;
    }

    return DateModel;
  },

  /*START.DEV_ONLY*/
  dev: null
};
/*END.DEV_ONLY*/