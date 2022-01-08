import hassapi as hass
import datetime

import sqlalchemy
from sqlalchemy.sql import text

class PurgeManual(hass.Hass):
    def initialize(self):
        self._mysql_dsn = self.args.get("dsn")
        self.run_every(self.start_cb, "now", 60 * 60)

    def start_cb(self, kwargs):
        engine = sqlalchemy.create_engine(self._mysql_dsn)
        with engine.begin() as conn:
            energyStates = 'DELETE FROM states WHERE last_updated < DATE_SUB(NOW(), INTERVAL 12 HOUR) AND entity_id LIKE "sensor.%_energy_%"'
            result = conn.execute(text(energyStates))
            self.log("energyStates query returned: %s", str(result.rowcount))

            climateStates = 'DELETE FROM states WHERE last_updated < DATE_SUB(NOW(), INTERVAL 48 HOUR) AND entity_id LIKE "sensor.ble_%"'
            result = conn.execute(text(climateStates))
            self.log("climateStates query returned: %s", str(result.rowcount))