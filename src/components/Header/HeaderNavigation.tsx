import { Box, Button } from "@mui/material";
import router from "../../routes/Routes";
import { pagesInterface } from "../../interfaces/components/header.interfaces";

interface HeaderNavigationProps {
  pages: pagesInterface
}

function HeaderNavigation({ pages }: HeaderNavigationProps) {
  const onClick = (path: string) => {
    router.navigate(path);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            onClick={() => onClick(page.path)}
            key={page.title}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default HeaderNavigation;
