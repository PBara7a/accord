import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { setSearchString } from "../../../features/appSlice";

function SearchBar() {
  const { searchString } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchString(e.target.value));
  };

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
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff" }}
        placeholder="Search"
        value={searchString}
        onChange={handleChange}
      />
      <IconButton type="button" sx={{ p: "10px" }}>
        <SearchIcon sx={{ color: "#999" }} />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
