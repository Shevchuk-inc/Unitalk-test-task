import { Layout } from "@/components/Layout";
import UserTable from "@/components/UserTable/UserTable";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

const UserManagement: FC = () => {
  return (
    <Layout>
      <Box>
        <Typography variant="h4" sx={{ py: 2, mb: 3 }}>
          User Management
        </Typography>
        <UserTable />
      </Box>
    </Layout>
  );
};

export { UserManagement };
