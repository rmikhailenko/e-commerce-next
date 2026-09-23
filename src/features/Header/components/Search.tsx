import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "./SearchIcon";

export default function Search() {
  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        component="search"
        placeholder="Search for..."
        size="small"
        color="primary"
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ alignSelf: "center", marginLeft: 0 }}
              >
                <SearchIcon sx={{ height: 15, width: 15 }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
