import React, { useState, useEffect, Fragment } from "react";
import { Stack } from "@mui/material";
import { DashboardTemperature } from "sections/dashboard/dashboard-temperature";
import { DashboardPressure } from "sections/dashboard/dashboard-pressure";
import { DashboardHumidity } from "sections/dashboard/dashboard-humidity";
import { DashboardDust } from "sections/dashboard/dashboard-dust";
import { DashboardAirPurity } from "sections/dashboard/dashboard-airpurity";

interface IReading {
  temperature: string;
  humidity: string;
  dust_concentration: string;
  pressure: string;
  air_purity: string;
}

const Dashboard: React.FC<any> = ({}) => {
  const [readings, setReadings] = useState<Array<IReading>>([]);
  const [lastReading, setLastReading] = useState<IReading>({
    temperature: "",
    humidity: "",
    dust_concentration: "",
    pressure: "",
    air_purity: "",
  });
  const [listening, setListening] = useState<Boolean>(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource("http://localhost:4000/events");

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setLastReading(parsedData);
        setReadings((readings) => readings.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, lastReading]);

  return (
    <Fragment>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
      >
        <DashboardTemperature
          sx={{ height: "100%" }}
          value={lastReading.temperature}
        />
        <DashboardPressure
          sx={{ height: "100%" }}
          value={lastReading.pressure}
        />
        <DashboardHumidity
          sx={{ height: "100%" }}
          value={lastReading.humidity}
        />
        <DashboardDust
          sx={{ height: "100%" }}
          value={lastReading.dust_concentration}
        />
        <DashboardAirPurity
          sx={{ height: "100%" }}
          value={lastReading.air_purity}
        />
      </Stack>
    </Fragment>
  );
};

export default Dashboard;
