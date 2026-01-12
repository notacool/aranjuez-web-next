import React from "react";
import { Grid2, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useScreenSize } from "@hooks/useScreenSize";
import { INTERESTING_SITES } from "@const/interestingSites";
import { InterestingSites } from "types";

interface ISearchProps {
  sites: InterestingSites[];
  setSearchResult: (e: InterestingSites[]) => void;
}

export default function Searcher(props: ISearchProps) {
  const { isDesktop } = useScreenSize();
  const getSearch = (search: string) => {
    const result = INTERESTING_SITES.filter((site) =>
      site.name.toLowerCase().includes(search.toLowerCase())
    );
    props.setSearchResult(result);
  };

  return (
    <Grid2 size={{ xs: isDesktop ? 12 : 10 }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SearchIcon sx={{ ml: 1 }} color="disabled" />
        <InputBase
          id="search-sites"
          name="search"
          sx={{ ml: 2, flex: 1 }}
          placeholder="Buscar"
          onChange={(e) => getSearch(e.target.value)}
        />
      </Paper>
    </Grid2>
  );
}
