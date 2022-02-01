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
            energyStates = 'DELETE FROM states WHERE last_updated < DATE_SUB(NOW(), INTERVAL 6 HOUR) AND entity_id LIKE "sensor.%_energy_%"'
            result = conn.execute(text(energyStates))
            self.log("energyStates query returned: %s", str(result.rowcount))

            climateStates = 'DELETE FROM states WHERE last_updated < DATE_SUB(NOW(), INTERVAL 24 HOUR) AND entity_id LIKE "sensor.ble_%"'
            result = conn.execute(text(climateStates))
            self.log("climateStates query returned: %s", str(result.rowcount))

            emptyEvents = 'DELETE FROM events WHERE event_data="{}" AND event_id NOT IN (SELECT DISTINCT event_id FROM states)'
            result = conn.execute(text(emptyEvents))
            self.log("emptyEvents query returned: %s", str(result.rowcount))