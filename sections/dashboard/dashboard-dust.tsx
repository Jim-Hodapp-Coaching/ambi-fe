import PropTypes from "prop-types";
import { Card, CardContent, Stack, Typography } from "@mui/material";

export const DashboardDust: React.FC<any> = (props: any) => {
  const { sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Dust Concentration
            </Typography>
            <Typography variant="h4">
              {value != "" ? (
                <Typography variant="h6">{value} pcs/ltr</Typography>
              ) : (
                <Typography variant="h6">Loading...</Typography>
              )}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

DashboardDust.propTypes = {
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};
