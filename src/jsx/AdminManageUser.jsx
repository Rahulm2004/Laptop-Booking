import Adminpanel from "./Adminpanel";
import AdminList from "./AdminList";
import { Stack } from "@mui/material";
import ManageUser from "./ManageUser";
function AdminManageUser(){
    return(
        <div>
           <Adminpanel/>
           <Stack direction={"row"}>
               <AdminList/>
               <ManageUser/>
           </Stack>
        </div>
    );

}
export default AdminManageUser;