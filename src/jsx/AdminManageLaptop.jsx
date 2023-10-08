import Adminpanel from "./Adminpanel";
import AdminList from "./AdminList";
import ManageLaptop from "./ManageLaptop";
import { Stack } from "@mui/material";

function AdminManageLaptop(){
    return(
          <div>
            <Adminpanel/>
            <Stack direction={"row"}>
                <AdminList/>
                <ManageLaptop/>
            </Stack>
          </div>
    );
}

export default AdminManageLaptop;