import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        background: "#292b2c",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        height: 25,
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1, color: "#fff" }} placeholder="Search" />
      <IconButton type="button" sx={{ p: "10px" }}>
        <SearchIcon sx={{ color: "#999" }} />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
